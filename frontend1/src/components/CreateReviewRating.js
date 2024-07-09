import { useState } from "react";
import ReviewRatingForm from "./ReviewRatingForm";
import Axios from "axios";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
function CreateReviewRating()
{
const [arr,setArr] = useState([]); //arr=[Raj,raj@gmail.com,1]
//Declaring a argument function
const getState = (childData) => {

setArr(childData);
}
const handleSubmit = () => {
const data = {name: arr[0],email:arr[1],HotalRating:arr[2],HotalReview:arr[3]};
Axios.post("http://localhost:4000/ReviewRatingRoute/create-rating",data)
.then((res)=>{
if(res.status === 200)
// alert("Rating added successfully");
 
Swal.fire({
  icon:"success",
  title:"Rating Added",
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
      title:"Rating Added",
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
const backgroundImageUrl = "https://png.pngtree.com/thumb_back/fw800/background/20230713/pngtree-top-rated-customer-service-glowing-5-star-review-and-excellent-feedback-image_3861145.jpg";
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
<ReviewRatingForm getState={getState} />
</form>
</div>
)
}
export default CreateReviewRating;