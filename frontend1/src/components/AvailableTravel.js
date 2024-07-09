

import Axios from "axios";
import { useEffect, useState } from "react";
import AvailableTravelList from "./AvailableTravelList";
import { Link } from "react-router-dom";

function AvailableTravel() {
  const [arr, setArr] = useState([]);
  const [filterVehicleName, setFilterVehicleName] = useState("");


  useEffect(() => {
    Axios.get("http://localhost:4000/TravelRoute/")
      .then((res) => {
        if (res.status === 200) setArr(res.data);
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  const filteredTravels = arr.filter((val) => {
    const VehiclenameMatch = val.VehicleName && val.VehicleName.toLowerCase().includes(filterVehicleName.toLowerCase());
   

    return VehiclenameMatch ;
});

 
  
  const resetFilters = () => {
    setFilterVehicleName("");
   
   
  };

  const ListItems = () => {
    return filteredTravels.map((val, ind) => {
      return <AvailableTravelList obj={val} key={ind} />;
    });
  };
//
  // const backgroundImageUrl =
  //   "https://www.travelbookingagent.in/blog/images/blog-2.jpg";
  // const containerStyle = {
  //   backgroundImage: `url(${backgroundImageUrl})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   height: "100vh",
  // };

  return (
    <div>
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
  value={filterVehicleName}
  onChange={(e) => setFilterVehicleName(e.target.value)}
  style={{ margin: "10px", borderRadius: "5px", border: "2px solid black" }}
> 
  <option value=""> Vehicle Name</option>
  <option value="maruthi">Maruthi</option>
  <option value="sedan">Sedan</option>
  <option value="auv">Suv</option>
  
</select>

  
        
        <button class="btn btn-primary"onClick={resetFilters} style={{ margin: "10px" ,borderRadius:"5px"}}>
          Show All Vehicle Name
        </button>
      </div>
      <div >{ListItems()}</div>
      </div>
    
  );
}

export default AvailableTravel;