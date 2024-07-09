import Axios from "axios";
import {useEffect,useState} from "react"; 
import BookroomListRow from "./BookroomListRow";
import {Link} from "react-router-dom";
function BookroomList(){
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/roomRoute/")
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
            return <BookroomListRow obj={val}/>

        })
    }
    return(

       <div>
                <nav class="navbar bg-dark">
<Link  to="/" class="navbar-brand mx-3"style={{color:"white"}}>Online hotel management System</Link>
<div class="nav">
<Link to="/admin-page" class="nav-link" style={{color:"white"}}>back</Link>
</div>
</nav>
         <table class="table table-bordered table-striped"  style={{margin:"5px"}} >
            <thead >
                <tr>
                    <th class="text-center"  style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>Name</th>
                    <th class="text-center"  style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>Email</th>
                    <th class="text-center"  style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>DOB</th>
                    <th class="text-center"  style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>Phoneno</th>
                    <th class="text-center"  style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>address</th>
                    <th class="text-center" style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>Room Type</th>
                    <th class="text-center" style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>No of Rooms</th>
                    {/* <th class="text-center" style={{backgroundColor:"#00203F",color:"#ADEFD1"}}>Time</th> */}
                    {/* <th class="text-center" style={{backgroundColor:"#00203F",color:"#ADEFD1"}}>Date</th> */}
                    <th class="text-center" style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>check-out-date</th>
                    <th class="text-center" style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>Status</th>
                    <th class="text-center" style={{backgroundColor: "#00203F",color: "#ADEFD1"}}>Approved</th>
                    
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
export default BookroomList;