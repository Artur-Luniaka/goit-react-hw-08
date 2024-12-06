import { Box, Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { selectDelModal } from "../../redux/contacts/selectors";
import { diactiveModal } from "../../redux/contacts/slice";
import { deleteContact } from "../../redux/contacts/operations";
import s from "./DeleteModal.module.css";

const DeleteModal = ({ id }) => {
  const dispatch = useDispatch();
  const modal = useSelector(selectDelModal);

  const isDeleteContact = () => {
    dispatch(deleteContact(id));
  };

  const handleCloseModal = () => {
    dispatch(diactiveModal());
  };

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <Modal sx={style} open={modal}>
      <Box sx={style}>
        <div className={s.wrapper}>
          <h2 className={s.title}>Are you want to delete this contact?</h2>
          <div className={s.wrapper_btn}>
            <button className={s.btn_green} onClick={() => isDeleteContact()}>
              Yes
            </button>
            <button className={s.btn_red} onClick={handleCloseModal}>
              No
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
