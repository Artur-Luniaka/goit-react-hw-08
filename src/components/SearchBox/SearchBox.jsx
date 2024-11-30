import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { MdOutlinePersonSearch } from "react-icons/md";
import { setNameFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => dispatch(setNameFilter(e.target.value));

  return (
    <>
      <div className={s.div}>
        <p className={s.text}>
          <MdOutlinePersonSearch className={s.icon} />
          Find contacts by name
        </p>
        <input className={s.input} type="text" onChange={handleSearchChange} />
      </div>
    </>
  );
};

export default SearchBox;
