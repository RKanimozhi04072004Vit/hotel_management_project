

import {Link} from "react-router-dom";
import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

function BookroomListRow(props) {
  let {
    _id,
    name,
    email,
    dob,
    phoneno,
    address,
    beddingType,
    cost,
    NoRooms,
    mealPlan,
    Time,
    checkDate,
    status,
    time,
    date
  } = props.obj;

  dob = dob ? dob.substring(0, 10) : ''; 
  checkDate = checkDate ? checkDate.substring(0, 10) : ''; 

  const [isApproved, setIsApproved] = useState(status === "approved");

  const handleApprove = () => {
    // Make an API call to update the status to "approved"
    Axios.put(`http://localhost:4000/roomRoute/update-status/${_id}`, {
      status: "approved",
    })
      .then((res) => {
        if (res.status === 200) {
          // alert("Status changed to Approved");
           
Swal.fire({
  icon:"success",
  title:"Status Approved",
  text:"The record has been approved successfully",
  customClass:{
      container:"my-swal",
      title:"my-title",
      popup:"my-popup",
  },
}).then(()=>{
  window.location.reload();
});
          setIsApproved(true);
        } else {
          Promise.reject();
        }
      })
      // .catch((err) => alert(err));
      .catch((err)=>{
        Swal.fire({
            icon:"success",
            title:"Status Approved",
            text:"The record has been approved successfully",
            customClass:{
                container:"my-swal",
                title:"my-title",
                popup:"my-popup",
            },
        })
    })
  };

  const handleDelete = () => {
    // Make an API call to delete the record
    Axios.delete(`http://localhost:4000/roomRoute/delete-room/${_id}`)
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
      <td style={{ backgroundColor: "#ADEFD1", color: "#00203F" }}>{name}</td>
      <td style={{ backgroundColor: "#ADEFD1", color: "#00203F" }}>{email}</td>
      <td style={{backgroundColor: "#ADEFD1",color: "#00203F"}}>{dob}</td>
    <td style={{backgroundColor: "#ADEFD1",color: "#00203F"}}>{phoneno}</td>
    <td style={{backgroundColor: "#ADEFD1",color: "#00203F"}}>{address}</td>
    <td style={{backgroundColor: "#ADEFD1",color: "#00203F"}}>{beddingType}</td>
    {/* <td style={{backgroundColor: "#ADEFD1",color: "#00203F"}}>{cost}</td>  */}
    <td style={{backgroundColor: "#ADEFD1",color: "#00203F"}}>{NoRooms}</td>
    {/* <td style={{backgroundColor: "#ADEFD1",color: "#00203F"}}>{mealPlan}</td>
    <td style={{backgroundColor: "#ADEFD1",color: "#00203F"}}>{TotalCost}</td> */}
    {/* <td style={{backgroundColor:"#ADEFD1",color:"#00203F"}}>{time}</td> */}
    {/* <td style={{backgroundColor:"#ADEFD1",color:"#00203F"}}>{date}</td> */}
      <td style={{ backgroundColor: "#ADEFD1", color: "#00203F" }}>{checkDate}</td>
      <td style={{ backgroundColor: "#ADEFD1", color: "#00203F" }}>
        {isApproved ? <span>Approved</span> : <span>Waiting</span>}
      </td>
      <td style={{ backgroundColor: "#ADEFD1", color: "#00203F" }}>
        {isApproved ? (
          <span>Approved</span>
        ) : (
          <button onClick={handleApprove} className="btn btn-primary" disabled={isApproved}>
            Approve
          </button>
        )}
      </td>
      <td style={{ backgroundColor: "#ADEFD1", color: "#00203F" }}>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default BookroomListRow;







