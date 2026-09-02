
import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import Signup from './signup';
import Dashboard from '../screens/Dashboard/Dashboard';
import { data, useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[user_id,setuser_id]=useState("")
    
    
    const handlelogin=async()=>{
        try{
            const response = await axios.post("http://127.0.0.1:8000/api/Login/",
                {
                    email:email,
                    password:password,
                }
            );
            alert("Login Succesfull")
            console.log(response.data)
            // (response.)
            localStorage.setItem("user_id",response.data.user_id)
            navigate("/Dashboard")
        }catch(error){
            console.log(error.response.data) ; 

        }
    };
    

    return(
        <div className="login">
            <div className='left-box'>
                <img src={'/icon.webp'} className='Icon-image'></img>
                <h4>House management</h4>
                <p className='discription'>
                    Property Management

                   <p className='discription-ponts'> ✔ Manage Property Details</p>
                    <p className='discription-ponts'>✔ Track Maintenance Requests</p>
                    <p className='discription-ponts'>✔ Secure Resident Records</p>
                    <p className='discription-ponts'>✔ Easy & Fast Access</p>
                </p>

            </div>
            <div className='login-container'>
                <p className='subtitle'>Welcome back</p>
                <p className='subtitle'>Sign in to continue </p>

                <p className='title'>Email</p>
                <input 
                    type="text"
                    value={email}
                    placeholder='Email'
                    onChange={(e)=> setemail(e.target.value)} 
                    className='Inputbox'               
                    />  
                <p className='title'>Password</p>
                <input
                    type='password'
                    value={password}
                    placeholder='Password'
                    onChange={(e)=> setpassword(e.target.value)}
                    className='Inputbox'
                />
                <button className='button' onClick={handlelogin}>Login</button>
                <button className='fbutton'>Forgot password?<button onClick={()=> navigate("/Signup")} className='sbutton'>SignUp</button></button>
            </div>
            
        </div>
    )

}
export default Login;