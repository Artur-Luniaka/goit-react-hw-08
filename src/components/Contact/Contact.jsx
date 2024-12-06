import s from "./Contact.module.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { TbPhone } from "react-icons/tb";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  activeEditModal,
  activeModal,
  getContactData,
} from "../../redux/contacts/slice";
import {
  selectDelModal,
  selectEditModal,
} from "../../redux/contacts/selectors";
import DeleteModal from "../DeleteModal/DeleteModal";
import { FaEdit } from "react-icons/fa";
import EditModal from "../EditModal/EditModal";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const delModal = useSelector(selectDelModal);
  const editModal = useSelector(selectEditModal);

  const handleEditForm = ({ name, number, id }) => {
    dispatch(activeEditModal());
    dispatch(getContactData({ name, number, id }));
  };

  return (
    <>
      {delModal && <DeleteModal id={id} />}
      {editModal && <EditModal />}
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
      <div className={s.wrapper_btn}>
        <button
          className={s.edit_btn}
          onClick={() => handleEditForm({ name, number, id })}
        >
          <FaEdit className={s.icon} />
        </button>
        <button className={s.del_btn} onClick={() => dispatch(activeModal())}>
          <RiDeleteBin2Fill className={s.icon} />
        </button>
      </div>
    </>
  );
};

export default Contact;
