import Axios from "axios";
import {useEffect,useState} from "react"; 
import TravelBookingListRow from "./TravelBookingListRow";
import {Link} from "react-router-dom";
function TravelBookingList(){
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/TravelBookingRoute/")
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
            return <TravelBookingListRow obj={val}/>

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
               
                <th classs="text-center" style={{backgroundColor: "#0A174E",color: "#F5D042"}}>Name</th>
                    <th classs="text-center" style={{backgroundColor: "#0A174E",color: "#F5D042"}}>Email</th>
                    <th class="text-center" style={{backgroundColor: "#0A174E",color: "#F5D042"}}>Phone No</th>
                    <th class="text-center" style={{backgroundColor: "#0A174E",color: "#F5D042"}}>Time</th>
                    <th class="text-center" style={{backgroundColor: "#0A174E",color: "#F5D042"}}>Vehicle Name</th>
                    <th class="text-center" style={{backgroundColor: "#0A174E",color: "#F5D042"}}>Pickup Place</th>
                    <th class="text-center" style={{backgroundColor: "#0A174E",color: "#F5D042"}}>Drop Place</th>
                    <th class="text-center" style={{backgroundColor:"#0A174E",color:"#F5D042"}}>Time</th>
                    <th class="text-center" style={{backgroundColor:"#0A174E",color:"#F5D042"}}>Date</th>
                    <th class="text-center" style={{backgroundColor: "#0A174E",color: "#F5D042"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
       </div>
    )
}
export default TravelBookingList;