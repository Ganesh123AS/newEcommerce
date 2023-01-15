import React from "react";
import "./register.css";
import logo from "../../assets/img/logo.png";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const RegisterUser = () => {
  const register = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    const response = await fetch(
      "http://localhost:4000/register",
      requestOptions
    );
    const data = await response.json();

    if (data) {
      alert(data.msg);
    }
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    // role: Yup.string().role("Invalid role").allow("customer", "admin"),
    password: Yup.string()
      .min(3, "Too Long!")
      .max(30, "too long")
      .required("Required"),
    phoneNumber: Yup.string().min(10).max(14).required("Required"),
    temporaryAddress: Yup.string()
      .min(5, "Enter the corrrect address")
      .required("Required"),
    permanentAddress: Yup.string()
      .min(5, "Enter the corrrect address")
      .required("Required"),
  });

  return (
    <>
      <div className="main-registration">
        <div className="registration-card">
          <div className="registration-card-image">
            <img src={logo} alt="logo" />
          </div>
          <div className="registration-header">
            <h2>Sign In</h2>
            <h5>Register the form to use the app</h5>
          </div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              role: "",
              password: "",
              phoneNumber: "",
              temporaryAddress: "",
              permanentAddress: "",
            }}
            // validationSchema={SignupSchema}

            validationSchema={SignupSchema}
            onSubmit={(values) => {
              register(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="registration-card-form">
                <div className="form-item">
                  <span className="form-item">First Name:</span>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    autoFocus
                  />
                  {errors.firstName && touched.firstName ? (
                    <div>{errors.firstName}</div>
                  ) : null}
                </div>
                <div className="form-item">
                  <span className="form-item">Last Name:</span>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && touched.lastName ? (
                    <div>{errors.lastName}</div>
                  ) : null}
                </div>
                <div className="form-item">
                  <span className="form-item">Email:</span>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  {errors.email && touched.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>

                <div className="form-item">
                  <span className="form-item">Role:</span>
                  <select name="userRole" className="select">
                    <option value="Role" label="Select a Role">
                      r
                    </option>
                    <option value="customer" label="Customer">
                      Customer
                    </option>
                    <option value="admin" label="Admin">
                      Admin
                    </option>
                  </select>
                  {errors.userRole && touched.userRole ? (
                    <div className="error">{errors.userRole}</div>
                  ) : null}
                </div>

                <div className="form-item">
                  <span className="form-item">Phone Number:</span>
                  <Field
                    type="number"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                  />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div>{errors.phoneNumber}</div>
                  ) : null}
                </div>
                <div className="form-item">
                  <span className="form-item">Temporary Address:</span>
                  <Field
                    type="text"
                    name="temporaryAddress"
                    placeholder="Enter your Temporary Address"
                  />
                  {errors.temporaryAddress && touched.temporaryAddress ? (
                    <div>{errors.temporaryAddress}</div>
                  ) : null}
                </div>
                <div className="form-item">
                  <span className="form-item">Permanent Address:</span>
                  <Field
                    type="text"
                    name="permanentAddress"
                    placeholder="Enter your Permanent Address"
                  />
                  {errors.permanentAddress && touched.permanentAddress ? (
                    <div>{errors.permanentAddress}</div>
                  ) : null}
                </div>
                <div className="form-item">
                  <span className="form-item">Password:</span>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                  {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </div>
                <div className="submit-btn">
                  <button type="submit" className="btn">
                    Submit
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
