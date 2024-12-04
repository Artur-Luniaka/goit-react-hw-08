import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import s from "./Navigation.module.css";

const Navigation = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.wrapper}>
      <NavLink to="/">Home</NavLink>
      {loggedIn && <NavLink to="contacts">Contacts</NavLink>}
    </div>
  );
};

export default Navigation;
