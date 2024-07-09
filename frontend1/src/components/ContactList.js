import Axios from "axios";
import {useEffect,useState} from "react"; 
import ContactListRow from "./ContactListRow";
import {Link} from "react-router-dom";
function ContactList(){
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/contactRoute/")
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
            return <ContactListRow obj={val}/>

        })
    }
    const backgroundImageUrl ="https://png.pngtree.com/thumb_back/fh260/back_pic/00/01/72/365608ecfdcf73c.jpg";
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height:"100"
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
                    <th classs="text-center" style={{backgroundColor: "#5d576b",color: "#f5f7fa"}}>Name</th>
                    <th class="text-center" style={{backgroundColor: "#5d576b",color: "#f5f7fa"}}>Email</th>
                    <th class="text-center" style={{backgroundColor: "#5d576b",color: "#f5f7fa"}}>Message</th>
                    <th class="text-center" style={{backgroundColor: "#5d576b",color: "#f5f7fa"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
        </div>
    )
}
export default ContactList;