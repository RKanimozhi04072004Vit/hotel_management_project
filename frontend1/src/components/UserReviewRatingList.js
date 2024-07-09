import Axios from "axios";
import {useEffect,useState} from "react"; 
import UserReviewRatingRow from "./UserReviewRatingRow";
import {Link} from "react-router-dom";
function UserReviewRatingList(){
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/ReviewRatingRoute/")
        .then((res)=>{
            if(res.status===200)
             setArr(res.data);
            else
             Promise.reject();
        })
        .catch((err)=>alert(err));
    },[]);
    const ListItems=()=>{
        return arr.map((val,ind)=>{
            return <UserReviewRatingRow obj={val}/>

        })
    }
    // const backgroundImageUrl ="https://static.vecteezy.com/system/resources/previews/002/169/714/original/online-feedback-reputation-best-quality-customer-review-concept-flat-style-businessman-hand-finger-pointing-five-gold-star-rating-on-gradient-background-illustration-vector.jpg";
    // const containerStyle = {
    //     backgroundImage: `url(${backgroundImageUrl})`,
    //     backgroundSize: "cover", 
    //     backgroundPosition: "center", 
    //     height:"100vh"
    //   };
    return(
        <div style={{backgroundColor:"#aa8d6f"}}>
             <nav class="navbar bg-dark">
        <Link  to="/" class="navbar-brand mx-3" style={{color:"white"}}>Online hotel management System</Link>
        <div class="nav">
        <Link to="/home" class="nav-link" style={{color:"white"}}>back</Link>
        </div>
        </nav>
       <div style={{margin:"10px"}}>  {ListItems()}</div>

            
        </div>
    )
}
export default UserReviewRatingList;

