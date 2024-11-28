import React, { useEffect, useState } from "react";

import "aos/dist/aos.css";
import AOS from "aos";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ServiceCard = () => {
  const [services, setServices] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const fetchServices = () => {
      axios
        .get("https://bike-shop-server-omega.vercel.app/services")
        .then((response) => {
          //   console.log(response.data.data);
          setServices(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchServices();
  }, []);
  if (!services) {
    return <p>loading....</p>;
  }

  return (
    <div className="service main_container">
      <div className="service_header">
        <h2 className="home_section_title" data-aos="fade-up">
          Featured Services
        </h2>
        <p
          className="section_title_text"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Explore comprehensive maintenance, quick fixes, and more, all crafted{" "}
          <br />
          with precision and care to meet your biking needs.
        </p>
      </div>

      <div className="service_card main_container">
        {services.map((service, index) => (
          <div
            key={service._id}
            className="service_card_container"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="service_card_img">
              <img src={service.image} alt="service" />
            </div>
            <div className="service_section">
              <h2>{service.title}</h2>
              <h3>Price: ${service.price}</h3>
              <p>{service.description}</p>
              <Link to={`/services/${service._id}`}>
                <button>View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
