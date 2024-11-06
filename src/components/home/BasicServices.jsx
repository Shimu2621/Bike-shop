import React from "react";
import services from "../../staticData/service";

const BasicServices = () => {
  return (
    <div className="basic-services main_container">
      {services.map((service) => (
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
      ))}
    </div>
  );
};

export default BasicServices;
