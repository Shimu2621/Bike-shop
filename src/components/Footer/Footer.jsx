import { IoIosHome } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitter } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="footer">
      <div className="footer-wrapper container">
        <div className="footer-sec" data-aos="fade-up">
          <div className="basket-image">
            <img
              src="images/bike-logo.png"
              width={150}
              height={150}
              alt="bicycle-logo"
            />
          </div>
          <p className="tag">
            5617 Glassford Street
            <br />
            San Francisco, CA 94105, United States
          </p>
        </div>

        <div className="column-section" data-aos="fade-up">
          <div className="title">
            <h3>Information</h3>
            <ul>
              <li> New Products</li>
              <li>Top Seller</li>
              <li>Our Blog</li>
              <li>About Our Shop</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>

        <div className="column-section" data-aos="fade-up" data-aos-delay="200">
          <div className="title">
            <h3>Instagram</h3>
            <ul>
              <li> New Products</li>
              <li>Top Seller</li>
              <li>Our Blog</li>
              <li>About Our Shop</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>

        <div className="column-section" data-aos="fade-up" data-aos-delay="400">
          <div className="title">
            <h3>Quick Links</h3>
            <ul>
              <li>Bike for Sale</li>
              <li>Our Shop </li>
              <li>Top Dellars</li>
              <li>Dealer Register</li>
              <li>Our Services</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="600">
        <hr />
      </div>

      <div
        className="footer-icon container"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div className="footer-ico">
          <h4>Follow us</h4>
          <div className="first-icon">
            <span className="fb">
              <FaFacebookF />
            </span>
            <span className="twit">
              <BsTwitter />
            </span>
            <span className="insta">
              <IoLogoInstagram />
            </span>
            <span className="google">
              <IoLogoGoogleplus />
            </span>
            <span className="pin">
              <FaPinterest />
            </span>
          </div>
        </div>

        <div
          className="logo-section container"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <div className="all-image">
            <h4>Payment Method</h4>
            <img className="logo-image" src="/images/PayPal.png" alt=""></img>
            <img
              className="logo-image"
              src="/images/mastercard.png"
              alt=""
            ></img>
            <img className="logo-image" src="/images/Cirrus.png" alt=""></img>
            <img className="logo-image" src="/images/Maestro.png" alt=""></img>
          </div>
        </div>
      </div>

      {/* <footer className="end-sec" data-aos="fade-up" data-aos-delay="1200">
        <div className="footer-sec container">
          <p className="sec">
            <h4>Bicycle Shops 2024. Design by: </h4>
            <span className="theme">7uptheme.com</span>
          </p>
          <div className="policy-sec">
            <p className="condition">Privacy Policy</p>
            <p className="condition">Terms and Conditions</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default Footer;
