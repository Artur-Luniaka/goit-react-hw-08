import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { MdOutlinePersonSearch } from "react-icons/md";
import { setNameFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => dispatch(setNameFilter(e.target.value));
  return (
    <>
      <div className={s.div}>
        <p className={s.text}>
          Find contact by name or number
          <MdOutlinePersonSearch className={s.icon} />
        </p>
        <input className={s.input} type="text" onChange={handleSearchChange} />
      </div>
    </>
  );
};

export default SearchBox;
