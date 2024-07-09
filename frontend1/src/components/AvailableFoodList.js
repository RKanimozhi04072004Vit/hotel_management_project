

import Axios from "axios";
import { useEffect, useState } from "react";
import AvailableFoods from "./AvailableFoods";
import { Link } from "react-router-dom";

function AvailableFoodList() {
  const [arr, setArr] = useState([]);
  const [filterfood, setFilterfood] = useState("");
  const [filterfoodType, setFilterfoodType] = useState("");
  const [filterfoodTime, setFilterfoodTime] = useState("");


  useEffect(() => {
    Axios.get("http://localhost:4000/FoodRoute/")
      .then((res) => {
        if (res.status === 200) setArr(res.data);
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  const filteredRooms = arr.filter((val) => {
    const foodMatch = val.food && val.food.toLowerCase().includes(filterfood.toLowerCase());
    // const roomClassMatch = val.roomClass && val.roomClass.toLowerCase() === filterRoomClass.toLowerCase();

    const foodTypeMatch = val.foodType && val.foodType.toLowerCase().includes(filterfoodType.toLowerCase());
    const foodTimeMatch = val.foodTime && val.foodTime.toLowerCase().includes(filterfoodTime.toLowerCase());
   

    return foodMatch && foodTypeMatch && foodTimeMatch;
});

 
  
  const resetFilters = () => {
    setFilterfood("");
    setFilterfoodType("");
    setFilterfoodTime("");
   
  };

  const ListItems = () => {
    return filteredRooms.map((val, ind) => {
      return <AvailableFoods obj={val} key={ind} />;
    });
  };
//
  const backgroundImageUrl =
    "https://im.whatshot.in/img/2020/Apr/41215842-2062970037054645-8180165235601047552-o-baan-tao-cropped-1586780385.jpg";
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
      
     
         {/* <input
    type="text"
    placeholder="Filter by room type..."
    value={filterfood}
    onChange={(e) => setFilterfood(e.target.value)}
    style={{ margin: "10px", borderRadius: "5px", border: "2px solid black" }}
  />  */}
 <select
  value={filterfood}
  onChange={(e) => setFilterfood(e.target.value)}
  style={{ margin: "10px", borderRadius: "5px", border: "2px solid black" }}
> 
  <option value=""> Food </option>
  <option value="idly">Idly</option>
  <option value="samosa">Samosa</option>
  <option value="dosa">Dosa</option>
  <option value="poori">Poori</option>
  <option value="sadham">Sadham</option>
 
</select>
<select
  value={filterfoodType}
  onChange={(e) => setFilterfoodType(e.target.value)}
  style={{ margin: "10px", borderRadius: "5px", border: "2px solid black" }}
>
  <option value="">Food Type</option>
  <option value="veg">veg</option>
  <option value="non veg">non veg</option>
  
</select>


  <select
    value={filterfoodTime}
    onChange={(e) => setFilterfoodTime(e.target.value)}
    style={{ margin: "10px", borderRadius: "5px", border: "2px solid black" }}
  >
    <option value="">Food Time</option>
    <option value="breakfast">BreakFast</option>
    <option value="Lanch">Lanch</option>
    <option value="dinner">Dinner</option>
    
  </select>
  
        
        <button class="btn btn-primary"onClick={resetFilters} style={{ margin: "10px" ,borderRadius:"5px"}}>
          Show All Foods
        </button>
      </div>
      <div className="d-flex flex-wrap">{ListItems()}</div>
      </div>
    
  );
}

export default AvailableFoodList;