import "../App.css";
import {useState} from 'react';
import TravelDetails from './TravelDetails';
import Axios from "axios";
import Swal from "sweetalert2";
function CreateTravel(){
    const [arr,setArr]=useState([]);
    const getState=(childData)=>{
        setArr(childData);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={VehicleName:arr[0],brand:arr[1],charge:arr[2],driverCharge:arr[3],image:arr[4]};
        console.log(data);
        Axios.post("http://Localhost:4000/TravelRoute/create-travel",data)
        .then((res)=>{
            if(res.status===200)
            //  alert("Record added Successfully");
        
Swal.fire({
    icon:"success",
    title:"Travel Added",
    text:"The record has been added successfully",
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
                title:"Travel Added",
                text:"The record has been added successfully",
                customClass:{
                    container:"my-swal",
                    title:"my-title",
                    popup:"my-popup",
                },
            })
        })
    }
    const backgroundImageUrl = "https://i.pinimg.com/originals/33/ef/8b/33ef8b9c0b902154a6cd4103a21275ef.jpg";
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height:"100%"
      };
    return(
        <div styel={containerStyle}>
            <form onSubmit={handleSubmit}>
                <TravelDetails getState={getState}
                VehicleName=""
                brand=""
                charge=""
                driverCharge=""
                imageValue=""
                >Create Travels</TravelDetails>
            </form>
        </div>
    );
}
export default CreateTravel;