
import {Link} from "react-router-dom";
import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
function FoodOrderListRow(props) {
  let {
    _id,
    name,
    email,
    phoneno,
    food,
    members
  } = props.obj;



  
  const handleDelete = () => {
    // Make an API call to delete the record
    Axios.delete(`http://localhost:4000/FoodOrderRoute/delete-foodOrder/${_id}`)
      .then((res) => {
        if (res.status === 200) {
          // alert("Record deleted successfully");
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
        } else {
          Promise.reject();
        }
      })
      // .catch((err) => alert(err));
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
  };

  return (
    <tr>
      <td style={{ backgroundColor: "#C7D3D4", color: "#603F83" }}>{name}</td>
      <td style={{ backgroundColor: "#C7D3D4", color: "#603F83" }}>{email}</td>
    <td style={{backgroundColor: "#C7D3D4",color: "#603F83"}}>{phoneno}</td>
    <td style={{backgroundColor: "#C7D3D4",color: "#603F83"}}>{food}</td>
      <td style={{ backgroundColor: "#C7D3D4", color: "#603F83" }}>{members}</td>
     
      <td style={{ backgroundColor: "#C7D3D4", color: "#603F83" }}>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default FoodOrderListRow;
