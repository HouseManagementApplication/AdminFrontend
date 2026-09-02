import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Addhome.css"
import axios from "axios";
function Addhome(){
    const[houseownername,sethouseownername]=useState("")
    const[housename,sethousename]=useState("")
    const[ownernumber,setownernumber]=useState(null)
    const[floornumber,setfloornumber]=useState(null)
    const[housenumber,sethousenumber]=useState(null)
    const[meternumber,setmeternumber]=useState("")
    const[propertydetails,setpropertydetails]=useState("")
    const[propertydocument,setpropertydocument]=useState(null)
    const[propertiesphotos,setpropertiesphotos]=useState(null)
    const[address,setaddress]=useState("")
    
    let user_id =localStorage.getItem("user_id")
    console.log(user_id)
    const handleaddhome =async()=>{
        try{
            const response = await axios.post(`http://127.0.0.1:8000/house/house/`,
            {
                user_id :user_id,
                house_name:housename,
                house_number:housenumber,
                owner_number:ownernumber,
                floor_number:floornumber,
                meter_number:meternumber,
                property_details:propertydetails,
                property_photo:propertiesphotos,
                property_document:propertydocument,
                address:address,

                

            }

        );
        
            console.log(response.data)

            }catch(error){
                console.log(error)
            }
    }

    return(
        <div className="addhome-container">
            <Navbar/>
                <div className="addhome-main">
                    <div className="top-bar">
                        <p className="headline">Add Home</p>    
                    </div>
                    <div className="addhome-content">
                        <div className="form-row">
                            <div className="form-group">
                                <p className="heading">HouseOwnerName</p>
                                <input
                                    type="text"
                                    className="input-box"
                                    value={houseownername}
                                    onChange={(e)=>sethouseownername(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <p className="heading">HouseName</p>
                                <input
                                    type="text"
                                    className="input-box"
                                    value={housename}
                                    onChange={(e)=>sethousename(e.target.value)}
                                />
                        
                            </div>

                            <div className="form-group">
                                <p className="heading">Owner Number</p>
                                <input
                                    type="number"
                                    className="input-box"
                                    value={ownernumber}
                                    onChange={(e)=>setownernumber(e.target.value)}
                                />
                        
                            </div>
                            <div className="form-group">
                                <p className="heading">FloorNumber </p>
                                <input
                                    type="number"
                                    className="input-box"
                                    value={floornumber}
                                    onChange={(e)=>setfloornumber(e.target.value)}
                                />
                        
                            </div>
                            <div className="form-group">
                                <p className="heading">HouseNumber</p>
                                <input
                                    type="number"
                                    className="input-box"
                                    value={housenumber}
                                    onChange={(e)=>sethousenumber(e.target.value)}
                                />
                        
                            </div>
                            <div className="form-group">
                                <p className="heading">Meter Number </p>
                                <input
                                    type="text"
                                    className="input-box"
                                    value={meternumber}
                                    onChange={(e)=>setmeternumber(e.target.value)}
                                />
                        
                            </div>
                            <div className="form-group">
                                <p className="heading">Property Details </p>
                                <input
                                    type="text"
                                    className="input-box"
                                    value={propertydetails}
                                    onChange={(e)=>setpropertydetails(e.target.value)}
                                />
                        
                            </div>
                            <div className="form-group">
                                <p className="heading">Property Documents </p>
                                <input
                                    type="file"
                                    value={propertydocument}
                                    onChange={(e)=>setpropertydocument(e.target.value)}
                                   
                                />
                        
                            </div>
                            <div className="form-group">
                                <p className="heading">Properties Photos </p>
                                <input
                                    type="file"
                                    value={propertiesphotos}
                                    onChange={(e)=>setpropertiesphotos(e.target.value)}
                                   
                                />
                        
                            </div>

                            <div className="form-group">
                                <p className="heading">Address</p>
                                <textarea
                                value={address}
                                onChange={(e)=>setaddress(e.target.value)}
                                className="input-box"
                                />
                        
                            </div>
                            
                            <button className="Addhome-button" onClick={handleaddhome}>
                                Add Home
                        </button>
                            
                        </div>
                        
                         
                            
                        
                    </div>
                
                   
                </div>
        </div>
         
         
        
            
        
    );
}
export default Addhome;