import React, { useEffect } from "react";
import services from "../../staticData/service";
//import Aos
import Aos from "aos";
import "aos/dist/aos.css";
import { Divider } from "antd";

const BasicServices = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 200, // Offset for triggering animation
      once: true, // Animation only occurs once
    });
  }, []);
  return (
    <div className="basic-services main_container">
      {/* {services.map((service) => (
        <div key={service?.id} className="service_item">
          <div className="icon">
            <img
              src={service?.image}
              height={80}
              width={80}
              alt="service-img"
            />
          </div>
          <div className="text">
            <h2>{service?.title}</h2>
            <p>{service?.status}</p>
          </div>
        </div>
      ))} */}

      <div className="service_item" data-aos="fade-right">
        <img
          src="/images/service1-icon.png"
          alt="Service 1"
          height={80}
          width={80}
        />
        <h4>Light weight</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="service_item" data-aos="fade-right">
        <img
          src="/images/service2-icon.png"
          alt="Service 2"
          height={80}
          width={80}
        />
        <h4>Colors wide range</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="service_item" data-aos="fade-left">
        <img
          src="/images/service3-icon.png"
          alt="Service 3"
          height={80}
          width={80}
        />
        <h4>Aerograde aluminium</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="service_item" data-aos="fade-left">
        <img
          src="/images/service4-icon.png"
          alt="Service 4"
          height={80}
          width={80}
        />
        <h4>Free shipping</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};

export default BasicServices;
