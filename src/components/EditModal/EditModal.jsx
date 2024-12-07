import { Box, Modal } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as yup from "yup";
import s from "./EditModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectEditForm,
  selectEditModal,
} from "../../redux/contacts/selectors";
import { diactiveEditModal } from "../../redux/contacts/slice";
import { editContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

const EditModal = () => {
  const dispatch = useDispatch();
  const editModal = useSelector(selectEditModal);
  const initialEditForm = useSelector(selectEditForm);

  const handleCloseModal = () => {
    dispatch(diactiveEditModal());
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationForm = yup.object({
    name: yup
      .string()
      .min(3, "Too Short!")
      .max(30, "So Long!")
      .required("Please, enter your name!"),
    number: yup
      .string()
      .min(3, "Too Short!")
      .max(15, "So Long!")
      .required("Please, enter your phone number!"),
  });

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const handleEditSubmit = (values) => {
    dispatch(editContact(values));
    toast.success("Contact edited succesfully 📝", {
      duration: 3000,
      position: "bottom-center",
      style: {
        backgroundColor: "#f8f8f8",
        color: "#2ecc71",
      },
    });
  };

  return (
    <Modal sx={style} open={editModal}>
      <Box sx={style}>
        <Formik
          initialValues={initialEditForm}
          validationSchema={validationForm}
          onSubmit={(values) => handleEditSubmit(values)}
        >
          <Form className={s.form}>
            <h2 className={s.title}>Edit your contact by form below</h2>
            <div className={s.box}>
              <label className={s.label} htmlFor={nameFieldId}>
                Name
              </label>
              <Field
                className={s.input}
                type="text"
                name="name"
                id={nameFieldId}
              />
              <ErrorMessage name="name" component="span" />
            </div>
            <div className={s.box}>
              <label className={s.label} htmlFor={numberFieldId}>
                Number
              </label>
              <Field
                className={s.input}
                type="tel"
                name="number"
                id={numberFieldId}
              />
              <ErrorMessage name="number" component="span" />
            </div>
            <div className={s.wrapper_btn}>
              <button className={s.btn_green} type="submit">
                Edit
              </button>
              <button
                type="button"
                className={s.btn_red}
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </Box>
    </Modal>
  );
};

export default EditModal;
