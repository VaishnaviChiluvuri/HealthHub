import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';
import { toast } from 'react-toastify';
import axios from 'axios';

function Appointments() {

    const {docId} = useParams();
    const {doctors,currencySymbol, backendUrl, token, getDoctorsData} = useContext(AppContext);
    const daysOfWeek = ["SUN","MON","TUE","WED","THU","FRI","SAT"]

    const navigate = useNavigate()

    const [docInfo,setDocInfo] = useState(null);
    const [docSlots,setDocSlots] = useState([]);
    const [slotIndex,setSlotIndex] = useState(0);
    const [slotTime,setSlotTime] =useState('')

    const fetchDocInfo = () =>{
        const docInfo = doctors.find(doc => doc._id === docId);
        setDocInfo(docInfo);
    }

    const getAvailableSlots = async() =>{
        setDocSlots([]);

        let today=new Date();

        for(let i=0;i<7;i++){
           //getting date with index
           let currentDate=new Date(today);
           currentDate.setDate(today.getDate()+i)

           //seting endtime of the date with index
           let endTime= new Date();
           endTime.setDate(today.getDate()+i)
           endTime.setHours(21,0,0,0)

           //Setting hours
           if(today.getDate() === currentDate.getDate()){
            currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours()+1 : 10);
            currentDate.setMinutes(currentDate.getMinutes()>30 ? 30 : 0)
           }
           else{
            currentDate.setHours(10);
            currentDate.setMinutes(0);
           }

           let timeSlots = [];
           while(currentDate < endTime){
            let formattedTime = currentDate.toLocaleTimeString([],{hour:'2-digit',minute: '2-digit'});



            //add slots to array
            timeSlots.push({
                datatime: new Date(currentDate),
                time:formattedTime,
            })

            //increment time by 30minutes
            currentDate.setMinutes(currentDate.getMinutes()+30)
           }

           setDocSlots(prev => [...prev,timeSlots]);
        }
    }


    const bookAppointment = async () =>{
        if (!token){
            toast.warn('Login to book appointment')
            return navigate('/login')
        }

        try {

            const date = docSlots[slotIndex][0].datatime

            let day = date.getDate()
            let month = date.getMonth()+1
            let year = date.getFullYear()
            
            const slotDate = day + "-" + month + "-" + year

            const {data} = await axios.post(backendUrl + '/api/user/book-appointment',{docId,slotDate,slotTime},{headers:{token}})

            if (data.success){
                toast.success(data.message)
                getDoctorsData()
                navigate('/my-appointments')
            } else {
                toast.error(data.message)
            }  
           

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        fetchDocInfo();
    },[doctors,docId]);

    useEffect(()=>{
        getAvailableSlots();
    },[docInfo])

    useEffect(()=>{
        console.log(docSlots);
    },[docSlots])


  return docInfo &&(
    <div>
        {/* -----Doctor Details---- */}
        <div className="doctors-image-div">
            <div>
                <img className="doctor-image" src={docInfo.image}alt="" />
            </div>

            <div className="doctor-details">
                {/* ------Doc Info (name,degree,experience)----- */}
                <p className="docName">
                    {docInfo.name} 
                    <img src={assets.verified_icon} alt="" />
                </p>
                <div className="doc-degree">
                    <p>{docInfo.degree} - {docInfo.speciality}</p>
                    <button>{docInfo.experience}</button>
                </div>

                {/* ------Doctor About------ */}
                <div>
                    <p className="doc-about"> 
                        About <img src={assets.info_icon} alt="" />
                    </p>
                    <p className="doc-about-info">{docInfo.about}</p>
                </div>
                <p className="doc-fee">
                    Appointment fee :<span>{currencySymbol}{docInfo.fees}</span>
                </p>
            </div>
        </div>

        {/* -----Booking slots------ */}
        <div className="doc-time-slots">
            <p> Booking Slots</p>
            <div className="available-dates">
                {
                    docSlots.length && docSlots.map((item,index)=>(
                        <div onClick={()=>setSlotIndex(index)}className={`slot-box ${slotIndex ===index ? "active-slot" : ""}`} key={index}>
                            <p>{item[0] && daysOfWeek[item[0].datatime.getDay()]}</p>
                            <p>{item[0] && item[0].datatime.getDate()}</p>
                        </div> 
                    ))
                }
            </div>

                <div className="available-timings">
                    {docSlots.length && docSlots[slotIndex].map((item,index)=>(
                        <p onClick={()=>setSlotTime(item.time)}className={`slot-box ${item.time===slotTime ? 'active' : 'inactive'}`} key={index}>
                            {item.time.toLowerCase()}
                        </p>

                    ))}
                </div>
                <button onClick={bookAppointment} className="book-appointment"> Book an Appointment</button>
        </div>
        {/* -----listing related doctors---- */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
    </div>
  )
}

export default Appointments