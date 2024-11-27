import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import signupanimation from "../../../public/signin.json";
import Lottie from "lottie-react";
import axios from "axios";
import toast from "react-hot-toast";

// Validation schema using Yup
const ProductSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  thumbnail: Yup.string().url("Invalid URL").required("Thumbnail is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be a positive number")
    .min(1, "Price must be at least $1"),
  ratingCount: Yup.number().required("Rating is required").min(1).max(5),
  category: Yup.string()
    .oneOf(
      ["road bike", "mountain bike", "kids bike", "girl bike"],
      "Invalid category"
    )
    .required("Category is required"),
  featured: Yup.boolean().required("Featured is required"),
});

const CreateProduct = () => {
  const handleSubmit = (values) => {
    console.log("Product Created", values);

    axios
      .post("http://localhost:5000/create-product", values)
      .then((response) => {
        console.log("Response", response.data);
        if (response.data || response.data.acknowledged) {
          toast.success("Product created successfully");
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="product_form main_container">
      <h2>Create New Product</h2>
      <div className="product_form_container">
        <div className="product_form_left">
          <Lottie
            className="lottie-animation"
            animationData={signupanimation}
            loop={true}
          />
        </div>

        <div className="product_form_right">
          <Formik
            initialValues={{
              name: "",
              thumbnail: "",
              price: "",
              ratingCount: "",
              category: "",
              featured: false,
            }}
            validationSchema={ProductSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form className="product-form">
                {/* name */}
                <div className="form-group">
                  <label htmlFor="name">Product Name:</label>
                  <Field type="text" id="name" name="name" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
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
                {/* price */}
                <div className="form-group">
                  <label htmlFor="price">Price ($)</label>
                  <Field type="number" id="price" name="price" />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="error"
                  />
                </div>
                {/* ratingCount */}
                <div className="form-group">
                  <label htmlFor="ratingCount">Rating Count (1-5):</label>
                  <Field as="select" name="ratingCount">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <option key={rating} value={rating}>
                        {rating}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="ratingCount"
                    component="div"
                    className="error"
                  />
                </div>
                {/* category */}
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <Field as="select" name="category">
                    <option value="">Select Category</option>
                    <option value="road bike">Road Bike</option>
                    <option value="mountain bike">Mountain Bike</option>
                    <option value="kids bike">Kids Bike</option>
                    <option value="girl bike">Girl Bike</option>
                  </Field>
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="error"
                  />
                </div>
                {/* featured */}
                <div className="form-group featured-switch">
                  <label htmlFor="featured">Featured</label>
                  <Field
                    type="checkbox"
                    name="featured"
                    className="switch"
                    onChange={(e) =>
                      setFieldValue("featured", e.target.checked)
                    }
                  />
                  <ErrorMessage
                    name="featured"
                    component="div"
                    className="error"
                  />
                </div>

                <button type="submit" className="submit-button">
                  Create Product
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
