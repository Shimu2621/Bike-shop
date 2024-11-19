import React, { useEffect } from "react";
import featuredServices from "../../staticData/featuredService";
import service from "../../../public/images/repair0.png";

import AOS from "aos";
import "aos/dist/aos.css";

const FeaturedServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animation duration and "once" to animate only once
  }, []);
  return (
    <div className="featured_service">
      <div className="featured_service_section">
        <div className="section_left">
          <h1 data-aos="fade-up">Bike Services & Repairs</h1>

          <div className="section_grid">
            {featuredServices.length > 0 &&
              featuredServices.map((featuredService) => (
                <div
                  key={featuredService?.id}
                  className="featured_service_list"
                  data-aos="fade-up"
                >
                  <div className="service_list_item">
                    <img
                      width={50}
                      height={50}
                      src={featuredService?.icon}
                      alt={`${service.title} Icon`}
                      data-aos="zoom-in"
                    />
                    <h4 data-aos="fade-up">{featuredService?.title}</h4>
                  </div>

                  <div className="featured_service_list">
                    <p data-aos="fade-up">{featuredService?.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="section_right" data-aos="fade-left">
          <img width={650} height={780} src={service} alt="service" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
