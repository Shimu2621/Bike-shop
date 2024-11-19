import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import signinanimation from "../../../public/signin.json";
import Lottie from "lottie-react";

// Yup validation schema for Signup
const SigninSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "Full Name must be at least 3 characters")
    .required("Please enter your full name!"),
  imageUrl: Yup.string().url("Invalid URL format"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please input your email!"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Please input your password!"),
});

const Signin = () => {
  const handleSubmit = (values) => {
    // Handle form submission
    console.log("Signup Form Data:", values);
    // alert("Signin Successful!");
    const user = {
      email,
      password,
    };
    console.log(user);
  };

  return (
    <div className="signin-container">
      {/* Left side animation */}
      <div className="signin-left">
        <Lottie
          className="signin-animation"
          animationData={signinanimation}
          loop={true}
        />
      </div>

      {/* Right side animation */}
      <div className="signin-right">
        <h3>Sign In</h3>
        <Formik
          initialValues={{
            fullName: "",
            imageUrl: "",
            email: "",
            password: "",
          }}
          validationSchema={SigninSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid, dirty }) => (
            <Form className="signin-form">
              {/* Email field here */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              {/* Password field here */}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={!(isValid && dirty)}
              >
                Sign In
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Signin;
