import React from "react";
import about from "../../../public/images/about-us1.png";
import choose from "../../../public/images/choose.png";
import ChooseUs from "../home/ChooseUs";
import team from "../../../public/images/team.png";
import team1 from "../../../public/images/team1.png";
import team2 from "../../../public/images/team2.png";

const AboutUs = () => {
  return (
    <div className="about_us">
      <div className="about_us_header">
        <h1 className="title">About Us</h1>
        <p className="subtitle">
          Your one-stop destination for premium bikes, top-notch <br />
          services, and a passion for cycling.
        </p>
      </div>

      <ChooseUs />

      <div className="about_us_content">
        <div className="about_us_text" data-aos="fade-right">
          <img width={50} height={50} src={choose} alt="choose" />
          <h2>Who We Are</h2>
          <p>
            At <strong>BicycleShop</strong>, we believe in the joy of cycling.
            For over 10 years, we've been providing high-quality bicycles,
            expert repair services, and a welcoming environment for biking
            enthusiasts of all levels.
          </p>
          <p>
            Our mission is to empower every rider, from beginners to seasoned
            pros, to enjoy their journey on two wheels. Whether you’re exploring
            new trails, commuting to work, or looking for the perfect ride,
            we’re here to help.
          </p>
        </div>
        <div className="about_us_image" data-aos="fade-left">
          <img src={about} alt="About Bike Shop" />
        </div>
      </div>

      <div className="service_section_footer" data-aos="fade-up">
        <div className="footer_header">
          <h2>OUR TEAM MEMBER</h2>
          <p>
            We’ll be happy to share our repair recommendations, give you an
            estimate <br /> on the pricing, and share how long the repair may
            take.
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
      </div>
    </div>
  );
};

export default AboutUs;
