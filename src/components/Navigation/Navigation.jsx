import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";
import clsx from "clsx";
import { FaHome } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";

const Navigation = () => {
  const linkClass = ({ isActive }) => {
    return clsx(s.nav_link, isActive && s.active);
  };

  const loggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.wrapper}>
      <NavLink className={linkClass} to="/">
        <FaHome />
        Home
      </NavLink>
      {loggedIn && (
        <NavLink className={linkClass} to="contacts">
          <RiContactsBook2Fill />
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
