import Axios from "axios";
import {Link} from "react-router-dom";
import React, { useState } from "react";


function RatingListRow(props){
    let {_id,roomClass,roomType,NoOfRooms,cost,image}=props.obj;
    console.log(image);
    // let imagePath="../images/"+image;
    // const images=require(imagePath);
    const images=require(`../images/${image}`);
   
   
    return(
        <tr>
             <td style={{backgroundColor: "#00203F",color: "#ADEFD1"}}><img  src={images} style={{ maxHeight: "150px",height:"auto" ,margin: "0px auto" }} width="150px"/></td>
             <td style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>{roomClass}</td>
            <td style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>{roomType}</td>
            <td style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>{NoOfRooms}</td>
            <td style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>{cost}</td>
            

            {/* <td><img  src={images} style={{ maxHeight: "150px",height:"auto" ,margin: "0px auto" }} width="150"/></td> */}
            <td style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>
               
                <button class="btn btn-success">
<Link class="text-decoration-none text-light"
to={"/update-addroomrating/" + _id}>Rating</Link>
</button>
            </td>
            
        </tr>
    )
}
export default RatingListRow;