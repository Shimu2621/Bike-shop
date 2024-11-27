import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./styles/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import ServicePage from "./components/pages/ServicePage.jsx";
import ProductPage from "./components/pages/ProductPage.jsx";
import ContactUs from "./components/pages/ContactUs.jsx";
import Signup from "./components/pages/Signup.jsx";
import Signin from "./components/auth/Signin.jsx";
import MainLayout from "./Layout/MainLayout.jsx";
import { Toaster } from "react-hot-toast";
import AboutUs from "./components/pages/AboutUs.jsx";
import SingleService from "./components/home/SingleService.jsx";
import SingleProduct from "./components/home/SingleProduct.jsx";
import CreateProduct from "./components/admin/CreateProduct.jsx";
import CreateService from "./components/admin/CreateService.jsx";
import UpdateProduct from "./components/admin/UpdateProduct.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import UpdateService from "./components/admin/UpdateService.jsx";
import ProductInventory from "./components/admin/ProductInventory.jsx";
import ServiceInventory from "./components/admin/ServiceInventory.jsx";
import CartPage from "./components/user/CartPage.jsx";
import ErrorPage from "./components/home/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
      {
        path: "services",
        element: <ServicePage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "/services/:id",
        element: <SingleService />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
    ],
  },
  {
    path: "/cart",
    element: <CartPage />,
  },

  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "admin-dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/create-product",
    element: <CreateProduct />,
  },
  {
    path: "/create-service",
    element: <CreateService />,
  },
  {
    path: "/update-product/:id",
    element: <UpdateProduct />,
  },
  {
    path: "/update-service/:id",
    element: <UpdateService />,
  },
  {
    path: "/product-inventory",
    element: <ProductInventory />,
  },
  {
    path: "/service-inventory",
    element: <ServiceInventory />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <div>
      <Toaster />
    </div>
  </React.StrictMode>
);
