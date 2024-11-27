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

      <div className="choose_section main_container">
        <div className="section_list" data-aos="fade-left">
          <div className="section_items" data-aos="zoom-in">
            <img width={50} height={50} src={choose} alt="choose" />
            <h5>Who We Are</h5>
          </div>
          <div className="section_text" data-aos="fade-up">
            <h2>
              WE ARE PASSIONATE AND DEDICATED <br />
              TO ALL CYCLING ENTHUSIASTS
            </h2>
            <p>
              At <strong>BicycleShop</strong>, we believe in the joy of cycling.
              For over 10 years, we've been <br /> providing high-quality
              bicycles, expert repair services, and a welcoming <br />{" "}
              environment for biking enthusiasts of all levels.
            </p>
            <p>
              Our mission is to empower every rider, from beginners to seasoned
              pros, to <br /> enjoy their journey on two wheels. Whether you’re
              exploring new trails, <br /> commuting to work, or looking for the
              perfect ride, we’re here to help.
            </p>
          </div>
        </div>
        <div className="choose_image" data-aos="fade-left">
          <img width={700} height={550} src={about} alt="About Bike Shop" />
        </div>
      </div>

      <div className="about_us_footer" data-aos="fade-up">
        <div className="footer_title">
          <h1>OUR TEAM MEMBER</h1>
          <p>
            We’ll be happy to share our repair recommendations, give you an
            estimate <br /> on the pricing, and share how long the repair may
            take.
          </p>
        </div>

        <div className="footer_wrapper">
          <div className="team_list" data-aos="fade-right">
            <img src={team} alt="team" />
            <h4>Co-Founder</h4>
            <h3>Biance Wood</h3>
          </div>
          <div className="team_list" data-aos="fade-up">
            <img src={team2} alt="team" />
            <h4>Assistant-Manager</h4>
            <h3>Steven Victoria</h3>
          </div>
          <div className="team_list" data-aos="fade-left">
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
