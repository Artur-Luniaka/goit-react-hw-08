import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>Welcome, {userName}</p>
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
};

export default UserMenu;
