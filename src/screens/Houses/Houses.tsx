import Navbar from "../../components/Navbar/Navbar"
import "./Houses.css"
function Houses(){

    const handlenavigate={

    }
 return(
    <div className="houses-container">
        <Navbar/>
        <div className="houses-content">
            <div className="top-bar">
                <p className="welcome-greet">Welcome To Houses</p>
                <input
                    placeholder="Search"
                    className="Searchbox" 
                />
            </div>
            <div className="profile-container">
                <div className="house-profiles">
                    <img src="/profileicon.png" className="profile-photo" />
                    <h3>House number</h3>
                </div>
                <div className="house-profiles">
                    <img src="/profileicon.png" className="profile-photo" />
                    <h3>House number</h3>
                </div>
                <div className="house-profiles">
                    <img src="/profileicon.png" className="profile-photo" />
                    <h3>House number</h3>
                </div>
                <div className="house-profiles">
                    <img src="/profileicon.png" className="profile-photo" />
                    <h3>House number</h3>
                </div>
            </div>
        </div>
       
    </div>

  )

}
export default Houses