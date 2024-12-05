import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const linkClass = ({ isActive }) => {
    return clsx(s.nav_link, isActive && s.active);
  };

  const loggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.wrapper}>
      <NavLink className={linkClass} to="/">
        Home
      </NavLink>
      {loggedIn && (
        <NavLink className={linkClass} to="contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
