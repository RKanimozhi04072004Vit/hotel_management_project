import React from 'react';
import '../App.css';
import {useState} from "react";
import {Link} from "react-router-dom";
import { useEffect} from "react";

function AddRoomDetails(props){
   const [roomClass,setroomClass]=useState("props.roomClassValue");
   const [roomType,setroomType]=useState("props.roomTypeValue");
   const [NoOfRooms,setNoOfRooms]=useState("props.NoOfRoomsValue");
   const [cost,setcost]=useState("props.costValue");
   const [image,setImage]=useState("props.imageValue");
  //  const [img, setImg] = useState("");
  //  const [allImage, setAllImage] = useState([]);
  
  useEffect(()=>{
    setroomClass(props.roomClassValue);
    setroomType(props.roomTypeValue);
    setNoOfRooms(props.NoOfRoomsValue);
    setcost(props.costValue);
    setImage(props.imageValue);
 
},[props.roomClassValue,props.roomTypeValue,props.NoOfRoomsValue,props.costValue,props.imageValue]);
   const arr=[roomClass,roomType,NoOfRooms,cost,image];
  
   const handleClick=()=>{
        props.getState(arr);
        console.log(image);
    }

    return(
        <div>
          <nav class="navbar bg-dark">
            <Link  to="/" class="navbar-brand mx-3" style={{color:"white"}}>Online hotel management System</Link>
             <div class="nav">
            <Link to="/admin-page" class="nav-link" style={{color:"white"}}>back</Link>
        </div>
     </nav> 
     
         <div style={{ maxWidth: "40%", margin: "0px auto" }}>
          <label htmlFor="roomClass" style={{color:"black"}}>Room Class</label>
          <input id="roomClass" type="text" defaultValue={props.roomClassValue} onChange={(event)=>setroomClass(event.target.value)} class="form-control my-3" placeholder="Enter your RoomClass"></input>
          <label htmlFor="roomType" style={{color:"black"}}>Room Type:</label>
         <input id="roomType" type="text" defaultValue={props.roomTypeValue} onChange={(event) => setroomType(event.target.value)} class="form-control my-3" placeholder="Enter your RoomType" />
         <label htmlFor="NoOfRooms" style={{color:"black"}}>No.Of.Rooms:</label>
         <input id="NoOfRooms" type="text" defaultValue={props.NoOfRoomsValue} onChange={(event) => setNoOfRooms(event.target.value)} class="form-control my-3" placeholder="No of Rooms" />
         <label htmlFor="cost" style={{color:"black"}}>Cost:</label>
          <input id="cost" type="text"  defaultValue={props.costValue} onChange={(event) => setcost(event.target.value)}class="form-control my-3" placeholder="Cost" />
       
         <label htmlFor="image" style={{color:"black"}}>image:</label>
         <input id="image" type="file" size="10" defaultValue={props.imageValue} onChange={(event) => setImage(event.target.files[0].name)}  class="form-control my-3" placeholder="image upload" />
      
        
         <button  onClick={handleClick} class="btn btn-primary my-3 d-block mx-auto" type="submit">{props.children}</button>
      </div>
      
           </div>
         
        ) 

    }
export default AddRoomDetails;