import { useEffect, useState } from "react";
import "./Signup.css"
import axios from "axios";
// import icon from "../assets/icon.webp";
import Login from "./login"
function Signup(){
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[address,setaddress]=useState("")
    const[phonenumber,setphonenumber]=useState("")
    const[password,setpassword]=useState("")
    const[confirmpassword,setconfirmpassword]=useState("")
    const[loginscreen,setloginscreen]=useState(false)
    
    const handlesignup = async () =>{
        
            try{
                const response = await axios.post("http://127.0.0.1:8000/api/Signup/",
                    {
                        name:name,
                        email:email,
                        address:address,
                        phonenumber:phonenumber,
                        password:password
                        
                    }
                    
                );
                console.log(response.data)
                alert("user created succesfully")
                setloginscreen(true);

                }catch(error){
                    console.log(error.response.data)
            }

    };
    if(loginscreen){
       return <Login/>
    }
    
return(
    <div className="Signup">

        <div className="signup-container">
            <img src={'/icon.webp'} className='Icon-image'></img>
            <h2>Signup</h2>
            
            <p className="textinput">Name</p>
            <input 
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e)=> setname(e.target.value)}
                className="inputbox"
                
                />
            <p className="textinput">Email</p>
            <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e)=> setemail(e.target.value)}
                className="inputbox"
            
            />
            <p className="textinput">address</p>
            <input
                type="text"
                placeholder="Enter Address"
                value={address}
                onChange={(e)=> setaddress(e.target.value)}
                className="inputbox"
            />
            <p className="textinput">Phonenumber</p>
            <input
                type="number"
                placeholder="Enter number"
                value={phonenumber}
                onChange={(e)=> setphonenumber(e.target.value)}
                className="inputbox"
            
            />
            <p className="textinput">Password</p>
            <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e)=> setpassword(e.target.value)}
                className="inputbox"            
            
            />
            <p className="textinput">Confirmpassword</p>
            <input 
                type="password"
                placeholder="Re-enter password"
                value={confirmpassword}
                onChange={(e)=> setconfirmpassword(e.target.value)}
                className="inputbox"
                
                />

            <button className='button' onClick={handlesignup}>SignUp</button>

        </div>


    </div>
)
}
export default Signup;