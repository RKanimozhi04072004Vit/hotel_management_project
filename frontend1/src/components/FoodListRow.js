import Axios from "axios";
import {Link} from "react-router-dom";
import React, { useState } from "react";
import Swal from "sweetalert2";


function FoodListRow(props){
    let {_id,food,cost,discount,foodType,foodTime,image}=props.obj;
    console.log(image);
    // let imagePath="../images/"+image;
    // const images=require(imagePath);
    const images=require(`../images/${image}`);
   
    const handleDelete=()=>{
        Axios.delete("http://localhost:4000/FoodRoute/delete-food/"+_id)
        .then((res)=>{
            if(res.status===200){
                // alert("Record deleted successfully");
                Swal.fire({
                    icon:"success",
                    title:"Record Deleted",
                    text:"The record has been deleted successfully",
                    customClass:{
                        container:"my-swal",
                        title:"my-title",
                        popup:"my-popup",
                    },
                }).then(()=>{
                    window.location.reload();
                });
               // window.location.reload();
            }
            else
            Promise.reject();
        })
        // .catch((err)=>alert(err));
        .catch((err)=>{
            Swal.fire({
                icon:"success",
                title:"Record Deleted",
                text:"The record has been deleted successfully",
                customClass:{
                    container:"my-swal",
                    title:"my-title",
                    popup:"my-popup",
                },
            })
        })
    }
    return(
        <tr>
             <td style={{backgroundColor: "#1AAFBC",color: "#3B1877"}}><img  src={images} style={{ maxHeight: "150px",height:"auto" ,margin: "0px auto" }} width="150px"/></td>
             <td style={{backgroundColor: "#1AAFBC",color: "#3B1877"}}>{food}</td>
            <td style={{backgroundColor: "#1AAFBC",color: "#3B1877"}}>{cost}</td>
            <td style={{backgroundColor: "#1AAFBC",color: "#3B1877"}}>{discount}</td>
            <td style={{backgroundColor: "#1AAFBC",color: "#3B1877"}}>{foodType}</td>
            <td style={{backgroundColor: "#1AAFBC",color: "#3B1877"}}>{foodTime}</td>
            {/* <td><img  src={images} style={{ maxHeight: "150px",height:"auto" ,margin: "0px auto" }} width="150"/></td> */}
            <td style={{backgroundColor: "#1AAFBC",color: "#3B1877"}}>
                <button onClick={handleDelete} class="btn btn-danger m-2">Delete</button>
                <button class="btn btn-success">
<Link class="text-decoration-none text-light"
to={"/update-food/" + _id}>Edit</Link>
</button>
            </td>
            
        </tr>
    )
}
export default FoodListRow;