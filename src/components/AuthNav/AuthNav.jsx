import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import clsx from "clsx";

const AuthNav = () => {
  const linkClass = ({ isActive }) => {
    return clsx(s.nav_link, isActive && s.active);
  };

  return (
    <div className={s.wrapper}>
      <NavLink className={linkClass} to="registration">
        Sign Up
      </NavLink>
      <NavLink className={linkClass} to="login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
