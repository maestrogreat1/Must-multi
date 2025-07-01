import React from 'react'
import './Hero.css'
import { Link } from "react-scroll";
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <section className='hero container' id='hero'>
      <div className="hero-text">
        <h1>We Provide Liquidity for Business and Individuals</h1>
        <p>Our cutting-edge services are designed to empower business and individuals with knowledge, liquidity and expert advise needed to excel in the ever dynamic business world</p>
        <button className='btn'><Link to="contact" smooth={true} offset={-260} duration={500}>Get Started <img src={dark_arrow} alt="" />
          </Link></button>
      </div>
      
    </section>
  )
}

export default Hero
