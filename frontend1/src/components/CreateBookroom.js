import { useState } from "react";
import Bookroom from "./Bookroom";
import Axios from "axios";


import Swal from "sweetalert2";
function CreateBookroom()
{

const [arr,setArr] = useState([]); 

const getState = (childData) => {
setArr(childData);
}

const handleSubmit = () => {
    const date=new Date().toLocaleDateString();
    const time=new Date().toLocaleTimeString();
const data = {name: arr[0],email:arr[1],dob:arr[2],phoneno:arr[3],address:arr[4],beddingType:arr[5],NoRooms:arr[6],checkDate:arr[7],status:arr[8],date:date,time:time};
console.log(data);

Axios.post("http://localhost:4000/roomRoute/create-room",data)
.then((res)=>{
if(res.status === 200){
// alert("Room Booked successfully");
 
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
.then(()=>{
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
return (
<form onSubmit={handleSubmit}>
<Bookroom getState={getState} />
</form>
)
}
export default CreateBookroom;