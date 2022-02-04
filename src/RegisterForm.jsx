import React from "react";
import "./App.css";
import { useFormik } from "formik";
const RegisterForm = () => {
  //Validate Function
  const validate = (values) => {
    const errors = {};
    //email
    if (!values.email) {
      errors.email = "Required";
    } else if (values.email.length < 4) {
      errors.email = "Must be 5 characters or more!";
    }

    //password
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more!";
    } else if (values.password === "12345678") {
      errors.password = "Must be 12345678!";
    }

    //repassword
    if (!values.repassword) {
      errors.repassword = "Required";
    } else if (values.repassword !== values.password) {
      errors.repassword = "second password doesn't match!";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repassword: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      <h1>Register Form</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Adress</label>
        <input
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error">{formik.errors.password}</div>
        ) : null}
        <label htmlFor="repassword">Re-Password</label>
        <input
          id="repassword"
          name="repassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.repassword}
          onBlur={formik.handleBlur}
        />
        {formik.touched.repassword && formik.errors.repassword ? (
          <div className="error">{formik.errors.repassword}</div>
        ) : null}
        <button type="sumbit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
