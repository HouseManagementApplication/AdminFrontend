import { Icon,Banknote,File,ScrollText } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import './Dashboard.css'
import { useState } from "react";
import axios from "axios";

function Dashboard(){
    
    const[userdata,setuserdata]=useState(null)
    // setusername(userdata.name)

    const user_id=localStorage.getItem("user_id")
    console.log(user_id)
   

    const featchdetails = async()=>{
        try{
            const response= await axios.get(
                `http://127.0.0.1:8000/api/users/${user_id}`
            )
            console.log(response.data)
            setuserdata(response.data.details);
            
        }catch(error){
            console.log(error)

        }
    }
    featchdetails()

return(
    <div className="dashboard-container">
     <Navbar/>
     <div className="dashboard-content">
            <div className="top-bar">
                <p>{userdata?.name}</p>
                <p className="welcome-greet">Welcome Home {userdata?.name}!</p>
                <input
                    placeholder="Search"
                    className="Searchbox"                        
                />
            </div>
            <div className="card">
                <div className="card-box">
                    <Banknote className="box-icon"/>
                    <p className="card-text">Payments</p>
                </div>
                <div className="card-box">
                    <File className="box-icon"/>
                    <p className="card-text">Document</p>
                </div>
                <div className="card-box">
                    <ScrollText className="box-icon"/>
                    <p className="card-text">Tenants</p>
                </div>

            </div>
        
        </div>
     
    </div>

)
}
export default Dashboard