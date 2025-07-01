import React from 'react'

import { useRef } from "react";

import "./Contact.css";


const Contact = () => {
  return (
    <>
      <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <br /> Our experts will be in touch
        </h3>
        {/* <p>Our experts will be in touch</p> */}
        <ul>
          
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <div className="input-name">
            <label>First Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your first name"
              required
              maxLength={40}
            />

            <label>Last Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your last name"
              required
              maxLength={40}
            />
          </div>

          <span>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email address"
              required
              maxLength={62}
            />
            {/* <label>Country</label>
            <input
              type="country"
              name="user_location"
              placeholder="Enter your Country"
              required
              maxLength={45}
            />
            <label>Your Interests</label>
            <textarea
              name="message"
              rows={6}
              placeholder="Enter your message"
              required
            ></textarea> */}

            <button type="submit"  className="btn dark-btn">
              {/* <input type="submit" value="Send"/> */}
              Submit
            </button>
          </span>
        </form>
        <span></span>
      </div>
    </div>
    </>
  )
}

export default Contact
