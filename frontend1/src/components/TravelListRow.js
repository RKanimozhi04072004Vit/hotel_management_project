import Axios from "axios";
import {Link} from "react-router-dom";
import React,{useState} from "react";
import Swal from "sweetalert2";
function TravelListRow(props){
    let {_id,VehicleName,brand,charge,driverCharge,image}=props.obj;
    console.log(image);
    const images=require(`../images/car/${image}`);
  const handleDelete=()=>{
    Axios.delete("http://localhost:4000/TravelRoute/delete-travel/"+_id)
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
     <td style={{backgroundColor: "#ACC7B4",color: "#331B3F"}}><img  src={images} style={{ maxHeight: "150px",height:"auto" ,margin: "0px auto" }} width="150px"/></td>
    <td style={{backgroundColor: "#ACC7B4",color: "#331B3F"}}>{VehicleName}</td>
   <td style={{backgroundColor: "#ACC7B4",color: "#331B3F"}}>{brand}</td>
   <td style={{backgroundColor: "#ACC7B4",color: "#331B3F"}}>{charge}</td>
   <td style={{backgroundColor: "#ACC7B4",color: "#331B3F"}}>{driverCharge}</td>
  
  
   
   <td style={{backgroundColor: "#ACC7B4",color: "#331B3F"}}>
       <button onClick={handleDelete} class="btn btn-danger m-2">Delete</button>
       <button class="btn btn-success">
<Link class="text-decoration-none text-light"
to={"/update-travel/" + _id}>Edit</Link>
</button>
   </td>
   
</tr>
  )

}
export default TravelListRow;