import React from 'react'
import "./AboutMain.css"
import about_img1 from "../../assets/abouter.jpg"
import director_img from "../../assets/aboutImage.jpg"


const AboutMain = () => {
  return (
    <>
      <div className="servicemain">
              <div className="service-left">
                <img src={about_img1} alt="" className="service-img" />
                {/* <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} /> */}
              </div>
              <div className="service-right">
                <h3>about us</h3>
                <h2>Welcome To Must Multiply</h2>
                <p>
                  {" "}
                  We are a leading company in the fintech space with years of
                  experience in lending and financing of individuals and companies, we
                  have seasoned professionals on board who ensure our regularity in
                  meeting the needs of our customers/ clients.
                </p>
                <h2>Our Mission</h2>
                <p>
                  Empowering individuals and businesses with the financial tools they
                  need to grow, thrive, and multiply their potential.{" "}
                </p>
                <h2>Our Vision</h2>
                <p>
                  To be a leading catalyst for financial growth and empowerment,
                  providing innovative investment and lending solutions that help
                  individuals and businesses multiply their wealth, create lasting
                  impact, and achieve financial freedom.
                </p>
              </div>
            </div>
            <div className="servicesmain">
              <div className="service-rights">
                <h3>Meet the Team</h3>
                <h2>Director's Message</h2>
                <p>
                  {" "}
                 At Must Multiply, our mission is rooted in the belief that access to smart capital can unlock extraordinary opportunities. As Director, I am proud to lead a team committed to empowering individuals and businesses with the financial tools they need to grow, thrive, and multiply their potential.
                </p>
                {/* <h2>Our Mission</h2> */}
                <p>
                    {" "}
                  In a fast-evolving economic landscape, we understand the importance of innovation, integrity, and responsiveness. That's why our lending and investment solutions are tailored to meet real-world needs with a focus on transparency, flexibility, and sustainable value creation.
                </p>
                {/* <h2>Our Vision</h2> */}
                <p>
                 Whether you are seeking to scale a business, invest with confidence, or secure support for your personal goals, Must Multiply is here as a reliable financial partner, We measure our success not just by numbers, but by the lasting impact we help our clients achieve. <br />Thank you for considering us. Together, we will multiply what matters most. 
                </p>
              </div>
              <div className="service-lefts">
                <img src={director_img} alt="" className="about-img" />
                {/* <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} /> */}
              </div>
            </div>
    </>
  )
}

export default AboutMain
