import {Link} from "react-router-dom";
function About(){
    //https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-EXg_v1wIInv_dvOv6RkXuYxcPJiBGZgXjq2JFhZMw&s
    //https://image.slidesdocs.com/responsive-images/background/fresh-flowers-beautiful-bright-flower-white-nature-powerpoint-background_175b62a2f9__960_540.jpg
    const backgroundImageUrl ="https://image.slidesdocs.com/responsive-images/background/fresh-flowers-beautiful-bright-flower-white-nature-powerpoint-background_175b62a2f9__960_540.jpg";
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
<Link to="/home" class="nav-link" style={{color:"white"}}>Go to website</Link> 
<Link to="/" class="nav-link" style={{color:"white"}}>Logout</Link> 
</div>

</nav>
            <h1 style={{fontFamily:"cursive",justifyContent:"center",alignItems:"center",marginLeft:"100px",color:"#FC46AA"}}>There's no place like home,except for a great hotel!</h1>
         <div style={{display:"flex"}}>
         <p style={{marginLeft:"100px",fontFamily:"sans-serif",color:"black"}} class="circle">Rooms and Foods have discount offer</p>
           <ul >
         <li > <div style={{width:"680px"}}>
          <p style={{marginTop:"20px",marginLeft:"10px",color:"#808080",fontWeight:"bold"}}  >Experience the convenience of our online hotal management system,where your comfort and satisfication are our priorities</p>
          </div></li>
          <li><div style={{width:"680px"}}>
          <p style={{marginTop:"20px",marginLeft:"10px",color:"#808080",fontWeight:"bold"}}>Our user-friendly web page offers seamless navigation to facilitate feedback submission,room bookings,and food orders</p>
          </div></li>
         <li> <div style={{width:"680px"}}>
          <p style={{marginTop:"20px",marginLeft:"10px",color:"#808080",fontWeight:"bold"}}>Enjoy the added benefit of discounts on food orders,making your dinning experience even more delightful.</p>
          </div></li>
          <li>
          <div style={{width:"680px"}}>
          <p style={{marginTop:"20px",marginLeft:"10px",color:"#808080",fontWeight:"bold"}}>Additionally,for groups booking rooms with more than five members,we're thrilled to offer an exclusive 10% discount,making your stay both enjoyable and affordable.</p>
          </div>
          </li>
           </ul>
          
         </div>
         <div class="card" style={{marginLeft:"90px",marginTop:"-100px"}}>
            <div class="img">
               <p style={{width:"200px",height:"100px",borderRadius:"15px"}}></p>
            </div>
            <div >
            <h4 style={{color:"purple"}}>Welcome to our hotel!..</h4>
            <p style={{marginLeft:"150px",color:"green",fontWeight:"bold"}}>Enjoy</p>
            </div>
         </div>
        </div>
    )
 }
export default About;