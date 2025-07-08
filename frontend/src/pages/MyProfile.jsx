import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import {assets} from '../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

function MyProfile() {

    const {userData,setUserData,token,backendUrl,loadUserProfileData} = useContext(AppContext)
    const [isEdit,setIsEdit] = useState(false)
    const [image,setImage] = useState(false)


    const updateUserProfileData = async () => {
        try {
            
            const formData = new FormData()
            formData.append('name',userData.name)
            formData.append('phone',userData.phone)
            formData.append('address',JSON.stringify(userData.address))
            formData.append('gender',userData.gender)
            formData.append('dob',userData.dob)

            image && formData.append('image',image)

            const {data} = await axios.post(backendUrl + '/api/user/update-profile',formData,{headers:{token}})
            if(data.success){
                toast.success(data.messsage)
                await loadUserProfileData()
                setIsEdit(false)
                setImage(false)
            }
            else{
                toast.error(data.messsage)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.messsage)
        }
    }


  return userData &&(
    <div className="profile-page">
        {
            isEdit 
            ? <label htmlFor="image">
                <div className='update-profile-pic'>
                    <img className='img1' src={image ? URL.createObjectURL(image) :userData.image } alt="" />
                    <img className='img2' src={image ? '' :  assets.upload_icon  } alt="" />
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden />
                </div>
            </label>
            : <img className="profile-pic" src={userData.image} alt="" height="230px" width="280px"/>
        }
        
        <br />
        {
            isEdit
            ? <input className="name-field" type="text" value={userData.name} onChange={e=>setUserData(prev => ({...prev,name:e.target.value}))}/>
            : <p className='name-text'>{userData.name}</p>
        }
        <hr />
        <div>
            <p className="contact-data"> CONTACT INFORMATION </p>
            <div className='contact-details'>
                <p> Email Id : </p>
                <p> {userData.email} </p>
                <p>  Phone :</p>
                 {
            isEdit
            ? <input className="phone-field" type="text" value={userData.phone} onChange={e=>setUserData(prev => ({...prev,phone:e.target.value}))}/>
            : <p>{userData.phone}</p>
        }
        <p>Address :</p>
        {
            isEdit 
            ? <p>
                <input className='add-field' onChange={(e) => setUserData(prev =>({...prev,address:{...prev.address,line1:e.target.value}}))} value={userData.address.line1} type="text" />
                <br />
                <input className="add-field" onChange={(e) => setUserData(prev =>({...prev,address:{...prev.address,line2:e.target.value}}))} value={userData.address.line2} type="text" />
            </p>
            : <p>
                {userData.address.line1}
                <br />
                {userData.address.line2}
            </p>
        }
            </div>
        </div>
        <div>
            <p className='basic-data'>BASIC INFORMATION</p>
            <div className='basic-details'>
                <p> Gender :</p>
                 {
            isEdit
            ? <select onChange={(e) => setUserData(prev => ({...prev, gender: e.target.value}))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            : <p>{userData.gender}</p>
            }
            <p>Birthday : </p>
            {
                isEdit 
                ? <input type='date' onChange={(e) => setUserData(prev => ({...prev, dob: e.target.value}))} value={userData.dob}/>
                : <p>{userData.dob}</p>
            }
            </div>
        </div>

        <div>
            {
                isEdit
                ? <button  onClick={()=> updateUserProfileData()}> Save information </button>
                : <button onClick={()=> setIsEdit(true)}> Edit</button>
            }
        </div>

    </div>
  )
}

export default MyProfile