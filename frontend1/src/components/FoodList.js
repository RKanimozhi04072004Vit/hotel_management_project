import Axios from "axios";
import {useEffect,useState} from "react"; 
import FoodListRow from "./FoodListRow";
import {Link} from "react-router-dom";
function FoodList(){
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/FoodRoute/")
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
            return <FoodListRow obj={val}/>

        })
    }
    return(

       <div>
                <nav class="navbar bg-dark">
<Link  to="/" class="navbar-brand mx-3" style={{color:"white"}}>Online hotel management System</Link>
<div class="nav">
<Link to="/admin-page" class="nav-link" style={{color:"white"}}>back</Link>
</div>
</nav>
         <table class="table table-bordered table-striped">
            <thead>
                <tr>
                <th class="text-center" style={{backgroundColor: "#1AAFBC",color: "#3B1877"}}>image</th>
                <th classs="text-center" style={{backgroundColor: "#1AAFBC",color: "#3B1877"}}>Food</th>
                    <th classs="text-center" style={{backgroundColor: "#1AAFBC",color: "#3B1877"}}>Cost</th>
                    <th class="text-center" style={{backgroundColor: "#1AAFBC",color: "#3B1877"}}>Discount(%)</th>
                    <th class="text-center" style={{backgroundColor: "#1AAFBC",color: "#3B1877"}}>Food Type</th>
                    <th class="text-center" style={{backgroundColor: "#1AAFBC",color: "#3B1877"}}>Food Time</th>
                    <th class="text-center" style={{backgroundColor: "#1AAFBC",color: "#3B1877"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
       </div>
    )
}
export default FoodList;

