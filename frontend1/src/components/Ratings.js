import { useEffect } from 'react';
import RatingDetails from './RatingDetails';
import {useParams} from "react-router-dom";
import {useState} from "react";
import {Link} from "react-router-dom";
import Axios from "axios";
function Ratings(){
    const {id} =useParams();
    const [initialValue,setInitialValue]=useState({roomClass:"",roomType:"",NoOfRooms:"",cost:"",ratings:"",image:""});
    const [newData,setNewData]=useState([]);

    useEffect(()=>{
        Axios.get("http://localhost:4000/addRoomRoute/update-addroom/"+id)
        .then((res)=>{
            if(res.status===200)
             {
                const {roomClass,roomType,NoOfRooms,cost,ratings,image}= res.data;
                setInitialValue({roomClass,roomType,NoOfRooms,cost,ratings,image});
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
        const data={roomClass:newData[0],roomType:newData[1],NoOfRooms:newData[2],cost:newData[3],ratings:newData[4],image:newData[4]};
        console.log(data);
        Axios.put("http://localhost:4000/addRoomRoute/update-addroom/"+id,data)
        .then((res)=>{
           console.log(res);
            if(res.status===200)
             alert("Record updated successfully");
            else 
              Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    const backgroundImageUrl = "https://wallpapercave.com/wp/wp2610908.jpg";
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height:"100vh"
      };
        
    return(
        
       <div style={containerStyle}>
        
         <form onSubmit={handleSubmit} >

      <RatingDetails getState={getState}
           roomClassValue={initialValue.roomClass}
           roomTypeValue={initialValue.roomType}
           NoOfRoomsValue={initialValue.NoOfRooms}
           costValue={initialValue.cost}
           ratingsValue={initialValue.ratings}
           imageValue={initialValue.image}>
          
            Edit Room
            </RatingDetails>
      </form>
       </div>
    )
}
export default Ratings;