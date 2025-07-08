import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Header() {

    const navigate= useNavigate();

  return (
    <div className="header">
        {/*----- Left side ------ */}
        <div className="left-div">
            <p className="heading1"> 
                Book Appointment <br /> with Trusted Doctors
            </p>
            <div className="description-section">
                <img className="group-profiles" src={assets.group_profiles} alt="" />
                <p className="descriprion-text">Simply browse through our extensive list of<br/> trusted doctors,schedule your appointment<br/> hassle-free.</p>
            </div>
            <a href='#speciality' className="appointment-button">
                Book Appointment <img className="arrow-icon"src={assets.arrow_icon} alt="" />
            </a>
            
        </div>

         {/*----- Right side ------ */}
         <div className="right-div">
            <img className="img" src={assets.header_img} alt="" />
         </div>
    </div>
  )
}

export default Header