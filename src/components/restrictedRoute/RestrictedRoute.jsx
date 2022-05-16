import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

export const RestrictedRoute = () => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const state = location.state;

  let from = state?.from?.pathname || "/";

  return user ? (
    <Navigate to={from} state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
