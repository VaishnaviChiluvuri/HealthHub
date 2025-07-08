import React from 'react';
import { specialityData } from '../assets/assets';
import { Link } from 'react-router-dom';

function SpecialityMenu() {
  return (
    <div id='speciality' className="speciality-finder">
        <h1 className="textSpeciality" >Find by Speciality</h1>
        <p>Simply browse through our extensive list of trusted doctors, <br/>schedule your appointment hassle-free.</p>
        <div className="speciality-list">
            {specialityData.map((item,index)=>(
                <Link onClick={()=>scrollTo(0,0)} className="speciality-link"key={index} to={`/doctors/${item.speciality}`}>
                    <img src={item.image} alt="" width="100px"/>
                    <p>{item.speciality}</p>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu