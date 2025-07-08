import React from 'react'
import { assets } from '../assets/assets'

function Contact() {

  return (
    <div>
        <div className="contact-section">
            <p>CONTACT<span>US</span></p>
        </div>

        <div className="contact-container">
            <img src={assets.contact_image} alt="" />
            <div className="contact-info">
                <p className="our-office">Our OFFICE</p>
                <p>A-791, Bandra Reclamation, Bandra West,<br />Mumbai, Maharashtra, India</p>
                <p> Tel:  +91 98673 328933 <br /> Email: healthhub25@gmail.com</p>
                <p className="careers">CAREERS AT HealthHub</p>
                <p>Learn more about our teams and job openings.</p>
                <button> Explore Jobs </button>
            </div>
        </div>
    </div>
  )
}

export default Contact