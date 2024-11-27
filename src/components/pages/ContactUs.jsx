import React from "react";
import contactanimation from "../../../public/contact-animation.json";
import Lottie from "lottie-react";

const ContactUs = () => {
  return (
    <div className="contact_page">
      <div className="contact_animation">
        <Lottie animationData={contactanimation} loop={true} />
      </div>
      <div className="contact_container">
        <h2 className="contact_header">Get in Touch</h2>
        <p className="contact-us__description">
          We'd love to hear from you! Whether you have a question about our
          products, services, pricing, or anything else, our team is ready to
          answer all your questions.
        </p>

        <form className="contact_form">
          <div className="contact_form-group">
            {/* <label htmlFor="name">Name</label> */}
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="contact_form-group">
            {/* <label htmlFor="email">Email</label> */}
            <input type="text" id="email" placeholder="Your Email" required />
          </div>
          <div className="contact_form-group">
            {/* <label htmlFor="massage">Message</label> */}
            <textarea id="message" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="contact_btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
