import {useNavigate} from 'react-router-dom';
import React,{useState} from 'react';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
function Admin(){
   const navigate=useNavigate();
   const [name,setName]=useState('');
   const [password,setPassword]=useState('');
   const navigatePage=()=>{
      if(name=="kanimozhi" && password=="kani@123"){
         // alert('Login sucessfully');
         Swal.fire({
            icon:"success",
            title:"Login successfully",
            text:"login successfully",
            customClass:{
                container:"my-swal",
                title:"my-title",
                popup:"my-popup",
            },
        }).then(()=>{
            window.location.reload();
        });

         navigate('/admin-page');
      }
      else if (name === "kanimozhi" && password !== "kani@123") {
         alert('Please insert correct password');
       } 
      else{
         alert('Please fill in both name and password fields.');
      }
   };
   //https://t4.ftcdn.net/jpg/02/55/77/03/360_F_255770374_rbmJO9gkkIhMBcyVPc3iW016BCLDvcWc.jpg

   const backgroundImageUrl = "https://t4.ftcdn.net/jpg/02/55/77/03/360_F_255770374_rbmJO9gkkIhMBcyVPc3iW016BCLDvcWc.jpg";
const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    height:"100vh"
   
  };
   return(
      <div class="bg" style={containerStyle}>
        <nav class="navbar bg-dark">
<Link  to="/" class="navbar-brand mx-3" style={{color:"white"}}>Online hotel management System</Link>
<div class="nav">
{/* <Link to="/admin-page" class="nav-link" style={{color:"white"}}>Admin</Link> */}

</div>
</nav>
         <div style={{maxWidth:"30%",margin:"0px auto"}}>
            <input type="text" class="form-control my-3" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="password" class="form-control my-3" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type="button" onClick={navigatePage} class="btn btn-success my-4 d-block mx-auto">
               Submit
            </button>
         </div>
      </div>
   );
}
export default Admin;

 

// C:\Users\ELCOT\Desktop\online hotal management system\frontend1\src\components\a1.jpg