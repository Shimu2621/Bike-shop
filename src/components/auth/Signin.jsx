import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Button, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import signinanimation from "../../../public/signin.json";
import Lottie from "lottie-react";
import axios from "axios";
import toast from "react-hot-toast";

// Yup validation schema for Signup
const SigninSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please input your email!"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Please input your password!"),
});

const Signin = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    // Handle form submission
    console.log("Signup Form Data:", values);
    // alert("Signin Successful!");
    const user = {
      email: values.email,
      password: values.password,
    };
    console.log(user);

    axios
      .post("https://bike-shop-server-omega.vercel.app/signin", user)
      .then((response) => {
        console.log("Response", response.data.data);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        toast.success("You Logged In Successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log("Error:", error);
        toast.error("Logged In Failed");
      });
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
            email: "",
            password: "",
          }}
          validationSchema={SigninSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
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
                disabled={!isValid}
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
