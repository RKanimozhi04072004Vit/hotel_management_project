

import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function Bookroom(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setdob] = useState(props.dobValue);
  const [phoneno, setphoneno] = useState(props.phonenoValue);
  const [address, setaddress] = useState(props.addressValue);
  const [NoRooms, setNoRooms] = useState(props.NoRoomsValue);
  const [beddingType,setbeddingType]=useState("props.beddingTypeValue");
  const [checkDate, setCheckDate] = useState(props.checkDateValue);
  const [TotalCost, setTotalCost] = useState(0);
  const [discountMessage, setDiscountMessage] = useState('');
  
  useEffect(()=>{
    const email=localStorage.getItem('email');
    const name=localStorage.getItem('name');
    setName(name)
    setEmail(email)
},[])
 

  const arr = [name, email, dob, phoneno, address,beddingType, NoRooms, checkDate];

  const handleClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    console.log("Current Time:", currentTime);
    props.getState(arr);

    // Checking if the number of rooms is greater than 5
    if (NoRooms > 5) {
      const discountedCost = 0.9 * (NoRooms * props.costValue); // Calculating 10% discount
      setTotalCost(discountedCost);
      setDiscountMessage('Congratulations! You get a 10% discount on your booking!');
    } else {
      setTotalCost(NoRooms * props.costValue);
      setDiscountMessage('');
    }
  };

  const handleNoOfRoomsChange = (event) => {
    const NoRoomsValue = event.target.value;
    setNoRooms(NoRoomsValue);
  };

  return (
    <div style={{ backgroundImage: `url(https://i.pinimg.com/550x/d0/07/aa/d007aad6768ce25351e3eeb823437756.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
      <nav className="navbar bg-dark">
        <Link to="/" className="navbar-brand mx-3" style={{ color: 'white' }}>
          Online Hotel Management System
        </Link>
        <div className="nav">
        <Link to="/create-eduroom" className="nav-link" style={{ color: "white" }}>
          <button class="btn btn-primary"> Education</button>
          </Link>
          <Link to="/home" className="nav-link" style={{ color: 'white' }}>
            back
          </Link>
        </div>
      </nav>
      <div style={{ maxWidth: '40%', margin: '0px auto' }}>
      <label htmlFor="name" style={{color:"black"}}>Name:</label>
        <input id="name" type="text" value={name} class="form-control my-3" placeholder="Enter your name" required readOnly/>
        <label htmlFor="email" style={{color:"black"}}>Email:</label>
        <input id="email" type="text"  value={email} class="form-control my-3" placeholder="Enter your email" required readOnly/>
        <label htmlFor="dob" style={{color:"black"}}>DOB:</label>
         <input id="dob" type="date" value={dob} defaultValue={props.dobValue} onChange={(event) => setdob(event.target.value)}class="form-control my-3" placeholder="Enter your DOB" required/>
       
        <label htmlFor="phoneno" style={{color:"black"}}>PhoneNumber:</label>
        <input id="phoneno" type="number" size="10" defaultValue={props.phonenoValue} onChange={(event) => setphoneno(event.target.value)} class="form-control my-3" placeholder="Enter your Phoneno" required/>
        <label htmlFor="address" style={{color:"black"}}>Address:</label>
        <input id="address" type="text" defaultValue={props.addressValue} onChange={(event) => setaddress(event.target.value)} class="form-control my-3" placeholder="Enter your address"required />
        <label htmlFor="beddingType" style={{color:"black"}}>Room Type:</label>
        <select id="beddingType" type="text" defaultValue={props.beddingTypeValue} onChange={(event) => setbeddingType(event.target.value)} class="form-control my-3" placeholder="Select Room Type you have choosed" required>
        <option value="Select Bedding Type">Select Room Type you have choosed</option>
         <option value="Single">Single</option>
         <option value="Double">Double</option>
         <option value="Triple">luxury</option>
         <option value="Quad">Suite</option>
        </select>
        <label htmlFor="room" style={{ color: 'black' }}>No of Rooms:</label>
          <input
            id="room"
            type="number"
            value={NoRooms}
            onChange={handleNoOfRoomsChange}
            className="form-control my-3"
            placeholder="Enter your No of Rooms"
          />
          <span style={{ color: 'red', fontSize: '14px' ,fontStyle:"bold"}}>{discountMessage}</span>
       
        <div>
        <label htmlFor="checkDate" style={{color:"black"}}>Check-out-date:</label>
        <input
          id="checkDate"
          type="date"
          defaultValue={props.checkDateValue}
          onChange={(event) => setCheckDate(event.target.value)}
          className="form-control my-3"
          placeholder="check-in-Date" required
        />
          </div>
        <button onClick={handleClick} className="btn btn-success my-3 d-block mx-auto" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Bookroom;



