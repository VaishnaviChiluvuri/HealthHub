import React, { useContext, useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

function Doctors() {

    const navigate=useNavigate();
    const { speciality } = useParams();
    const [filterDoc,setFilterDoc] = useState([])
    
    const {doctors} = useContext(AppContext);

    const applyFilter = () =>{
        if(speciality){
            setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
        }
        else{
            setFilterDoc(doctors);
        }
    }

    useEffect(()=>{
        applyFilter();
    },[doctors,speciality])

  return (
    <div>
        <p className="browse-filter"> Browse through the doctors specialist</p>
        <div className="doctors-filter">
            <div className="filter-container">
                <p onClick={()=>speciality === 'General Physician' ? navigate('/doctors'): navigate('/doctors/General physician') }> General Physician</p>
                <p onClick={()=>speciality === 'Gynecologist' ? navigate('/doctors'): navigate('/doctors/Gynecologist') }> Gynecologist</p>
                <p onClick={()=>speciality === 'Dermatologist' ? navigate('/doctors'): navigate('/doctors/Dermatologist') }> Dermatologist</p>
                <p onClick={()=>speciality === 'Pediatricians' ? navigate('/doctors'): navigate('/doctors/Pediatricians') }> Pediatricians</p>
                <p onClick={()=>speciality === 'Neurologist' ? navigate('/doctors'): navigate('/doctors/Neurologist') }> Neurologist</p>
                <p onClick={()=>speciality === 'Gastroenterologist' ? navigate('/doctors'): navigate('/doctors/Gastroenterologist') }> Gastroenterologist</p>
            </div>
            <div className="doctors-details">
                {
                    filterDoc.map((item,index)=>(
                <div onClick={()=>navigate(`/appointment/${item._id}`)} className="doctors" key={index}>
                    <img src={item.image} alt="" />
                    <div className="doctor-data">
                        <div>
                            <p className="availabilty-status"></p><p className="availabilty">Available</p>
                        </div>
                        <p className="doctor-name">{item.name}</p>
                        <p className="doctor-speciality">{item.speciality}</p>
                    </div>
                </div>
               ))
                }
            </div>
        </div>
    </div>
  )
}

export default Doctors