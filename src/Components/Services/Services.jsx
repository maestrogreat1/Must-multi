import React from "react";
import "./Services.css";
import service_1 from "../../assets/loan.jpg";
import service_2 from "../../assets/loan.jpg";
import service_3 from "../../assets/loan.jpg";
import service_icon_1 from "../../assets/loan_icon.png";
import service_icon_2 from "../../assets/business_icon.png";
import service_icon_3 from "../../assets/education_icon.png";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="service">
          <img src={service_1} alt="" />
          <div className="caption">
            <img src={service_icon_1} alt="" />
            <h1>Lending</h1>
            <p>
              At Must Multiply we offer premium lending services to our clients
              using collateral based loans with options of watches, automobiles
              & gold
            </p>
          </div>
        </div>
        {/* <div className="service">
        <img src={service_2} alt="" />
        <div className="caption">
          <img src={service_icon_2} alt="" />
          <p>Proof of Funds</p>
        </div>
      </div>
      <div className="service">
        <img src={service_3} alt="" />
        <div className="caption">
          <img src={service_icon_3} alt="" />
          <p>School Loans</p>
        </div>
      </div> */}
      </div>
      <div className="services">
        <div className="service">
          <img src={service_2} alt="" />
          <div className="caption">
            <img src={service_icon_2} alt="" />
            <h1>Proof of Funds</h1>
            <p>
              At Must Multiply we offer premium lending services to our clients
              using collateral based loans with options of watches, automobiles
              & gold
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
