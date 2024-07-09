import Axios from "axios";
import {useEffect,useState} from "react"; 
import FoodOrderListRow from "./FoodOrderListRow";
import {Link} from "react-router-dom";
function FoodOrderList(){
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/FoodOrderRoute/")
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
            return <FoodOrderListRow obj={val}/>

        })
    }
    //https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg&ga=GA1.1.1222169770.1702339200&semt=sph
     const backgroundImageUrl ="https://media.istockphoto.com/id/1454696345/photo/beautiful-bright-background-image-of-a-nature-sketch-in-a-meadow-in-early-summer.webp?b=1&s=170667a&w=0&k=20&c=TlagtfXIZ1SC-AlRvBawQJ2ij3vehlFZXKZV1uEfvYM=";
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height:"100vh"
      };
    return(

       <div style={containerStyle}>
                <nav class="navbar bg-dark">
<Link  to="/" class="navbar-brand mx-3"style={{color:"white"}}>Online hotel management System</Link>
<div class="nav">
<Link to="/admin-page" class="nav-link" style={{color:"white"}}>back</Link>
</div>
</nav>
         <table class="table table-bordered table-striped"  style={{margin:"5px"}} >
            <thead >
                <tr>
                    <th class="text-center"  style={{backgroundColor: "#603F83",color: "#C7D3D4"}}>Name</th>
                    <th class="text-center"  style={{backgroundColor: "#603F83",color: "#C7D3D4"}}>Email</th>
                    <th class="text-center"  style={{backgroundColor: "#603F83",color: "#C7D3D4"}}>Phoneno</th>
                    <th class="text-center" style={{backgroundColor: "#603F83",color: "#C7D3D4"}}>Food</th>
                    <th class="text-center" style={{backgroundColor: "#603F83",color: "#C7D3D4"}}>Members</th>
                    <th class="text-center" style={{backgroundColor: "#603F83",color: "#C7D3D4"}}>Action</th>
                   
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
       </div>
    )
}
export default FoodOrderList;