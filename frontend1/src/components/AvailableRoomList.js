

import Axios from "axios";
import { useEffect, useState } from "react";
import AvailableRooms from "./AvailableRooms";
import { Link } from "react-router-dom";

function AvailableRoomList() {
  const [arr, setArr] = useState([]);
  const [filterRoomClass, setFilterRoomClass] = useState("");
  const [filterRoomType, setFilterRoomType] = useState("");
  const [filterNoOfRooms, setFilterNoOfRooms] = useState("");
  const [filterCost, setFilterCost] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:4000/addRoomRoute/")
      .then((res) => {
        if (res.status === 200) setArr(res.data);
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

 

  const filteredRooms = arr.filter((val) => {
    const roomClassMatch = val.roomClass && val.roomClass.toLowerCase().includes(filterRoomClass.toLowerCase());
    // const roomClassMatch = val.roomClass && val.roomClass.toLowerCase() === filterRoomClass.toLowerCase();

    const roomTypeMatch = val.roomType && val.roomType.toLowerCase().includes(filterRoomType.toLowerCase());
    const noOfRoomsMatch = filterNoOfRooms === "" || (val.NoOfRooms && val.NoOfRooms === parseInt(filterNoOfRooms));
    const costMatch = filterCost === "" || (val.cost && val.cost === parseInt(filterCost));

    return roomClassMatch && roomTypeMatch && noOfRoomsMatch && costMatch;
});

 
  
  const resetFilters = () => {
    setFilterRoomClass("");
    setFilterRoomType("");
    setFilterNoOfRooms("");
    setFilterCost("");
  };

  const ListItems = () => {
    return filteredRooms.map((val, ind) => {
      return <AvailableRooms obj={val} key={ind} />;
    });
  };

  const backgroundImageUrl =
    "https://e1.pxfuel.com/desktop-wallpaper/414/513/desktop-wallpaper-colours-plain-backgrounds-web-1920x1024-for-your-mobile-tablet-plain-design.jpg";
  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };

  return (
    <div style={containerStyle}>
      <nav className="navbar bg-dark">
        <Link to="/" className="navbar-brand mx-3" style={{ color: "white" }}>
          Online hotel management System
        </Link>
        <div className="nav">
       
          <Link to="/home" className="nav-link" style={{ color: "white" }}>
            back
          </Link>
        </div>
      </nav>
     
      <div className="filters" >
      
     
       
<select
  value={filterRoomClass}
  onChange={(e) => setFilterRoomClass(e.target.value)}
  style={{ margin: "10px", borderRadius: "5px", border: "2px solid black" }}
>
  <option value="">Room Class</option>
  <option value="Classic">Classic</option>
  <option value="Economic">Economic</option>
  <option value="Executive">Executive</option>
  <option value="Premium">Premium</option>
  <option value="Executive Premium">Executive Premium</option>
  <option value="Deluxe">Deluxe</option>
</select>


  <select
    value={filterRoomType}
    onChange={(e) => setFilterRoomType(e.target.value)}
    style={{ margin: "10px", borderRadius: "5px", border: "2px solid black" }}
  >
    <option value="">Room Types</option>
    <option value="single">Single Room</option>
    <option value="double">Double Room</option>
    <option value="suite">Suite Room</option>
    <option value="luxury">Luxury Room</option>
  </select>
 
        {/* <input
          type="text"
          placeholder="Filter by number of rooms..."
          value={filterNoOfRooms}
          onChange={(e) => setFilterNoOfRooms(e.target.value)}
          style={{ margin: "10px",borderRadius:"5px",border:"2px solid black" }}
        />
         <input
          type="text"
          placeholder="Filter by cost..."
          value={filterCost}
          onChange={(e) => setFilterCost(e.target.value)}
          style={{ margin: "10px" ,borderRadius:"5px",border:"2px solid black"}}
        /> */}
        <button class="btn btn-primary"onClick={resetFilters} style={{ margin: "10px" ,borderRadius:"5px"}}>
          Show All Rooms
        </button>
      </div>
      <div className="d-flex flex-wrap">{ListItems()}</div>
      </div>
    
  );
}

export default AvailableRoomList;
