import { useEffect } from 'react';
import FoodDetails from './FoodDetails';
import {useParams} from "react-router-dom";
import {useState} from "react";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import Axios from "axios";
function EditFood(){
    const {id} =useParams();
    const [initialValue,setInitialValue]=useState({food:"",cost:"",discount:"",foodType:"",foodTime:"",image:""});
    const [newData,setNewData]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:4000/FoodRoute/update-food/"+id)
        .then((res)=>{
            if(res.status===200)
             {
                const {food,cost,discount,foodType,foodTime,image}= res.data;
                setInitialValue({food,cost,discount,foodType,foodTime,image});
             }
  

            else
              Promise.reject();
        })
        .catch((err)=>alert(err));
        
    },[id])
    const getState=(childData)=>{
        setNewData(childData);
    }
    //https://crud-deployment-backend-3-hv18.onrender.com
    const handleSubmit=(e)=>{
       e.preventDefault();
        const data={food:newData[0],cost:newData[1],discount:newData[2],foodType:newData[3],foodTime:newData[4],image:newData[5]};
        console.log(data);
        Axios.put("http://localhost:4000/FoodRoute/update-food/"+id,data)
        .then((res)=>{
           console.log(res);
            if(res.status===200)
             alert("Record updated successfully");
            else 
              Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    const backgroundImageUrl = "https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-54578.jpg";
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height:"100%"
      };
        
    return(
        
       <div style={containerStyle}>
        
         <form onSubmit={handleSubmit} >

      <FoodDetails getState={getState}
           foodValue={initialValue.food}
           costValue={initialValue.cost}
           discountValue={initialValue.discount}
           foodTypeValue={initialValue.foodType}
           foodTimeValue={initialValue.foodTime}
           imageValue={initialValue.image}>
          
            Edit Food
            </FoodDetails>
      </form>
       </div>
    )
}
export default EditFood;