import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const SingleService = () => {
  const { id } = useParams(); // Retrieve the ID from URL
  const [service, setService] = useState(null);
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState(""); // Example email

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserEmail(user.email);
  }, []);
  console.log(userEmail);

  useEffect(() => {
    const fetchService = async () => {
      axios
        .get(`https://bike-shop-server-omega.vercel.app/services/${id}`)
        .then((response) => {
          setService(response.data.data || response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchService(); // Call the function here
  }, [id]);

  if (!service) {
    return <div>Loading...</div>; // Or a custom loading spinner/message
  }
  console.log(service);

  const handleAddToCart = () => {
    const cartItem = {
      productId: service._id,
      name: service.title,
      thumbnail: service.image,
      price: service.price,
      email: userEmail,
    };
    axios
      .post("https://bike-shop-server-omega.vercel.app/create-order", cartItem)
      .then((response) => {
        console.log(response.data);
        navigate("/cart");
        toast.success("Order added to cart successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong.");
      });
  };

  return (
    <div className="single_service_details main_container">
      <div className="single_service_img">
        <img src={service?.image} alt="" />
      </div>
      <div className="single_service_content">
        <h2>Service Details</h2>
        <h3>Service name: {service?.title}</h3>
        <h4>Price: ${service?.price}</h4>
        <p>Description: {service?.description}</p>
        <button onClick={handleAddToCart}>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleService;
