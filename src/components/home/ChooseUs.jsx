import React, { useEffect } from "react";
import choose from "../../../public/images/choose.png";
import about from "../../../public/images/about-us.png";
import Aos from "aos";
import "aos/dist/aos.css";

const ChooseUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 }); // Initialize AOS with a duration for animations
  }, []);
  return (
    <div className="choose_section main_container">
      <div className="choose_img" data-aos="fade-right">
        <img width={600} height={600} src={about} alt="about" />
      </div>

      <div className="section_list" data-aos="fade-left">
        <div className="section_items" data-aos="zoom-in">
          <img width={50} height={50} src={choose} alt="choose" />
          <h5>Why You Choose Us</h5>
        </div>
        <div className="section_text" data-aos="fade-up">
          <h2>
            BICYCLES ARE OUR WORKS, BUT <br /> ALSO OUR PASSION
          </h2>
          <p>
            Each of us has our own challenges, goals and reasons to ride. At
            Bicycle Shops, our purpose is to help you unleash your full
            potential no matter the chosen path. We do this with our products,
            our people and the stories we share. Come feel what it’s like to be
            limitless. Come ride with us. We will bring you the greatest
            feeling.
          </p>
          <p>
            Bicycle Shops is the world’s leading brand of high-quality bicycles
            and cycling gear. Part of the Bicycle Group, which was founded in
            1972, the brand combines craftsmanship, technology and innovative
            design.
          </p>
        </div>
        <button data-aos="fade-down">More About Us</button>
      </div>
    </div>
  );
};

export default ChooseUs;
