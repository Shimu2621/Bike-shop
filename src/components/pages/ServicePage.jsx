import AOS from "aos";
import "aos/dist/aos.css";

import slider from "../../../public/images/background2.png";
import choose from "../../../public/images/choose.png";
import service from "../../../public/images/service-slider2.png";
import service1 from "../../../public/images/service-slider3.png";
import team from "../../../public/images/team.png";
import team1 from "../../../public/images/team1.png";
import team2 from "../../../public/images/team2.png";
import { useEffect } from "react";
import ChooseUs from "../home/ChooseUs";
import FeaturedServices from "../home/FeaturedServices";
import ServiceCard from "../home/ServiceCard";

const ServicePage = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200 }); // Duration in ms
  }, []);

  return (
    <div className="services">
      <div className="service_container">
        <div className="service_slider" data-aos="fade-down">
          <img
            className="service_slider_img"
            src={slider}
            alt="slider-img"
            data-aos="fade-down"
          />
          <h2 className="service_slider_text" data-aos="fade-right">
            Explore Our Services
          </h2>
        </div>

        <div className="service_wrapper">
          <div className="service_header" data-aos="fade-right">
            <h1>One Stop Solution For Bikes</h1>
          </div>

          <div className="service_section_top" data-aos="fade-up">
            <div className="section_img">
              <img src={service} alt="service" />
            </div>

            <div className="section_list">
              <div className="section_items" data-aos="fade-left">
                <img width={50} height={50} src={choose} alt="choose" />
                <h5>Why Our Service is best</h5>
              </div>
              <div className="section_text">
                <h2>Comprehensive Bike Repair Services</h2>
                <p>
                  Riding a well-maintained bike can make all the difference in
                  your cycling experience. At our shop, we specialize in
                  offering top-notch repair and maintenance services to keep
                  your bike running smoothly. From regular tune-ups, our
                  certified technicians handle every job with precision and
                  care.
                </p>
                <p>
                  Our goal is to ensure your safety and enhance your bike's
                  performance, whether you’re a casual rider or a dedicated
                  cyclist. Schedule a maintenance check today, and ride with the
                  confidence that your bike is in excellent hands.
                </p>
              </div>
            </div>
          </div>

          <div className="service_section_bottom" data-aos="fade-up">
            <div className="section_list">
              <div className="section_items" data-aos="fade-right">
                <img width={50} height={50} src={choose} alt="choose" />
                <h5>Our Full Service Shop</h5>
              </div>
              <div className="section_text">
                <h2>Keep explore our maintenance service</h2>
                <p>
                  At our bike shop, we offer comprehensive repair and
                  maintenance services to keep your bike in perfect condition.
                  Whether it's a routine tune-up, fixing a flat tire, or a full
                  overhaul, our skilled technicians are equipped to handle all
                  kinds of repairs. We use high-quality parts and the latest
                  tools to ensure every job is done with precision and care.
                </p>
                <p>
                  Bring your bike to us, and let our experts give it the
                  attention it deserves so you can enjoy a smooth and worry-free
                  ride every time.
                </p>
              </div>
            </div>

            <div className="section_img" data-aos="fade-left">
              <img width={700} height={480} src={service1} alt="service" />
            </div>
          </div>

          <ServiceCard />

          <FeaturedServices />

          {/* Our team member section */}
          {/* <div className="service_section_footer" data-aos="fade-up">
            <div className="footer_header">
              <h2>OUR TEAM MEMBER</h2>
              <p>
                We’ll be happy to share our repair recommendations, give you an
                estimate <br /> on the pricing, and share how long the repair
                may take.
              </p>
            </div>

            <div className="footer_wrapper">
              <div className="footer_list" data-aos="fade-right">
                <img src={team} alt="team" />
                <h4>Co-Founder</h4>
                <h3>Biance Wood</h3>
              </div>
              <div className="footer_list" data-aos="fade-up">
                <img src={team2} alt="team" />
                <h4>Assistant-Manager</h4>
                <h3>Steven Victoria</h3>
              </div>
              <div className="footer_list" data-aos="fade-left">
                <img src={team1} alt="team" />
                <h4>Sale Manager</h4>
                <h3>Frank Gorden</h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
