import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const loggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <Navigation />
      {loggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default AppBar;
