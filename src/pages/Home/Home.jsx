import { FaFileSignature } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdContentPasteSearch } from "react-icons/md";
import s from "./Home.module.css";

const Home = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>
        SignUp or Login to create PhoneBook
        <span className={s.title_icon}>
          <FaFileSignature />
        </span>
      </h2>
      <ul className={s.list}>
        <li className={s.item}>
          Add{" "}
          <span className={s.add_icon}>
            <MdGroupAdd />
          </span>
        </li>
        <li className={s.item}>
          Search <MdContentPasteSearch />
        </li>
        <li className={s.item}>
          Edit{" "}
          <span className={s.edit_icon}>
            <FaEdit />
          </span>
        </li>
        <li className={s.item}>
          Delete{" "}
          <span className={s.del_icon}>
            <RiDeleteBin5Line />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Home;
