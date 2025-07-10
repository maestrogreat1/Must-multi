import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import dark_arrow from "../assets/dark-arrow.png";
import AboutMain from "../Components/About/AboutMain";

const AboutPage = () => {
  return (
    <div>
        <section className="abouts" id="abouts">
      <div className="abouts-text">
        <h1>Get to Know About Us and What We Have to Offer</h1>
        <p>
          Provding liquidity to individuals and businesses
        </p>
        {/* <button className="btn">
          <Link to="contact">
            Get Started <img src={dark_arrow} alt="" />
          </Link>
        </button> */}
      </div>
    </section>
    <AboutMain />
    </div>
  );
};

export default AboutPage;
