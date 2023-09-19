import React from "react";
import "./checkout.css";
import { Formik } from "formik";
import * as yup from "yup";
//HANDLE ON SUBMIT
const submitHandler = (values, resetForm) => {
  console.log(values);
  resetForm();
};
//VALIDAR CON YUP
const yupSchema = yup
  .object({
    name: yup.string().min(2).max(12).required(),
    surname: yup.string().min(2).max(12).required(),
    email: yup.string().email().required(),
  })
  .required();
////////////////////777777
const CheckOut = () => {
  return (
    <div className="container-form">
      <Formik
        initialValues={{ name: "", surname: "", email: "" }}
        onSubmit={(values, { resetForm }) => submitHandler(values, resetForm)}
        validationSchema={yupSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isValid,
          dirty,
        }) => (
          <form className="form-checkout row g-3" onSubmit={handleSubmit}>
            <div className="form-floating ">
              <input
                type="text"
                name="name"
                className="form-control"
                id="floatingPassword"
                placeholder="Nombre"
                value={values.name}
                onChange={handleChange}
              />
              <label htmlFor="floatingPassword">Nombre</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                name="surname"
                className="form-control"
                id="floatingPassword"
                placeholder="Apellido"
                value={values.apellido}
                onChange={handleChange}
              />
              <label htmlFor="floatingPassword">Apellido</label>
            </div>
            <div className="form-floating mb-3">
              <input
                name="email"
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={values.email}
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default CheckOut;
