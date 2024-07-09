import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
function EducationBookRoom(props){
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [dob,setdob]=useState("props.dobValue");
    const [phoneno,setphoneno]=useState("props.phonenoValue");
    const [address,setaddress]=useState("props.addressValue");
    const [beddingType,setbeddingType]=useState("props.beddingTypeValue");
    const [NoRooms,setNoRooms]=useState("props.NoRoomsValue");
    const [checkDate,setcheckDate]=useState("props.checkDataValue");
    const [status,setstatus]=useState("props.statusValue");
    const [image,setimage]=useState("props.imageValue");

    const [discount,setdiscount]=useState(false);

    useEffect(()=>{
        const email=localStorage.getItem('email');
        const name=localStorage.getItem('name');
        setname(name)
        setemail(email)
    },[])
    const arr=[name,email,dob,phoneno,address,beddingType,NoRooms,checkDate,status,image];
    const handleClick=()=>{
        props.getState(arr);
        setdiscount(true);
    }
    const backgroundImageUrl = "https://live.staticflickr.com/3715/13345540953_2e167aa98d_b.jpg";
    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height:"100%"
      };
    return(
        <div style={containerStyle}>
            <nav class="navbar bg-dark">
                <Link to="/" class="navbar-brand mx-3"  style={{color:"white"}}>Online hotel management System</Link>
                <div class="nav">
                    <Link to="/home" class="nav-link" style={{color:"white"}}>back</Link>
                </div>
            </nav>
            <div style={{maxWidth:"40%",margin:"0px auto"}}>
                {/* {discount && (
                    <div class="discount-offer mt-3 text-center ">
                        <h2 style={{color:"green"}}>10% discount of your booking</h2>
                    </div>
                )} */}
                <label htmlFor="name" style={{color:"black"}}>Name:</label>
                <input id="name" type="text" value={name} class="form-control my-3" placeholder="Enter your name" required readOnly/>
                <label htmlFor="email" style={{color:"black"}}>Email:</label>
                <input id="email" type="text" value={email} class="form-control my-3" placeholder="Enter your email" required readOnly/>
                <label htmlFor="name" style={{color:"black"}}>DOB:</label>
                <input id="dob" type="date" defaultValue={props.dateValue} onChange={(event)=>setdob(event.target.value)} class="form-control my-3" placeholder="Enter your dob" required/>
                <label htmlFor="phoneno" style={{color:"black"}}>Phone No:</label>
                <input id="phoneno" type="text" defaultValue={props.phonenoValue} onChange={(event)=>setphoneno(event.target.value)} class="form-control my-3" placeholder="Enter your PhoneNumber" required/>
                <label htmlFor="address" style={{color:"black"}}>address:</label>
                <input id="address" type="text" defaultValue={props.addressValue} onChange={(event)=>setaddress(event.target.value)} class="form-control my-3" placeholder="Enter your address" required/>
                <label htmlFor="beddingType" style={{color:"black"}}>Room Type:</label>
               
                <select
                    // value={props.selectedOption}
                     onChange={(event) => setbeddingType(event.target.value)}
                     className="form-control my-3"
                >
                <option value="select">Select Room</option>
                <option value="single">Single Room</option>
                <option value="double">Double Room</option>
                 <option value="suite">Suite Room</option>
                <option value="luxury">Luxury Room</option>
               </select>

                <label htmlFor="NoRooms" style={{color:"black"}}>No.Of.Rooms:</label>
                <input id="NoRooms" type="text" defaultValue={props.NoRoomsValue} onChange={(event)=>setNoRooms(event.target.value)} class="form-control my-3" placeholder="Number of Rooms" required/>
                <label htmlFor="checkDate" style={{color:"black"}}>Check out Date:</label>
                <input id="checkDate" type="date" defaultValue={props.checkDateValue} onChange={(event)=>setcheckDate(event.target.value)} class="form-control my-3" placeholder="check out Date" required/>
                <label htmlFor="image"style={{color:"black",fontType:"bold"}} >Proof:</label>
         <input id="image" type="file" size="10" defaultValue={props.imageValue} onChange={(event) => setimage(event.target.files[0].name)}  class="form-control my-3" placeholder="proof upload" />
        <div style={{backgroundColor:"",padding:"5px",borderRadius:"5px"}}>
              {discount && (
                    <div class="discount-offer mt-3 text-center ">
                        <h2 style={{color:"#101820"}}>Congratulations! 25% discount of your booking</h2>
                    </div>
                )}
        </div>
                <button class="btn btn-success my-3 d-block mx-auto" onClick={handleClick}>Submit</button>
               
    
            </div>

        </div>
    )
}
export default EducationBookRoom;