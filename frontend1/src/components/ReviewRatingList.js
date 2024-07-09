import Axios from "axios";
import {useEffect,useState} from "react"; 
import ReviewRatingListRow from "./ReviewRatingListRow";
import {Link} from "react-router-dom";
function ReviewRatingList(){
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
            return <ReviewRatingListRow obj={val}/>

        })
    }
    const backgroundImageUrl ="https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-golden-3d-render-of-five-star-ranking-in-customer-reviews-on-image_3793708.jpg";
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height:"100vh"
      };
    return(
        <div style={containerStyle}>
             <nav class="navbar bg-dark">
        <Link  to="/" class="navbar-brand mx-3" style={{color:"white"}}>Online hotel management System</Link>
        <div class="nav">
        <Link to="/admin-page" class="nav-link" style={{color:"white"}}>back</Link>
        </div>
        </nav>
            <table class="table table-bordered table-striped " style={{display:"flex-derection-column",justifyContent:"center",alignItems:"center",width:"800px",margin:"0 auto"}}>
            <thead>
                <tr>
                    <th classs="text-center" style={{backgroundColor: "#000000",color: "#FFFFFF"}}>Name</th>
                    <th class="text-center" style={{backgroundColor: "#000000",color: "#FFFFFF"}}>Email</th>
                    <th class="text-center" style={{backgroundColor: "#000000",color: "#FFFFFF"}}>Hotal Rating</th>
                    <th class="text-center" style={{backgroundColor: "#000000",color: "#FFFFFF"}}>Hotal Review </th>
                    <th class="text-center" style={{backgroundColor: "#000000",color: "#FFFFFF"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
        </div>
    )
}
export default ReviewRatingList;