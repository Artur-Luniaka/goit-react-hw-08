import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as yup from "yup";
import s from "./RegistrationPage.module.css";

const RegistrationPage = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const signUpValidation = yup.object({
    name: yup
      .string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Please, enter your name"),
    email: yup
      .string()
      .email("Please enter correct email")
      .required("Please, enter your email"),
    password: yup
      .string()
      .min(8, "Must be minimum 8 symbols")
      .matches(/[A-Z]/, "Must be minimum 1 big letter")
      .matches(/[a-z]/, "Must be minimum 1 small letter")
      .matches(/\d/, "Must be minimum 1 digit")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "Must be minimum 1 special symbol")
      .required("Please, enter your password"),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={signUpValidation}>
      <Form className={s.form}>
        <h2 className={s.title}>Please, fill the form below for SignUp</h2>
        <div className={s.box}>
          <label className={s.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field className={s.input} type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={s.box}>
          <label className={s.label} htmlFor={emailFieldId}>
            Email
          </label>
          <Field
            className={s.input}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage name="email" component="span" />
        </div>
        <div className={s.box}>
          <label className={s.label} htmlFor={passwordFieldId}>
            Password
          </label>
          <Field
            className={s.input}
            type="password"
            name="password"
            id={passwordFieldId}
          />
          <ErrorMessage name="password" component="span" />
        </div>
        <button className={s.button} type="submit">
          Sign Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;
