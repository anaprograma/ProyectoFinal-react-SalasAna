import React from "react";
import "./checkout.css";
import { Formik } from "formik";

const CheckOut = () => {
  return (
    <div className="container-form">
      <Formik initialValues={{ name: "", apellido: "", email: "" }}>
        {() => (
          <form className="form-checkout row g-3">
            <div className="form-floating ">
              <input
                type="text"
                name="name"
                className="form-control"
                id="floatingPassword"
                placeholder="Nombre"
              />
              <label htmlFor="floatingPassword">Nombre</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                name="apellido"
                className="form-control"
                id="floatingPassword"
                placeholder="Apellido"
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
