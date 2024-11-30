import s from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useId } from "react";
import { PiUserPlusFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };
  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationForm = yup.object({
    name: yup
      .string()
      .min(3, "Too Short!")
      .max(30, "So Long!")
      .required("Please,enter your name!"),
    number: yup
      .string()
      .min(3, "Too Short!")
      .max(15, "So Long!")
      .required("Please,enter your phone number!"),
  });

  const addNewContact = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={addNewContact}
      validationSchema={validationForm}
    >
      <Form className={s.form}>
        <div className={s.box}>
          <label className={s.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field className={s.input} type="text" name="name" id={nameFieldId} />
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
        <button className={s.button} type="submit">
          <PiUserPlusFill />
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
