import {Link} from "react-router-dom";
function Home()
{
    //https://saalthotels.com/saalt@/imgs/18122021istockphoto-472899538-170667a.jpg
    const backgroundImageUrl = "https://c4.wallpaperflare.com/wallpaper/20/164/15/booking-best-hotels-bangkok-tourism-wallpaper-preview.jpg";
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
<Link to="/admin" class="nav-link" style={{color:"white"}}>Admin</Link>
<Link to="/available-room" class="nav-link" style={{color:"white"}}>Book Room</Link>
<Link to="/available-food" class="nav-link" style={{color:"white"}}>Food Order</Link>
<Link to="/available-travel" class="nav-link" style={{color:"white"}}>Travel booking</Link>
{/* <Link to="/create-travelbooking" class="nav-link" style={{color:"white"}}>Book Travel</Link> */}
<Link to="/create-rating" class="nav-link" style={{color:"white"}}>Feedback</Link>
{/* <Link to="/create-eduroom" class="nav-link" style={{color:"white"}}>Education</Link> */}
<Link to="/rating-review" class="nav-link" style={{color:"white"}}> User Feedback</Link>
<Link to="/create-user" class="nav-link" style={{color:"white"}}>Contact</Link>
<Link to="/about" class="nav-link" style={{color:"white"}}>Logout</Link> 
</div>

</nav>

</div>

)
}
export default Home;