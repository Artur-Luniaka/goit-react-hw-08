import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <NavLink to="registration">Sign Up</NavLink>
      <NavLink to="login">Log In</NavLink>
    </div>
  );
};

export default AuthNav;
