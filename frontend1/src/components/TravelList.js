import Axios from "axios";
import {useState,useEffect} from "react";
import TravelListRow from './TravelListRow';
import {Link} from "react-router-dom";
function TravelList(){
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/TravelRoute/")
        .then((res)=>{
            if(res.status===200)
            setArr(res.data);
        else
        Promise.reject();
        })
        .catch((err)=>alert(err));
    })
    const ListItems=()=>{
        return arr.map((val,ind)=>{
            return <TravelListRow obj={val} />
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
                <th class="text-center" style={{backgroundColor: "#331B3F",color: "#ACC7B4"}}>image</th>
                <th classs="text-center" style={{backgroundColor: "#331B3F",color: "#ACC7B4"}}>Vehicle name</th>
                    <th classs="text-center" style={{backgroundColor: "#331B3F",color: "#ACC7B4"}}>Brand</th>
                    <th class="text-center" style={{backgroundColor: "#331B3F",color: "#ACC7B4"}}>charge:</th>
                    <th class="text-center" style={{backgroundColor: "#331B3F",color: "#ACC7B4"}}>Driver charge</th>
                    
                    <th class="text-center" style={{backgroundColor: "#331B3F",color: "#ACC7B4"}}>Action</th>
                   
                   
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
        </div>
    )
}
export default TravelList;