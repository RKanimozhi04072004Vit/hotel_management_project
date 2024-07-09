import Axios from "axios";
import {useEffect,useState} from "react"; 
import AddroomListRow from "./AddroomListRow";
import {Link} from "react-router-dom";
function AddRoomList(){
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/addRoomRoute/")
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
            return <AddroomListRow obj={val}/>

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
                <th class="text-center" style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>image</th>
                <th classs="text-center" style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>Room Class</th>
                    <th classs="text-center" style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>Room Type</th>
                    <th class="text-center" style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>No Of Rooms</th>
                    <th class="text-center" style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>Cost</th>
                    {/* <th class="text-center" style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>Ratings</th> */}
                    <th class="text-center" style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
       </div>
    )
}
export default AddRoomList;