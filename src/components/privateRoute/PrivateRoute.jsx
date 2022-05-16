import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  const { user } = useSelector((state) => state.user);

  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
};
