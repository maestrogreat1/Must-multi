import React from "react";
import dark_arrow from "../assets/dark-arrow.png";
import "./Contact.css";
import { Link } from "react-scroll";
import Contact from "../Components/Contact/Contact";

const ContactPage = () => {
  return (
    <div>
      <section className="contacts" id="contacts">
        <div className="contacts-text">
          <h1>Contact Us</h1>
          <p>
            We re not just here to provide funds, we are here to understand your vision, support your goals and grow with you. Let's build something impactful together.
          </p>
          <button className="btn">
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              Get Started <img src={dark_arrow} alt="" />
            </Link>
          </button>
        </div>
      </section>
        <Contact />
    </div>
  );
};

export default ContactPage;
