import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [state,setState] = useState('Sign Up');

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')

    const {backendUrl,token,setToken} = useContext(AppContext)
    const navigate = useNavigate()

    const onSubmitHandler =async(event) =>{
        event.preventDefault();

        try {

            if (state === 'Sign Up') {
                const {data} = await axios.post(backendUrl + '/api/user/register' , {name,password,email})
                if (data.success){
                    localStorage.setItem('token',data.token)
                    setToken(data.token)
                }
                else{
                    toast.error(data.message)
                }
            }
            else{
                const {data} = await axios.post(backendUrl + '/api/user/login' , {password,email})
                if (data.success){
                    localStorage.setItem('token',data.token)
                    setToken(data.token)
                }
                else{
                    toast.error(data.message)
                }

            }
            
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(()=>{
        if (token){
            navigate('/home')
        }
    },[token])

  return (
    <form onSubmit={onSubmitHandler} className="login-form">
        <div className="login-container">
        <p className="createAccount">{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p> Please {state === "Sign Up" ? "sign up" : "login"} to book appointments.</p>
        {
            state==="Sign Up" &&
            <div>
            <p className='name-container'>Full Name </p>
            <input className="name-input" type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
        </div>
        }
        <div className="input-div">
        <div>
            <p>Email</p>
            <input className="input" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}/>
        </div>

        <div>
            <p>Password </p>
            <input className="input" type="password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </div>
        <button type='submit'>{state === "Sign Up" ? "Create Account" : "Login"}</button>
        {
            state ==="Sign Up" 
            ? <p className="login-check"> Already have an Account? <span onClick={()=>setState('Login')} className='span'>Login here</span></p>
            : <p className="login-check"> Create a new account? <span onClick={()=>setState('Sign Up')} className='span'>click here</span></p>
        }
        </div>
        </div>
    </form>
  )
}

export default Login