import React from 'react';
import '../App.css';
import {useState} from "react";
import {Link} from "react-router-dom";
import { useEffect} from "react";
function FoodDetails(props){
   const [food,setfood]=useState("props.foodValue");
   const [cost,setcost]=useState("props.costValue");
   const [discount,setdiscount]=useState("props.discountValue");
   const [foodType,setfoodType]=useState("props.foodTypeValue");
   const [foodTime,setfoodTime]=useState("props.foodTimeValue");
   const [image,setImage]=useState("props.imageValue");
  //  const [img, setImg] = useState("");
  //  const [allImage, setAllImage] = useState([]);
  
  useEffect(()=>{
    setfood(props.foodValue);
    setcost(props.costValue);
    setdiscount(props.discountValue);
    setfoodType(props.foodTypeValue);
    setfoodTime(props.foodTimeValue);
    setImage(props.imageValue);
 
},[props.foodValue,props.costValue,props.discountValue,props.foodTypeValue,props.foodTimeValue,props.imageValue]);
   const arr=[food,cost,discount,foodType,foodTime,image];
  
   const handleClick=()=>{
        props.getState(arr);
        console.log(image);
    }

    return(
        <div>
          <nav class="navbar bg-dark">
            <Link  to="/" class="navbar-brand mx-3" style={{color:"white"}}>Online hotal management System</Link>
             <div class="nav">
            <Link to="/admin-page" class="nav-link" style={{color:"white"}}>back</Link>
        </div>
     </nav> 
     
         <div style={{ maxWidth: "40%", margin: "0px auto" }}>
          <label htmlFor="food" style={{color:"black",fontType:"bold"}}>Food:</label>
          <input id="food" type="text" defaultValue={props.foodValue} onChange={(event)=>setfood(event.target.value)} class="form-control my-3" placeholder="Enter your food"></input>
          <label htmlFor="cost" style={{color:"black",fontType:"bold"}}>Cost:</label>
          <input id="cost" type="text"  defaultValue={props.costValue} onChange={(event) => setcost(event.target.value)}class="form-control my-3" placeholder="Cost" />
          <label htmlFor="discount" style={{color:"black",fontType:"bold"}}>Discount(%):</label> 
          <input id="discount" type="text"  defaultValue={props.discountValue} onChange={(event) => setdiscount(event.target.value)}class="form-control my-3" placeholder="Discount" />
         <label htmlFor="foodType" style={{color:"black",fontType:"bold"}}>Food Type:</label>
         {/* <input id="FoodType" type="text" defaultValue={props.foodTypeValue} onChange={(event) => setfoodType(event.target.value)} class="form-control my-3" placeholder="Food Type" /> */}
         <select id="FoodType" type="text" defaultValue={props.foodTypeValue} onChange={(event) => setfoodType(event.target.value)} class="form-control my-3" placeholder="Food Type">
         <option value="foodType">Choose Food Type</option>
            <option value="veg">Veg</option>
            <option value="non veg">Non Veg</option>
         </select>
         <label htmlFor="foodType" style={{color:"black",fontType:"bold"}}>Food Time:</label>
         <select id="FoodType" type="text" defaultValue={props.foodTimeValue} onChange={(event) => setfoodTime(event.target.value)} class="form-control my-3" placeholder="Food Time">
         <option value="foodType">Choose Food Time</option>
            <option value="breakfast">BreakFast</option>
            <option value="lanch">Lanch</option>
            <option value="dinner">Dinner</option>
         </select>
        
         <label htmlFor="image"style={{color:"black",fontType:"bold"}} >image:</label>
         <input id="image" type="file" size="10" defaultValue={props.imageValue} onChange={(event) => setImage(event.target.files[0].name)}  class="form-control my-3" placeholder="image upload" />
      
        
         <button  onClick={handleClick} class="btn btn-primary my-3 d-block mx-auto" type="submit">{props.children}</button>
      </div>
      
           </div>
         
        ) 

    }
export default FoodDetails;