import {Link} from "react-router-dom";
import React, { useState } from "react";

function AvailableFoods(props){
    let {_id,food,cost,discount,foodType,foodTime,image}=props.obj;
    console.log(image);
   
    const images=require(`../images/${image}`);
  
    return(
    <div>
         <div style={{flexDirection: "column",margin:"10px",width:"200px",height:"360px",borderRadius:"10px",backgroundColor:"#d3687f"}} >
        <div class="d-flex" style={{ flexDirection: "column" ,width:"150px",height:"400px",borderRadius:"10px"}}>
    <div class="m-5"  style={{ flexDirection: "column" ,width:"150px",height:"400px",borderRadius:"10px",backgroundColor:"#d3687f"}}>
        <p><img src={images} style={{ maxHeight: "80px", height: "auto", margin: "0px auto" }} width="100px" /></p>
      
        <table>
            <tr>
                <td style={{color:"black"}} class="p-1">{"food: " + food}</td>
            </tr>
            <tr>
            <td style={{color:"black"}} class="p-1">{"cost: " + cost}</td>
            </tr>
            <tr>
            <td style={{color:"black"}} class="p-1">{"discount(%): " + discount}</td>
            </tr>
            <tr>
            <td style={{color:"black"}} class="p-1">{"foodType:"+foodType}</td>
            </tr>
            <tr>
            <td style={{color:"black"}} class="p-1">{"foodTime:"+foodTime}</td>
            </tr>
             
        </table>
        <Link to="/create-food">
        <button class="btn btn-primary">Order Now</button>
        </Link>
    </div>
</div>
</div>
    </div>
  
    )
}
export default AvailableFoods;