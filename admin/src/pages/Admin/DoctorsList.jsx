import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

function DoctorsList() {

  const {doctors, aToken, getAllDoctors,changeAvailability} = useContext(AdminContext)

  useEffect(()=>{
    if (aToken) {
      getAllDoctors()
    }
  },[aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-medium'> All Doctors </h1>
      <div className='wi-full flex flex-wrap gap-10 pt-5 gap-y-8'>
        {
          doctors.map((item,index)=>(
            <div className='border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group mx-10 px-5 py-5 bg-indigo-50 group-hover:bg-[#5F3FFF] transition-all-duration-500' key={index}>
              <div className='p-3 bg-indigo-50 group-hover:bg-[#5F3FFF] transition-all-duration-500'>
                <p className='text-neutral-1000 text-lg font-medium '>{item.name}</p>
                <p className='text-zinc-800 text-sm group-hover:text-white'>{item.speciality}</p>
                <div className='mt-2 flex items-center gap-1 text-sm'>
                  <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available}/>
                  <p>Available </p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default DoctorsList