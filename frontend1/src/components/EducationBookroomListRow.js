
import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
function EducationBookRoomListRow(props) {
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
    TotalCost,
    checkDate,
    status,
    image,
  } = props.obj;
   const images=require(`../images/sports/${image}`);
  dob = dob ? dob.substring(0, 10) : ''; 
  checkDate = checkDate ? checkDate.substring(0, 10) : ''; 

  const [isApproved, setIsApproved] = useState(status === "approved");

  const handleApprove = () => {
    Axios.put(`http://localhost:4000/educationRoomRoute/update-eduroom/${_id}`, {
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
    Axios.delete(`http://localhost:4000/educationRoomRoute/delete-eduroom/${_id}`)
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
      <td style={{ backgroundColor: "#00203F", color: "#ADEFD1" }}>{name}</td>
      <td style={{ backgroundColor: "#00203F", color: "#ADEFD1" }}>{email}</td>
      <td style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>{dob}</td>
    <td style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>{phoneno}</td>
    <td style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>{address}</td>
    <td style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>{beddingType}</td>
    {/* <td style={{backgroundColor: "#ADEFD1",color: "#00203F"}}>{cost}</td>  */}
    <td style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>{NoRooms}</td>
    {/* <td style={{backgroundColor: "#ADEFD1",color: "#00203F"}}>{mealPlan}</td>
    <td style={{backgroundColor: "#ADEFD1",color: "#00203F"}}>{TotalCost}</td> */}
      <td style={{ backgroundColor: "#00203F", color: "#ADEFD1" }}>{checkDate}</td>
      <td style={{backgroundColor: "#00203F",color: "#ADEFD1"}}><img  src={images} style={{ maxHeight: "150px",height:"auto" ,margin: "0px auto" }} width="150px"/></td>
      <td style={{ backgroundColor: "#00203F", color: "#ADEFD1" }}>
        {isApproved ? <span>Approved</span> : <span>Waiting</span>}
      </td>
      <td style={{ backgroundColor: "#00203F", color: "#ADEFD1" }}>
        {isApproved ? (
          <span>Approved</span>
        ) : (
          <button onClick={handleApprove} className="btn btn-primary" disabled={isApproved}>
            Approve
          </button>
        )}
      </td>
      <td style={{ backgroundColor: "#00203F", color: "#ADEFD1" }}>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default EducationBookRoomListRow;





