

import '../App.css';
import { useState } from "react";
import AddRoomDetails from './AddRoomDetails';
import Axios from "axios";
import Swal from "sweetalert2";
function Addrooms() {
    
    const [arr,setArr]=useState([]);
    const getState=(childData)=>{
        setArr(childData);
    }
    

    const handleSubmit = (e) => {
       
        e.preventDefault();
        const data={roomClass:arr[0],roomType:arr[1],NoOfRooms:arr[2],cost:arr[3],image:arr[4]};
        console.log(data);
        Axios.post("http://localhost:4000/addRoomRoute/add-room",data)
        .then((res)=>{
            if(res.status===200)
            //  alert("Record added successfully");
            Swal.fire({
                icon:"success",
                title:"Room Added",
                text:"Room Added successfully",
                customClass:{
                    container:"my-swal",
                    title:"my-title",
                    popup:"my-popup",
                },
            }).then(()=>{
                window.location.reload();
            });
            else
             Promise.reject();
        })
        // .catch((err)=>alert(err));
        .catch((err)=>{
            Swal.fire({
                icon:"success",
                title:"Record Added",
                text:"Room added successfully",
                customClass:{
                    container:"my-swal",
                    title:"my-title",
                    popup:"my-popup",
                },
            })
        })
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
                    <AddRoomDetails getState={getState}
                      roomClassValue=""
                      roomTypeValue=""
                      NoOfRoomsValue=""
                      costValue=""
                      imageValue=""
                    >
                        Create Room
                       
                    </AddRoomDetails>
                </form>
            </div>
       
    );
}

export default Addrooms;
