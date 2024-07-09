import { useState } from "react";
import ContactForm from "./ContactForm";
import Axios from "axios";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
function CreateUserMsg()
{
const [arr,setArr] = useState([]); //arr=[Raj,raj@gmail.com,1]
//Declaring a argument function
const getState = (childData) => {
//childData=[Raj,raj@gmail.com,1]
setArr(childData);
}
const handleSubmit = () => {
const data = {Name: arr[0],Email:arr[1],Message:arr[2]};
Axios.post("http://localhost:4000/contactRoute/create-user",data)
.then((res)=>{
if(res.status === 200)
// alert("Message added successfully");
Swal.fire({
  icon:"success",
  title:"Message Added",
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
      title:"Message Added",
      text:"The record has been added successfully",
      customClass:{
          container:"my-swal",
          title:"my-title",
          popup:"my-popup",
      },
  })
})
}

//https://www.catenon.com/front/img/backgrounds/bg-contact.jpg
const backgroundImageUrl = "https://www.catenon.com/front/img/backgrounds/bg-contact.jpg";
const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    height:"100vh"
  };
    
return (
<div style={containerStyle}>
<form onSubmit={handleSubmit}>
<nav class="navbar bg-dark">
            <Link  to="/" class="navbar-brand mx-3" style={{color:"white"}}>Online hotel management System</Link>
             <div class="nav">
            <Link to="/home" class="nav-link" style={{color:"white"}}>back</Link>
        </div>
     </nav> 
<ContactForm getState={getState} />
</form>
</div>
)
}
export default CreateUserMsg;