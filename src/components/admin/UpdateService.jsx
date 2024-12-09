import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import signupanimation from "../../../public/signin.json";
import Lottie from "lottie-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

// Validation schema using Yup
const ServiceSchema = Yup.object().shape({
  thumbnail: Yup.string().url("Invalid URL").required("Thumbnail is required"),
  title: Yup.string().required("Title is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be a positive number")
    .min(1, "Price must be at least $1"),
});

const UpdateService = () => {
  const { id } = useParams();
  const [service, setService] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchService = async () => {
      axios
        .get(`https://bike-shop-server-omega.vercel.app/services/${id}`)
        .then((response) => {
          //   console.log(response.data);
          setService(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchService();
  }, [id]);

  if (!service) {
    return <div>Loading....</div>;
  }
  console.log(service);
  const { thumbnail, title, description, price } = service;

  const handleSubmit = (values) => {
    console.log(values);
    axios
      .put(
        `https://bike-shop-server-omega.vercel.app/update-service/${id}`,
        values
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.data.acknowledged) {
          navigate("/service-inventory");
          toast.success("Serivce Updated successfully!");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="service_form main_container">
      <h2>Update Service</h2>
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
              thumbnail: thumbnail,
              title: title,
              description: description,
              price: price,
            }}
            validationSchema={ServiceSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="service-form">
                {/* thumbnail Url */}
                <div className="form-group">
                  <label htmlFor="thumbnail">Thumbnail URL:</label>
                  <Field type="text" id="thumbnail" name="thumbnail" />
                  <ErrorMessage
                    name="thumbnail"
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

                <button type="submit" className="submit-button">
                  Update Service
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default UpdateService;
