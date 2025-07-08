import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

function TopDoctors() {

    const navigate = useNavigate();
    const {doctors} = useContext(AppContext)
  return (
    <div className="topDoctors">
        <h1> Top Doctors to Book </h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
        <div className="doctors-list">
            {doctors.slice(0,10).map((item,index)=>(
                <div onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}} className="doctors" key={index}>
                    <img src={item.image} alt="" />
                    <div className="doctor-data">
                        <div>
                            <p className="availabilty-status"></p><p className="availabilty">Available</p>
                        </div>
                        <p className="doctor-name">{item.name}</p>
                        <p className="doctor-speciality">{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}}>more</button>
    </div>
  )
}

export default TopDoctors