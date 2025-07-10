import React from "react";
import { Link } from "react-router-dom";
// import dark_arrow from "../assets/dark-arrow.png";
import "./Services.css";
import ServicesMain from "../Components/Services/ServicesMain";

const ServicesPage = () => {
  return (
    <div>
      <section className="mops" id="mops">
        <div className="mops-text">
          <h1>Our Premium Services</h1>
          <p>
            Our cutting-edge services are designed to empower business and
            individuals with knowledge, liquidity and expert advise needed to
            excel in the ever dynamic business world
          </p>
          {/* <button className="btn">
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              Get Started <img src={dark_arrow} alt="" />
            </Link>
          </button> */}
        </div>
      </section>
      <ServicesMain />
    </div>
  );
};

export default ServicesPage;
