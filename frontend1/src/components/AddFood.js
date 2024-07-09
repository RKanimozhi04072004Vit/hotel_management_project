import '../App.css';
import { useState } from "react";
import FoodDetails from './FoodDetails';
import Axios from "axios";
import Swal from "sweetalert2";
function AddFood() {
    
    const [arr,setArr]=useState([]);
    const getState=(childData)=>{
        setArr(childData);
    }
    

    const handleSubmit = (e) => {
       
        e.preventDefault();
        const data={food:arr[0],cost:arr[1],discount:arr[2],foodType:arr[3],foodTime:arr[4],image:arr[5]};
        console.log(data);
        Axios.post("http://localhost:4000/FoodRoute/add-food",data)
        .then((res)=>{
            if(res.status===200)
            //  alert("Record added successfully");
            Swal.fire({
                icon:"success",
                title:"Food Added",
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
                title:"Food Added",
                text:"The record has been added successfully",
                customClass:{
                    container:"my-swal",
                    title:"my-title",
                    popup:"my-popup",
                },
            })
        })
    };

    //https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtMjE4YmF0Y2g5LW15bnQtNjMuanBn.jpg
//https://wallpapercave.com/wp/wp2610908.jpg
    const backgroundImageUrl = "https://i.pinimg.com/originals/33/ef/8b/33ef8b9c0b902154a6cd4103a21275ef.jpg";
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height:"100%"
      };
        
    return (
        <div style={containerStyle}>
        
                <form onSubmit={handleSubmit}>
                    <FoodDetails getState={getState}
                      foodValue=""
                      costValue=""
                      discountValue=""
                      foodTypeValue=""
                      foodTimeValue=""
                      imageValue=""
                    >
                        Create Food
                       
                    </FoodDetails>
                </form>
            </div>
       
    );
}

export default AddFood;
