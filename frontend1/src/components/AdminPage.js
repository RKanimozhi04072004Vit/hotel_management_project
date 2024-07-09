import {Link} from "react-router-dom";
function AdminPage(){
    // https://saalthotels.com/saalt@/imgs/18122021istockphoto-472899538-170667a.jpg
//https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=
const backgroundImageUrl = "https://thumbs.dreamstime.com/b/luxury-hotel-lobby-3245636.jpg";
const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    height:"100vh"
   
  };
    return(
        <div style={containerStyle}>
            <nav class="navbar bg-dark">
            <Link  to="/" class="navbar-brand mx-3" style={{color:"white"}}>Online hotel management System</Link>
             <div class="nav">
            {/* <Link to="/admin-page" class="nav-link">Admin</Link> */}
            <Link to="/add-rooms" class="nav-link" style={{color:"white"}}>Add Rooms</Link>
            <Link to="/add-room" class="nav-link" style={{color:"white"}}>Available Rooms</Link>
            <Link to="/add-food" class="nav-link" style={{color:"white"}}>Add Foods</Link>
            <Link to="/food-list" class="nav-link" style={{color:"white"}}>Available Foods</Link>
            <Link to="/create-travel" class="nav-link" style={{color:"white"}}>Add Travel</Link>
            <Link to="/travel-list" class="nav-link" style={{color:"white"}}>TravelList</Link>
            <Link to="/room-list" class="nav-link" style={{color:"white"}}>Booking List</Link>
            <Link to="/foodOrder-list" class="nav-link" style={{color:"white"}}>FoodOrder Booking List</Link>
            <Link to="/edubook-list"  class="nav-link" style={{color:"white"}}>Education RoomBooking list</Link>
            <Link to="/travelbooking-list" class="nav-link" style={{color:"white"}}>Travel booking list</Link>
            <Link to="/rating-list" class="nav-link" style={{color:"white"}}>Reviews and Ratings</Link>
            <Link to="/contact-list" class="nav-link" style={{color:"white"}}>Message</Link>
            <Link to="/logout" class="nav-link" style={{color:"white"}}>Logout</Link>
        </div>
     </nav>
        </div>
    )
}
export default AdminPage;