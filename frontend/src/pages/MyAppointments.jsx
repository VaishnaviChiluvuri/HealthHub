import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

function MyAppointments() {

    const {doctors} = useContext(AppContext);
  return (
    <div>
        <p className='my-appointments-page'>My Appointments</p>
        <div>
            {
                doctors.slice(0,3).map((item,index)=> (
                    <div className='my-appointments-data' key={index}>
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        <div className="appointment-doc-details">
                            <p className="doc-name">{item.name}</p>
                            <p className="doc-speciality">{item.speciality}</p>
                            <p className="doc-address">Address :</p>
                            <p className="doc-add">{item.address.line1}</p>
                            <p className="doc-add">{item.address.line2}</p>
                            <p className="appointment-date"><span>Date & Time : </span>07, July, 2025 | 6:30 PM</p>
                        </div>
                        <div></div>
                        <div>
                            <button className='payment-button'> Pay Online</button><br />
                            <button className="cancel-button"> Cancel Appointment</button>
                        </div>
                    </div>

                ))
            }
        </div>
    </div>
  )
}

export default MyAppointments