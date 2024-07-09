import Axios from "axios";
// import {Link} from "react-router-dom";
import Swal from "sweetalert2";
function ContactListRow(props){
    const {_id,Name,Email,Message}=props.obj;
    const handleClick=()=>{
        Axios.delete("http://localhost:4000/contactRoute/delete-user/"+_id)
        .then((res)=>{
            if(res.status===200){
                // alert("Record deleted successfully");
                Swal.fire({
                    icon:"success",
                    title:"Record Deleted",
                    text:"The record has been deleted successfully",
                    customClass:{
                        container:"my-swal",
                        title:"my-title",
                        popup:"my-popup",
                    },
                }).then(()=>{
                    window.location.reload();
                });
                // window.location.reload();
            }
            else
            Promise.reject();
        })
        // .catch((err)=>alert(err));
        .catch((err)=>{
            Swal.fire({
                icon:"success",
                title:"Record Deleted",
                text:"The record has been deleted successfully",
                customClass:{
                    container:"my-swal",
                    title:"my-title",
                    popup:"my-popup",
                },
            })
        })
    }
    return(
        <tr>
            <td style={{backgroundColor: "#d496a7",color: "#2e4052"}}>{Name}</td>
            <td style={{backgroundColor: "#d496a7",color: "#2e4052"}}>{Email}</td>
            <td style={{backgroundColor: "#d496a7",color: "#2e4052"}}>{Message}</td>
            <td style={{backgroundColor: "#d496a7",color: "#2e4052"}}>
                <button onClick={handleClick} class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}
export default ContactListRow;