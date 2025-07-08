import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Footer() {

    const navigate = useNavigate()
  return (
    <div className="footer">
        <div className="footer-components">
             {/* --------left-section----- */}
             <div className="compo1">
                <img src={assets.logo} alt="" />
                <p>Strength, resilience, and healing in every step.</p>
             </div>

             {/* --------middle-section----- */}
             <div className="compo2">
                <p> Quick Links </p>
                <ul className="navigateTo">
                    <li onClick={()=>{navigate('/home'),scrollTo(0,0)}}> Home </li>
                    <li onClick={()=>{navigate('/about'),scrollTo(0,0)}}>About us</li>
                    <li onClick={()=>{navigate('/contact'),scrollTo(0,0)}}>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
             </div>

             {/* --------right-section----- */}
             <div className="compo3">
                <p>Contact Us</p>
                <ul> 
                    <li> +91 98673 328933</li>
                    <li> healthhub25@gmail.com</li>
                </ul>
             </div>
        </div>
        <div>
            {/* ------copywright text------ */}
            <hr />
            <p className="copyright"> CopyRight 2025@ HealthHub - All Rights Reserved.</p>

        </div>
    </div>
  )
}

export default Footer