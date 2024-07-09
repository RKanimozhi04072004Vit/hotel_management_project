import { useEffect } from 'react';
import TravelDetails from './TravelDetails';
import {useParams} from "react-router-dom";
import {useState} from "react";
import {Link} from "react-router-dom";
import Axios from "axios";

import Swal from "sweetalert2";

function EditTravel(){
    const {id}=useParams();
    const [initialValue,setInitialValue]=useState({vehicleName:"",brand:"",charge:"",driverCharge:"",image:""});
    const [newData,setNewData]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/TravelRoute/update-travel/"+id)
        .then((res)=>{
            if(res.status===200){
                const {VehicleName,brand,charge,driverCharge,image}=res.data;
                setInitialValue({VehicleName,brand,charge,driverCharge,image});
            }
            else
             Promise.reject();
        })
        .catch((err)=>alert(err));
    },[id])
    const getState=(childData)=>{
        setNewData(childData);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={VehicleName:newData[0],brand:newData[1],charge:newData[2],driverCharge:newData[3],image:newData[4]};
        console.log(data);
        Axios.put("http://localhost:4000/TravelRoute/update-travel/"+id,data)
        .then((res)=>{
            console.log(res);
            if(res.status===200)
            // alert("Record updated Successfully");
         
Swal.fire({
    icon:"success",
    title:"Record Editted",
    text:"The record has been editted successfully",
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
                title:"Record Editted",
                text:"The record has been editted successfully",
                customClass:{
                    container:"my-swal",
                    title:"my-title",
                    popup:"my-popup",
                },
            })
        })
    }
    const backgroundImageUrl = "https://wallpapercave.com/wp/wp2610908.jpg";
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height:"100%"
      };
      return(
        
        <div style={containerStyle}>
         
          <form onSubmit={handleSubmit} >
 
       <TravelDetails getState={getState}
            VehicleValueValue={initialValue.VehicleValue}
            brandValue={initialValue.brand}
            chargeValue={initialValue.charge}
            driverChargeValue={initialValue.driverCharge}
            imageValue={initialValue.image}>
           
             Edit Food
             </TravelDetails>
       </form>
        </div>
     ) 

}
export default EditTravel;