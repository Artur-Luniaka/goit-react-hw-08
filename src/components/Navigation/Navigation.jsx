import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {loggedIn && <NavLink to="contacts">Contacts</NavLink>}
    </div>
  );
};

export default Navigation;
