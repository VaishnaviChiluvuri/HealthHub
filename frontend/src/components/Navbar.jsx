import React, { useContext, useState } from 'react';
import {assets} from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Navbar() {

    const navigate = useNavigate();

    const {token,setToken} = useContext(AppContext)

    const [showMenu,setShowMenu] = useState(false);

    const logout = () =>{
        setToken(false)
        localStorage.removeItem('token')
        
    }
    
  return (
    <div>
    <div className="navbar">
        <img onClick={()=>navigate('/home')} className="logo" src={assets.logo} alt="Logo" height="50px" width="200px"/>
        <ul className="links">
            <NavLink to="/home" className="nav-link">
                <li> HOME </li>
                
            </NavLink>
            <NavLink to="/doctors" className="nav-link">
                <li> DOCTORS </li>
                
            </NavLink>
            <NavLink to="/about" className="nav-link">
                <li> ABOUT </li>
                
            </NavLink>
            <NavLink to="/contact" className="nav-link">
                <li> CONTACT </li>
               
            </NavLink>
        </ul>
        <div>
            {
                token ? 
                <div className="profile"> 
                    <img src={assets.profile_pic} alt="profile pic" className="pic"/>
                    <img src={assets.dropdown_icon} alt="drop-down-icon" className="drop-icon" />
                    <div className="dropdown">
                        <div className="dropdown-menu">
                            <p onClick={()=>navigate('profile')}>My Profile</p>
                            <p onClick={()=> navigate('my-appointments')}>My Appointments</p>
                            <p onClick={()=>logout()}>Logout</p>
                        </div>
                    </div>
                </div> 
                : <button onClick={()=>navigate('/login')}> Create account</button>
            }
            
        </div>
     </div>  
     <hr/> 
    </div>
  )
}

export default Navbar