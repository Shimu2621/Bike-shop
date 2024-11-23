import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import signupanimation from "../../../public/signin.json";
import Lottie from "lottie-react";
import axios from "axios";
import toast from "react-hot-toast";

// Validation schema using Yup
const ServiceSchema = Yup.object().shape({
  image: Yup.string().url("Invalid URL").required("Image URL is required"),
  title: Yup.string().required("Title is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be a positive number")
    .min(1, "Price must be at least $1"),
});

const CreateService = () => {
  const handleSubmit = (values) => {
    console.log("service Created", values);

    axios
      .post("http://localhost:5000/create-service", values)
      .then((response) => {
        console.log("Response", response.data);
        if (response.data || response.data.acknowledged) {
          toast.success("Service created successfully");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };
  return (
    <div className="service_form main_container">
      <h2>Create New Service</h2>
      <div className="service_form_container">
        <div className="service_from_left">
          <Lottie
            className="lottie-animation"
            animationData={signupanimation}
            loop={true}
          />
        </div>
        <div className="service_form_right">
          <Formik
            initialValues={{
              image: "",
              title: "",
              description: "",
              price: "",
            }}
            validationSchema={ServiceSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="service-form">
                {/* Image URL */}
                <div className="form-group">
                  <label htmlFor="image">Image URL:</label>
                  <Field type="text" id="image" name="image" />
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="error"
                  />
                </div>
                {/* Title */}
                <div className="form-group">
                  <label htmlFor="title">Title:</label>
                  <Field type="text" id="title" name="title" />
                  <ErrorMessage
                    name="title"
                    component="div"
                    className="error"
                  />
                </div>
                {/* Description */}
                <div className="form-group">
                  <label htmlFor="description">Description:</label>
                  <Field
                    as="textarea"
                    id="description"
                    name="description"
                    rows="4"
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="error"
                  />
                </div>
                {/* Price */}
                <div className="form-group">
                  <label htmlFor="price">Price ($):</label>
                  <Field type="number" id="price" name="price" />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="error"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? "Submitting..." : "Create Service"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreateService;