import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Banner() {
    const navigate=useNavigate();
  return (
    <div className="banner">
        {/* ----left side---- */}

        <div className="left-side">
            <div className="left-container">
                <p> Book Appointment </p>
                <p> With 100+ Trusted Doctors</p>
            </div>
            <button onClick={()=>navigate('/login')}> Create Account</button>
        </div>
        {/* ------right-side------ */}
        <div className="right-side">
            <img src={assets.appointment_img} alt="" />
        </div>
    </div>
  )
}

export default Banner