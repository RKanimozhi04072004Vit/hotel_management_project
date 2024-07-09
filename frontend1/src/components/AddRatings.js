

import '../App.css';
import { useState } from "react";
import RatingDetails from './RatingDetails';
import Axios from "axios";
function AddRatings() {
    
    const [arr,setArr]=useState([]);
    const getState=(childData)=>{
        setArr(childData);
    }
    

    const handleSubmit = (e) => {
       
        e.preventDefault();
        const data={roomClass:arr[0],roomType:arr[1],NoOfRooms:arr[2],cost:arr[3],ratings:arr[4],image:arr[5]};
        console.log(data);
        Axios.post("http://localhost:4000/addRoomRoute/add-room",data)
        .then((res)=>{
            if(res.status===200)
             alert("Record added successfully");
            else
             Promise.reject();
        })
        .catch((err)=>alert(err));
    };

    //https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtMjE4YmF0Y2g5LW15bnQtNjMuanBn.jpg
//https://wallpapercave.com/wp/wp2610908.jpg
    const backgroundImageUrl = "https://img.freepik.com/free-photo/japandi-living-room-interior-design_53876-145502.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702339200&semt=ais";
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height:"100vh"
      };
        
    return (
        <div style={containerStyle}>
        
                <form onSubmit={handleSubmit}>
                    <RatingDetails getState={getState}
                      roomClassValue=""
                      roomTypeValue=""
                      NoOfRoomsValue=""
                      costValue=""
                      ratingsValue=""
                      imageValue=""
                    >
                        Create Room
                       
                    </RatingDetails>
                </form>
            </div>
       
    );
}

export default AddRatings;