import { useState } from "react";
import { RiUser6Line, IcBaselineLogout, IcBaselineLogin } from "assets/Icons";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./nav.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "reducers/userSlice";
import DarkModeButton from "./cta/DarkModeButton";

export const Nav = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/auth");
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="nav_content">
      <div className="nav_wrapper">
        <NavLink to={"/"}>
          <div className="logo">StarTrivia</div>
        </NavLink>
        <div className="nav_right">
          <DarkModeButton />
          {user ? (
            <div className="cta">
              <NavLink to={"/profile"}>
                <RiUser6Line />
              </NavLink>
              <button
                title="logout"
                className="logout_btn_wrapper"
                onClick={handleLogout}
              >
                <IcBaselineLogout className="logout_btn" />
              </button>
            </div>
          ) : (
            <button
              title="login"
              className="login_btn_wrapper"
              onClick={handleLogin}
            >
              <IcBaselineLogin className="login_btn" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
