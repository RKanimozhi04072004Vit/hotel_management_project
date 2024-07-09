


import {Link} from "react-router-dom";
import React, { useState } from "react";


function AvailableRooms(props){
    let {_id,roomClass,roomType,NoOfRooms,cost,image}=props.obj;
    console.log(image);
   
    const images=require(`../images/${image}`);
  
    return(
    
   
    <div>
        
         <div style={{flexDirection: "column",margin:"20px",width:"250px",height:"450px",borderRadius:"10px",backgroundColor:"#A4193D"}} >
        <div class="d-flex" style={{ flexDirection: "column" ,width:"150px",height:"400px",borderRadius:"10px"}}>
    <div class="m-5"  style={{ flexDirection: "column" ,width:"150px",height:"400px",borderRadius:"10px",backgroundColor:"#A4193D"}}>
        <p><img src={images} style={{ maxHeight: "150px", height: "auto", margin: "0px auto" }} width="150px" /></p>
        <p class="p-1" style={{color:"white"}}>{"roomClass: " + roomClass}</p>
        <p class="p-1" style={{color:"white"}}>{"roomType: " + roomType}</p>
        <p class="p-1" style={{color:"white"}}>{"No.Of.rooms:"+NoOfRooms}</p>
        <p class="p-1" style={{color:"white"}}>{"Cost:"+cost}</p>
        <Link to="/create-room">
        <button class="btn btn-success">book Now</button>
        </Link>
    </div>
</div>
</div> 
    </div> 
  
    )
}
export default AvailableRooms;


