import { useState } from "react";
import FoodOrder from "./FoodOrder";
import Axios from "axios";
import Swal from "sweetalert2";
function CreateFood()
{
const [arr,setArr] = useState([]); 

const getState = (childData) => {
setArr(childData);
}

const handleSubmit = () => {
const data = {name: arr[0],email:arr[1],phoneno:arr[2],food:arr[3],members:arr[4]};
Axios.post("http://localhost:4000/FoodOrderRoute/add-foodOrder",data)
.then((res)=>{
if(res.status === 200){
// alert("Food ordered successfully");

Swal.fire({
    icon:"success",
    title:"Food Ordered",
    text:"The record has been Ordered successfully",
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
        title:"Food Ordered",
        text:"The record has been ordered successfully",
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
<FoodOrder getState={getState} />
</form>
)
}
export default CreateFood;