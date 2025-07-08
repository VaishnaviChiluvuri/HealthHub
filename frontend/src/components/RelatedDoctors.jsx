import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedDoctors=({speciality,docId}) => {

    const {doctors} = useContext(AppContext);
    const navigate=useNavigate();

    const [relDoc,setRelDocs] = useState([]);

    useEffect(()=>{
        if(doctors.length > 0 && speciality ){
            const doctorsData = doctors.filter((doc)=> doc.speciality === speciality && doc._id!==docId);
            setRelDocs(doctorsData)
        }
    },[doctors,speciality,docId])
  return (
    <div className="topDoctors">
        <h1> Top Doctors to Book </h1>
        <p>Simply browse through our extensive list of trusted doctors.</p>
        <div className="doctors-list">
            {relDoc.slice(0,5).map((item,index)=>(
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

export default RelatedDoctors