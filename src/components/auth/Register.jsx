import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input, Button, Divider } from "antd";
import { Link, useNavigate } from "react-router-dom";
import signupanimation from "../../../public/signin.json";
import Lottie from "lottie-react";
import axios from "axios";
import toast from "react-hot-toast";

// Yup validation schema for Signup
const RegisterSchema = Yup.object().shape({
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

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    // Handle form submission
    // console.log("Signup Form Data:", values);
    // alert("Signup Successful!");
    const newUser = {
      fullName: values.fullName,
      imageUrl: values.imageUrl,
      email: values.email,
      password: values.password,
      role: "user",
    };
    console.log(newUser);

    axios
      .post("http://localhost:5000/signup", newUser)
      .then((response) => {
        console.log("Response", response.data);
        if (response.data.data.acknowledged) {
          toast.success("User created successfully");
          navigate("/signin");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        toast.error("Something went wrong");
      });
  };
  return (
    <div className="register-container">
      {/* Left side animation */}
      <div className="register-left">
        <Lottie
          className="register-animation"
          animationData={signupanimation}
          loop={true}
        />
      </div>

      {/* Right side animation */}
      <div className="register-right">
        <h3>Create an Account</h3>
        <Formik
          initialValues={{
            fullName: "",
            imageUrl: "",
            email: "",
            password: "",
          }}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ isValid }) => (
            <Form className="register-form">
              {/* Full Name field here  */}
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <Field name="fullName" type="text" className="form-control" />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="error"
                />
              </div>

              {/* Image Url field here  */}
              <div className="form-group">
                <label htmlFor="imageUrl">Image URL</label>
                <Field name="imageUrl" type="url" className="form-control" />
                <ErrorMessage
                  name="imageUrl"
                  component="div"
                  className="error"
                />
              </div>

              {/* email field here  */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" className="form-control" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              {/* Password field here  */}
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
                Sign Up
              </button>

              <p className="text-center">
                Already have an account? <Link to="/signin">Sign In</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
