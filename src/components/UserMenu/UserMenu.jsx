import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import { TbLogout2 } from "react-icons/tb";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={s.wrapper}>
      <p className={s.text}>
        Welcome, <span className={s.accent}>{userName}</span>
      </p>
      <button className={s.btn} onClick={handleLogout}>
        <TbLogout2 />
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
