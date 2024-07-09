import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
function TravelBookingDetails(props){
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [phoneno,setphoneno]=useState("props.phonenoValue");
    const [Time,setTime]=useState("props.TimeValue");
    const [VehicleName,setVehicleName]=useState("props.VehicleName");
    const [PickupPlace,setPickupPlace]=useState("props.PickupPlaceVlaue");
    const [DropPlace,setDropPlace]=useState("props.DropPlaceValue");

    useEffect(()=>{
        const email=localStorage.getItem('email');
        const name=localStorage.getItem('name');
        setname(name)
        setemail(email)
    },[])

    useEffect(()=>{
        // setname()
        // setemail()
        setphoneno(props.phonenoValue)
        setTime(props.TimeValue)
        setVehicleName(props.VehicleNameValue)
        setPickupPlace(props.PickupPlaceValue)
        setDropPlace(props.DropPlaceValue)
    },[props.nameValue,props.emailValue,props.phonenoValue,props.TimeValue,props.VehicleNameValue,props.PickupPlaceValue,props.DropPlaceValue]);
    const arr=[name,email,phoneno,Time,VehicleName,PickupPlace,DropPlace];
    const handleClick=()=>{
        props.getState(arr);
    }
     
    return(
        <div >
            <nav class="navbar bg-dark">
            <Link  to="/" class="navbar-brand mx-3" style={{color:"white"}}>Online hotal management System</Link>
             <div class="nav">
            <Link to="/map" class="nav-link" style={{color:"white"}}>Location</Link>
            <Link to="/home" class="nav-link" style={{color:"white"}}>back</Link>
        </div>
     </nav> 
    
         <div style={{ maxWidth: "40%", margin: "0px auto" }}>
          
          <label htmlFor="name" style={{color:"black",fontType:"bold"}}>Name:</label>
          <input id="name" type="text" value={name} class="form-control my-3" placeholder="Enter name" readOnly></input>
          <label htmlFor="email"  style={{color:"black ",fontType:"bold"}}>Email:</label>
          <input id="email" type="text" value={email} class="form-control my-3" placeholder="email" readOnly/>
          <label htmlFor="phoneno" style={{color:"black",fontType:"bold"}}>Phoneno:</label> 
          <input id="phoneno" type="text"  defaultValue={props.phonenoValue} onChange={(event) => setphoneno(event.target.value)}class="form-control my-3" placeholder="Phoneno" />
         <label htmlFor="Time" style={{color:"black",fontType:"bold"}}>Time:</label>
         <input id="Time" type="text" defaultValue={props.TimeValue} onChange={(event) => setTime(event.target.value)} class="form-control my-3" placeholder="Time" />
         <label htmlFor="VehicleName" style={{color:"white",fontType:"bold"}}>Vehicle Name:</label>
         <select id="vehicleName" value={VehicleName} onChange={(event) => setVehicleName(event.target.value)} className="form-control my-3">
       <option value="">Select your Vehicle</option>
        <option value="sedan">Sedan</option>
       <option value="bmw">BMW</option>
       <option value="honda">Honda</option>
       <option value="acura">Acura</option>
       <option value="hyundai">Hyundai</option>
  
</select>

         {/* <input id="Vehicle Name" type="text" defaultValue={props.VehicleNameValue} onChange={(event) => setVehicleName(event.target.value)} class="form-control my-3" placeholder="VehicleName that you have choosed" /> */}
         <label htmlFor="PickupPlace" style={{color:"white",fontType:"bold"}}>Pickup Place:</label>
         {/* <input id="Pickup Place" type="text" defaultValue={props.PickupPlaceValue} onChange={(event) => setPickupPlace(event.target.value)} class="form-control my-3" placeholder="Pickup Place" /> */}
         <select id="Pickup Place" type="text" defaultValue={props.PickupPlaceValue} onChange={(event) => setPickupPlace(event.target.value)} class="form-control my-3">
            <option value="ranipet">Ranipet</option>
            <option value="bagayam">Bagayam</option>
            <option value="prahmapuram">prahmapuram</option>
            <option value="sevur">sevur</option>
            <option value="VIT">VIT</option>
            <option value="fortune park vellore">fortune park vellore</option>
            <option value="arcot">arcat</option>
            <option value="Vallimalai">Vallimalai</option>
            <option value="thiruvalam">thiruvalam</option>
            <option value="gudiyatham">Gudiyatham</option>
            <option value="chittoor">Chittoor</option>
            <option value="New bus stand">New bus stand</option>
            <option value="Old bus stand">Old bus stand</option>
            <option value="Katpadi">Katpadi</option>
            <option value="Periyar Park">Periyar Park</option>
            <option value="kosapet">kosapet</option>
            <option value="saidapet">Saidapet</option>

         </select>
         <label htmlFor="DropPlace" style={{color:"white ",fontType:"bold"}}>Drop Place:</label>
         {/* <input id="DropPlace" type="text" defaultValue={props.DropPlaceValue} onChange={(event) => setDropPlace(event.target.value)} class="form-control my-3" placeholder="Drop Place" /> */}
         
         <select id="DropPlace" type="text" defaultValue={props.DropPlaceValue} onChange={(event) => setDropPlace(event.target.value)} class="form-control my-3">
            <option value="ranipet">Ranipet</option>
            <option value="bagayam">Bagayam</option>
            <option value="prahmapuram">prahmapuram</option>
            <option value="sevur">sevur</option>
            <option value="VIT">VIT</option>
            <option value="fortune park vellore">fortune park vellore</option>
            <option value="arcot">arcat</option>
            <option value="Vallimalai">Vallimalai</option>
            <option value="thiruvalam">thiruvalam</option>
            <option value="gudiyatham">Gudiyatham</option>
            <option value="chittoor">Chittoor</option>
            <option value="New bus stand">New bus stand</option>
            <option value="Old bus stand">Old bus stand</option>
            <option value="Katpadi">Katpadi</option>
            <option value="Periyar Park">Periyar Park</option>
            <option value="kosapet">kosapet</option>
            <option value="saidapet">Saidapet</option>

         </select>
        
       
      
        
         <button  onClick={handleClick} class="btn btn-primary my-3 d-block mx-auto" type="submit">{props.children}</button>
      </div>
      
        </div>
    )
}
export default TravelBookingDetails;