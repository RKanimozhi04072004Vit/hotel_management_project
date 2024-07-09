

import Axios from "axios";
import {Link} from "react-router-dom";
import React,{useState} from "react";
import Swal from "sweetalert2";
function TravelBookingListRow(props){
    let {_id,name,email,phoneno,Time,VehicleName,PickupPlace,DropPlace,time,date}=props.obj;
   
  const handleDelete=()=>{
    Axios.delete("http://localhost:4000/TravelBookingRoute/delete-travelbooking/"+_id)
    .then((res)=>{
        if(res.status===200){
            // alert("Record deleted Successfully");
            Swal.fire({
              icon:"success",
              title:"Record Deleted",
              text:"The record has been deleted successfully",
              customClass:{
                  container:"my-swal",
                  title:"my-title",
                  popup:"my-popup",
              },
          }).then(()=>{
              window.location.reload();
          });
            // window.location.reload();
        }
        else
        Promise.reject();
    })
    // .catch((err)=>alert(err));
    
.catch((err)=>{
  Swal.fire({
      icon:"success",
      title:"Record Deleted",
      text:"The record has been deleted successfully",
      customClass:{
          container:"my-swal",
          title:"my-title",
          popup:"my-popup",
      },
  })
})
  }
  return(
    <tr>
    <td style={{backgroundColor: "#F5D042",color: "#0A174E"}}>{name}</td>
   <td style={{backgroundColor: "#F5D042",color: "#0A174E"}}>{email}</td>
   <td style={{backgroundColor: "#F5D042",color: "#0A174E"}}>{phoneno}</td>
   <td style={{backgroundColor: "#F5D042",color: "#0A174E"}}>{Time}</td>
   <td style={{backgroundColor: "#F5D042",color: "#0A174E"}}>{VehicleName}</td>
   <td style={{backgroundColor: "#F5D042",color: "#0A174E"}}>{PickupPlace}</td>
   <td style={{backgroundColor: "#F5D042",color: "#0A174E"}}>{DropPlace}</td>
   <td style={{backgroundColor:"#F5D042",color:"#0A174E"}}>{time}</td>
  <td style={{backgroundColor:"#F5D042",color:"#0A174E"}}>{date}</td>
   
   <td style={{backgroundColor: "#F5D042",color: "#0A174E"}}>
       <button onClick={handleDelete} class="btn btn-danger m-2">Delete</button>
       {/* <button class="btn btn-success">
<Link class="text-decoration-none text-light"
to={"/update-travel/" + _id}>Edit</Link>
</button> */}
   </td>
   
</tr>
  )

}
export default TravelBookingListRow;




