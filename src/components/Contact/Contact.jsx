import s from "./Contact.module.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { TbPhone } from "react-icons/tb";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { activeModal } from "../../redux/contacts/slice";
import { selectModal } from "../../redux/contacts/selectors";
import DeleteModal from "../DeleteModal/DeleteModal";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const modal = useSelector(selectModal);

  return (
    <>
      {modal && <DeleteModal id={id} />}
      <div>
        <p className={s.text}>
          <HiOutlineUserCircle />
          {name}
        </p>
        <p className={s.text}>
          <TbPhone />
          {number}
        </p>
      </div>
      <button className={s.button} onClick={() => dispatch(activeModal())}>
        <RiDeleteBin2Fill className={s.icon} />
      </button>
    </>
  );
};

export default Contact;
