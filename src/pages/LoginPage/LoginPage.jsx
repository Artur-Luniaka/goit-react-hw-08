import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId, useState } from "react";
import * as yup from "yup";
import s from "./LoginPage.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { MdBookmarkAdded } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";

const LoginPage = () => {
  const [showPass, setShowPass] = useState();

  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const loginValidation = yup.object({
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
      .required("Please, enter your password"),
  });

  const emailFieldId = useId();
  const passwordFieldId = useId();

  const contactLogin = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidation}
      onSubmit={contactLogin}
    >
      <Form className={s.form}>
        <h2 className={s.title}>Please, enter your data for Login</h2>
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
            type={showPass ? "text" : "password"}
            name="password"
            id={passwordFieldId}
          />
          <button
            className={s.eye_icon}
            type="button"
            onClick={() => setShowPass((prev) => !prev)}
          >
            {showPass ? <IoEye className={s.eye_icon_show}/> : <FaEyeSlash />}
          </button>
          <ErrorMessage name="password" component="span" />
        </div>
        <button className={s.button} type="submit">
          <MdBookmarkAdded />
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginPage;
