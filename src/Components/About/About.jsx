import React from 'react'
import './About.css'
import about_img from '../../assets/abouter.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>about us</h3>
        <h2>Welcome To Must Multiply</h2>
        <p> We are a leading company in the fintech space with years of experience in lending and financing of individuals and companies, we have seasoned professionals on board who ensure our regularity in meeting the needs of our customers/ clients.</p>
        <h2>Our Mission</h2>
        <p>Empowering individuals and businesses with the financial tools they need to grow, thrive, and multiply their potential. </p>
        <h2>Our Vision</h2>
        <p>To be a leading catalyst for financial growth and empowerment, providing innovative investment and lending solutions that help individuals and businesses multiply their wealth, create lasting impact, and achieve financial freedom.</p>
      </div>
    </div>
  )
}

export default About
