import { useEffect } from 'react';
import AddRoomDetails from './AddRoomDetails';
import {useParams} from "react-router-dom";
import {useState} from "react";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

import Axios from "axios";
function EditRooms(){
    const {id} =useParams();
    const [initialValue,setInitialValue]=useState({roomClass:"",roomType:"",NoOfRooms:"",cost:"",image:""});
    const [newData,setNewData]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:4000/addRoomRoute/update-addroom/"+id)
        .then((res)=>{
            if(res.status===200)
             {
                const {roomClass,roomType,NoOfRooms,cost,image}= res.data;
                setInitialValue({roomClass,roomType,NoOfRooms,cost,image});
             }
            else
              Promise.reject();
        })
        .catch((err)=>alert(err));
    },[id])
    const getState=(childData)=>{
        setNewData(childData);
    }
    //https://crud-deployment-backend-3-hv18.onrender.com
    const handleSubmit=(e)=>{
       e.preventDefault();
        const data={roomClass:newData[0],roomType:newData[1],NoOfRooms:newData[2],cost:newData[3],image:newData[4]};
        console.log(data);
        Axios.put("http://localhost:4000/addRoomRoute/update-addroom/"+id,data)
        .then((res)=>{
           console.log(res);
            if(res.status===200)
            //  alert("Record updated successfully");
            Swal.fire({
              icon:"success",
              title:"Record Edited",
              text:"The record has been Edited successfully",
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
              title:"Record Edited",
              text:"The record has been Edited successfully",
              customClass:{
                  container:"my-swal",
                  title:"my-title",
                  popup:"my-popup",
              },
          })
      })

    }
    const backgroundImageUrl = "https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54578.jpg";
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height:"100vh"
      };
        
    return(
        
       <div style={containerStyle}>
        
         <form onSubmit={handleSubmit} >

      <AddRoomDetails getState={getState}
           roomClassValue={initialValue.roomClass}
           roomTypeValue={initialValue.roomType}
           NoOfRoomsValue={initialValue.NoOfRooms}
           costValue={initialValue.cost}
           imageValue={initialValue.image}>
          
            Edit Room
            </AddRoomDetails>
      </form>
       </div>
    )
}
export default EditRooms;