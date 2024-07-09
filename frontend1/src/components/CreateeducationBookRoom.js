import {useState} from "react";
import EducationBookRoom from './EducationBookRoom';
import Axios from "axios";
import Swal from "sweetalert2";
function CreateeducationBookRoom(){
    const [arr,setArr]=useState([]);
    const getState=(childData)=>{
        setArr(childData);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={name:arr[0],email:arr[1],dob:arr[2],phoneno:arr[3],address:arr[4],beddingType:arr[5],NoRooms:arr[6],checkDate:arr[7],status:arr[8],image:arr[9]}
        Axios.post("http://localhost:4000/educationRoomRoute/create-eduroom/",data)
        .then((res)=>{
            if(res.status===200){
                // alert("Room Booked Successfully")
                 
Swal.fire({
    icon:"success",
    title:"Room Booked",
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
                title:"Room Booked",
                text:"The record has been booked successfully",
                customClass:{
                    container:"my-swal",
                    title:"my-title",
                    popup:"my-popup",
                },
            })
        })
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <EducationBookRoom getState={getState}  />
            </form>
        </div>
    )
}
export default CreateeducationBookRoom;