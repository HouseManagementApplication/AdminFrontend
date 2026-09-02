import '../Navbar/Navbar.css';
import {Home,User,LogOut,SettingsIcon,HousePlus} from "lucide-react";
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../screens/Dashboard/Dashboard';


function Navbar(){
    const navigate=useNavigate();

    
return(
    
        <div className="navbar">
            <img src='/icon.webp' className='topicon'></img>
            <Home className='icon' onClick={()=>navigate("/Dashboard")}/>
            <User className='icon' onClick={()=>navigate("/Houses")}/>
            <HousePlus className='icon' onClick={()=>navigate("/Addhome")}/>
            <SettingsIcon className='icon'/>
            <LogOut className='icon'/>
        </div>
        
   
   
)
}
export default Navbar