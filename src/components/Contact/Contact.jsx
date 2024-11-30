import s from "./Contact.module.css";
import { HiOutlineUserCircle } from "react-icons/hi";
import { TbPhone } from "react-icons/tb";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const isDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <>
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
      <button className={s.button} onClick={() => isDeleteContact(id)}>
        <RiDeleteBin2Fill className={s.icon} />
      </button>
    </>
  );
};

export default Contact;
