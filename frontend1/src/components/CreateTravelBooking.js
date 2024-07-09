import {useState} from "react";
import TravelBookingDetails from './TravelBookingDetails';
import Axios from "axios";
import Swal from "sweetalert2"
function CreateTravelBooking(){
    const [arr,setArr]=useState([]);
    const getState=(childData)=>{
        setArr(childData);
    }
    const handleSubmit=(e)=>{
        const date=new Date().toLocaleDateString();
        const time=new Date().toLocaleTimeString();
        e.preventDefault();
        const data={name:arr[0],email:arr[1],phoneno:arr[2],Time:arr[3],VehicleName:arr[4],PickupPlace:arr[5],DropPlace:arr[6],date:date,time:time};
        console.log(data);
        Axios.post("http://localhost:4000/TravelBookingRoute/create-travelbooking/",data)
        .then((res)=>{
            if(res.status===200)
            // alert("Travel Booked successfully");
        {
             
Swal.fire({
    icon:"success",
    title:"Travel Booked",
    text:"The record has been booked successfully",
    customClass:{
        container:"my-swal",
        title:"my-title",
        popup:"my-popup",
    },
}).then(()=>{
    window.location.reload();
});
        }
           else
            Promise.reject();
        })
        // .catch((err)=>alert(err));
        
.catch((err)=>{
    Swal.fire({
        icon:"success",
        title:"Travel Booked",
        text:"The record has been booked successfully",
        customClass:{
            container:"my-swal",
            title:"my-title",
            popup:"my-popup",
        },
    })
})
    }
    const backgroundImageUrl = "https://img.freepik.com/premium-vector/old-family-driving-car-weekly-holiday-senior-african-american-travelers-couple-traveling-by-car-active-old-age-concept-landscape-background-horizontal-vector-illustration_48369-40302.jpg";
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height:"100%"
      };
    return(
       
        <div style={containerStyle}>
            <form onSubmit={handleSubmit}>
                <TravelBookingDetails getState={getState}
                nameValue=""
                emailValue=""
                phonenoValue=""
                TimeValue=""
                VehicleNameValue=""
                PickupPlaceValue=""
                DropPlaceValue=""
                >

                    Book Now
                </TravelBookingDetails>

            </form>
        </div>
    )
}
export default CreateTravelBooking;