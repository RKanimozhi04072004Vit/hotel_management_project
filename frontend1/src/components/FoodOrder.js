import React from 'react';

import {useState} from "react";
import {Link} from "react-router-dom";
function FoodOrder(props){
   const [name,setName]=useState("props.nameValue");
   const [email,setEmail]=useState("props.emailValue");
   const [phoneno,setphoneno]=useState("props.phonenoValue");
   const [food,setfood]=useState("props.foodValue");
   const [members,setmembers]=useState("props.membersValue");
   
   const arr=[name,email,phoneno,food,members];
  
   const handleClick=()=>{
        props.getState(arr);
    }
  
    const backgroundImageUrl = "https://c0.wallpaperflare.com/preview/5/307/817/pizza-courier-online-cheese.jpg";
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height:"100vh"
      };
    return(
        <div style={containerStyle}>
          <nav class="navbar bg-dark">
            <Link  to="/" class="navbar-brand mx-3" style={{color:"white"}}>Online hotal management System</Link>
             <div class="nav">
            <Link to="/home" class="nav-link" style={{color:"white"}}>back</Link>
        </div>
     </nav> 
          <div style={{ maxWidth: "40%", margin: "0px auto" }}>
          
         <label htmlFor="name" style={{color:"black"}}>Name:</label>
        <input id="name" type="text" defaultValue={props.nameValue} onChange={(event) => setName(event.target.value)} class="form-control my-3" placeholder="Enter your name" />
        <label htmlFor="email" style={{color:"black"}}>Email:</label>
        <input id="email" type="text" defaultValue={props.emailValue} onChange={(event) => setEmail(event.target.value)} class="form-control my-3" placeholder="Enter your email" />
      
        <label htmlFor="phoneno" style={{color:"black"}}>PhoneNumber:</label>
        <input id="phoneno" type="number" size="10" defaultValue={props.phonenoValue} onChange={(event) => setphoneno(event.target.value)} class="form-control my-3" placeholder="Enter your Phoneno" />
        <label htmlFor="food" style={{color:"black"}}>Food:</label>
        {/* <input id="food" type="text" size="10" defaultValue={props.foodValue} onChange={(event) => setfood(event.target.value)} class="form-control my-3" placeholder="Enter your food that have choosed" /> */}
        <select id="food" value={food} onChange={(event) => setfood(event.target.value)} className="form-control my-3">
       <option value="">Select your food</option>
        <option value="Idly">Idly</option>
       <option value="Samosa">Samosa</option>
       <option value="Dosa">Dosa</option>
       <option value="Poori">Poori</option>
       <option value="Sadham">Sadham</option>
      </select>

        <label htmlFor="members" style={{color:"black"}}>Members:</label>
        <input id="members" type="text" defaultValue={props.membersValue} onChange={(event) => setmembers(event.target.value)} class="form-control my-3" placeholder="members" />
        
        <button onClick={handleClick} class="btn btn-info my-3 d-block mx-auto" type="submit">Order</button>
     </div>
          </div>
        ) 
}
export default FoodOrder;