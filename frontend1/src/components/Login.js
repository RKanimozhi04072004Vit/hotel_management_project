

import React from 'react';
import {useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom";
function Login(){
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/registerRoute/login",{email,password})
        .then(result=>
            {console.log(typeof result.data)
            if(typeof result.data==="object"){
                localStorage.setItem('email', result.data.email);
                localStorage.setItem('name', result.data.name);
                alert("login sucessfully")
            navigate('/about')
            }
            else{
                alert("The password that you have entered is incorrect!")
            }

        })
    .catch((err)=>console.log(err))
}
const backgroundImageUrl = "https://img.freepik.com/premium-vector/booking-hotel-online-tiny-woman-search-choose-reservation-hotel-apartment-smartphone-app_501813-854.jpg";
const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
   
  };

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100" style={containerStyle}>
            <div className="bg-white p-3 rounded w-25">
                <h2 class="text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Enter email" class="form-control rounded-3" 
                        onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input type="text" placeholder="Enter password" class="form-control rounded-3" 
                        onChange={(e)=>setPassword(e.target.value)} />
                    </div>
                    <button 
                    type="submit" className="btn btn-primary w-100 ">Login</button>
                    <p>Already have an account</p>
                </form>
                <Link to="/register"  className="btn btn-default border w-100 bg-light rounded-3 text-decoration-none">
                    Sign Up
                </Link>
            </div>
        </div>
    )
    
}
export default Login;
