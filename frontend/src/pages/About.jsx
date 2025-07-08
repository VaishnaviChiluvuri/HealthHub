import React from 'react'
import { assets } from '../assets/assets'

function About() {
  return (
    <div className="about">
        <div className="about-section">
            <p> ABOUT <span className="us-word"> US</span></p>
        </div>

        <div className="about-container">
            <img src={assets.about_image} alt="" />
            <div className="about-text">
                <p>Welcome to HealthHub, your one-stop digital solution for smarter healthcare management. At HealthHub, we aim to simplify the connection between patients, doctors, and healthcare facilities through a seamless, user-friendly platform.</p><br />
                <p>Our goal is to make healthcare more efficient and accessible. Patients can manage their visits and prescriptions, while doctors and admins can handle schedules and patient info — all in one place.</p><br />
                <b> Our Vision</b><br /><br />
                <p>HealthHub is built for everyone in the healthcare system. With features like smart billing, real-time updates, and a responsive design, we make managing healthcare effortless and reliable.</p>
            </div>
        </div>

        <div className="whyChooseUs">
            <p>WHY<span>CHOOSE US?</span></p>
        </div>

        <div className="why-choose-text">
            <div className="box1">
                <b>Smart & Hassle-Free Appointments</b>
                <p>Book and manage doctor visits easily with real-time availability and instant confirmations.</p>
            </div>
            <div className="box2">
                <b>Secure Patient Data Management</b>
                <p>Your health information is encrypted and safely stored, ensuring privacy and confidentiality.</p>
            </div>
            <div className="box3">
                <b>All-in-One Healthcare Platform</b>
                <p>From finding doctors to tracking prescriptions and payments — everything you need is in one place.</p>
            </div>
        </div>
    </div>
  )
}

export default About