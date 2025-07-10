import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/mustlog.png'
// import { Link } from "react-scroll";
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
      window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
      })
    },[]);

      const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  let menuRef = useRef(false);

  useEffect(()=>{
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setMobileMenu(false);
      }
      
    };

    document.addEventListener("mousedown", handler);

    return() =>{
      document.removeEventListener("mousedown", handler)
    }
  })

  return (
    <nav className={` ${sticky? 'dark-nav' : ''}`} ref={menuRef}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <li><Link to="" smooth={true} offset={-310} duration={500} onClick={toggleMenu}>
            Home
          </Link></li>
        <li><Link to="about" smooth={true} offset={-310} duration={500} onClick={toggleMenu}>
            About Us
          </Link></li>
        <li><Link to="services" smooth={true} offset={-310} duration={500} onClick={toggleMenu}>
            Services
          </Link></li>
        {/* <li>Office</li>
        <li>Testimonials</li> */}
        <li><button className='btn'><Link to="contact" smooth={true} offset={-310} duration={500} onClick={toggleMenu}>
            Contact
          </Link></button></li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />

    </nav>
  )
}

export default Navbar
