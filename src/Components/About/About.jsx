import React from 'react'
import './About.css'
import about_img from '../../assets/abouter.jpg'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>about us</h3>
        <h2>Welcome To Must Multiply</h2>
        <p> We are a leading company in the fintech space with years of experience in lending and financing of individuals and companies, we have seasoned professionals on board who ensure our regularity in meeting the needs of our customers/ clients.</p>
        <h2>Our Mission</h2>
        <p>We bring value by bringing access to funds and providing opportunities to grow your investments and/or businesses. </p>
        <h2>Our Vision</h2>
        <p>To help families and businesses thrive by enabling them to access capital via creation of financial product.</p>
      </div>
    </div>
  )
}

export default About
