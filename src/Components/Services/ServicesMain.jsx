import React from "react";
import service_img1 from "../../assets/servenorm.jpg";
import service_img2 from "../../assets/proofs.jpg";
import "./ServicesMain.css";

const ServicesMain = () => {
  return (
    <>
      <div className="servicemain">
        <div className="service-left">
          <img src={service_img1} alt="" className="service-img" />
          {/* <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} /> */}
        </div>
        <div className="service-right">
          {/* <h3>about us</h3> */}
          <h2>Lending</h2>
          <p>
            {" "}
            At Must Multiply we offeer premium lending and investment services to our clients, collateral based loans with options of jewelry, Automobiles and Gold.
          </p>
          <h3>Our Unique Offers</h3>
          <p>
            We offer both Individual loans & Corporate lending to companies, to fund their business operations. These loans are typically larger than retail loans and are offered to you in real-time, and can be used for various purposes such as working capital, capital expenditures, or acquisitions. {" "}
          </p>
          {/* <h3>Our Vision</h3>
          <p>
            To be a leading catalyst for financial growth and empowerment,
            providing innovative investment and lending solutions that help
            individuals and businesses multiply their wealth, create lasting
            impact, and achieve financial freedom.
          </p> */}
        </div>
      </div>
      <div className="servicesmain">
        <div className="service-rights">
          {/* <h3>about us</h3> */}
          <h2>Proof of Funds</h2>
          <p>
            {" "}
          We also offer Proof of Funds services tailored to meet the financial needs of our clients, both individuals and businesses.
          </p>
          {/* <h3>Our Mission</h3> */}
          <p>
            Leveraging on our extensive partnerships and reach, we provide premium access to liquidity required to achieve your financial goals. Let us assist you today!{" "}
          </p>
          {/* <h3>Our Vision</h3>
          <p>
            To be a leading catalyst for financial growth and empowerment,
            providing innovative investment and lending solutions that help
            individuals and businesses multiply their wealth, create lasting
            impact, and achieve financial freedom.
          </p> */}
        </div>
        <div className="service-lefts">
          <img src={service_img2} alt="" className="about-img" />
          {/* <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} /> */}
        </div>
      </div>
    </>
  );
};

export default ServicesMain;
