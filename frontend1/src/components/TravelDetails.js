import React from "react";
import "../App.css";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
function TravelDetails(props){
    const [VehicleName,setVehicleName]=useState("props.VehicleNameValue");
    const [brand,setbrand]=useState("props.brandValue");
    const [charge,setcharge]=useState("props.chargeValue");
    const [driverCharge,setdriverCharge]=useState("props.driverCharge");
    const [image,setimage]=useState("props.imageValue");

    useEffect(()=>{
        setVehicleName(props.VehicleName);
        setbrand(props.brandValue);
        setcharge(props.chargeValue);
        setdriverCharge(props.driverCharge);
        setimage(props.imageValue);
    },[props.VehicleName,props.brandValue,props.chargeValue,props.driverCharge,props.imageValue]);
    const arr=[VehicleName,brand,charge,driverCharge,image];

    const handleClick=()=>{
        props.getState(arr);
    }
    const backgroundImageUrl ="https://img.freepik.com/free-vector/happy-family-travelling-by-car-with-camping-equipment-top_74855-10751.jpg";
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
            <Link to="/admin-page" class="nav-link" style={{color:"white"}}>back</Link>
        </div>
     </nav> 
     <div style={{ maxWidth: "40%", margin: "0px auto" }}>
          <label htmlFor="vehiclename" style={{color:"black",fontType:"bold"}}>Vehicle Name:</label>
          <input id="vehiclename" type="text" defaultValue={props.VehicleNameValue} onChange={(event)=>setVehicleName(event.target.value)} class="form-control my-3" placeholder="Enter your Vehicle name"></input>
          <label htmlFor="brand" style={{color:"black",fontType:"bold"}}>Brand:</label>
          <input id="brand" type="text"  defaultValue={props.brandValue} onChange={(event) => setbrand(event.target.value)}class="form-control my-3" placeholder="brand" />
          <label htmlFor="charge" style={{color:"black",fontType:"bold"}}>Charge:</label> 
          <input id="charge" type="text"  defaultValue={props.chargeValue} onChange={(event) => setcharge(event.target.value)}class="form-control my-3" placeholder="Charge" />
         <label htmlFor="drivercharge" style={{color:"black",fontType:"bold"}}>Driver Charge:</label>
         <input id="drivercharge" type="text" defaultValue={props.driverChargeValue} onChange={(event) => setdriverCharge(event.target.value)} class="form-control my-3" placeholder="Driver Charge" />
         <label htmlFor="image"style={{color:"black",fontType:"bold"}} >image:</label>
         <input id="image" type="file" size="10" defaultValue={props.imageValue} onChange={(event) => setimage(event.target.files[0].name)}  class="form-control my-3" placeholder="image upload" />
      
        
         
        
        
      
        
         <button  onClick={handleClick} class="btn btn-primary my-3 d-block mx-auto" type="submit">{props.children}</button>
      </div>
        </div>
    )
}
export default TravelDetails;