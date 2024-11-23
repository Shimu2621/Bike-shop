import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleService = () => {
  const { id } = useParams(); // Retrieve the ID from URL
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      axios
        .get(`http://localhost:5000/services/${id}`)
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
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default SingleService;
