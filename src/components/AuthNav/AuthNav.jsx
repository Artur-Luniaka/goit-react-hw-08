import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={s.wrapper}>
      <NavLink to="registration">Sign Up</NavLink>
      <NavLink to="login">Log In</NavLink>
    </div>
  );
};

export default AuthNav;
