import {Link} from "react-router-dom";
import React, { useState } from "react";

function AvailableTravelList(props){
    let {_id,VehicleName,brand,charge,driverCharge,image}=props.obj;
    console.log(image);
    const images=require(`../images/car/${image}`);
    return(
        <div class="d-flex">
           <div class="d-flex  p-3 m-3" style={{width:"700px",borderRadius:"5px",boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)"}}>
          <div class="m-3">
          <p><img src={images} style={{ maxHeight: "80px", height: "auto", margin: "0px auto" }} width="100px" /></p>
            <Link to="/create-travelbooking" class="flex-wrap">
            <button class="btn" style={{backgroundColor:"#000435",color:"white"}}>Book Now</button>
            </Link>
          </div>
            <table class="p-2">
                <tr>
                    <td style={{color:"#000435",fontWeight:"bold",fontSize:"30px"}} class="p-1">{VehicleName}</td>
                </tr>
                <tr>
                <td style={{color:"black",fontWeight:"bold",fontSize:"15px"}} class="p-1">{brand}</td>
                </tr>
                <tr>
                <td style={{color:"black",fontFamily: "Roboto, Arial, sans-serif"}} class="p-1">{"Charge: " + charge}</td>
                </tr>
                <tr>
                <td style={{color:"green",fontWeight:"bold"}} class="p-1">{"Driver Betta Rs:"+driverCharge}</td>
                </tr>
                
               
            </table>
           
           </div>
        </div>

      
        )
}
export default AvailableTravelList;