import {Link} from "react-router-dom";
function FirstPage(){
     const backgroundImageUrl =
    "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0yMjJiYXRjaDUta3VsLTAzLmpwZw.jpg";
  const containerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
  };

    return(
        // https://png.pngtree.com/thumb_back/fh260/background/20210804/pngtree-modern-simple-elegant-beautiful-color-website-landing-page-background-image_757350.jpg
        <div>
             <nav class="navbar bg-info">
<Link  to="/" class="navbar-brand mx-3" style={{color:"black"}}>Online hotel management System</Link>
<div class="nav">
<button class="btn btn-warning"><Link to="/signup" class="nav-link" style={{color:"black"}}>Register</Link></button>
</div>
</nav>
          <div style={containerStyle}>
            <h1 style={{color:"navy-blue",textAlign:"center",fontFamily:"Futura® Now"}}>Royal Resort</h1>
          <h1 style={{color:"purple",textAlign:"center"}}>Welcome to our Hotel</h1>
            {/* <h2 style={{textDecoration: 'underline'}}>Facilities of Our Hotel</h2> */}
            {/* <p style={{color:"red",fontStyle:"bold",fontSize:"20px"}}>Great facilities! </p> */}
            <marquee style={{fontSize:"20px",color:"brown"}}>Experience is a life time of moments with just one visit !! Relax! Recharge!! Reconnect!!!</marquee>
           <div>
           <img style={{width:"1400px",height:"400px"}} src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9" />
        
          
         
           
           </div >
            <h3 style={{textDecoration: 'underline'}}>Most popular facilities</h3>
           <div class="d-flex">
           <p style={{backgroundColor:"blue",color:"white",width:"200px",padding:"15px",borderRadius:"5px",marginLeft:"-10px"}}>Room Service</p>
            <p style={{backgroundColor:"pink",width:"200px",padding:"15px",borderRadius:"5px",marginLeft:"-10px"}}>Restaurant</p>
            <p style={{backgroundColor:"orange",width:"200px",padding:"15px",borderRadius:"5px",marginLeft:"-10px"}}>Non-smoking rooms</p>
            <p style={{backgroundColor:"yellow",width:"200px",padding:"15px",borderRadius:"5px",marginLeft:"-10px"}}>Tea/coffee maker in all rooms</p>
            <p style={{backgroundColor:"lightgreen",width:"200px",padding:"15px",borderRadius:"5px",marginLeft:"-10px"}}>Good BreakFast,launch,dinner</p>
            <p style={{backgroundColor:"skyblue",width:"200px",padding:"15px",borderRadius:"5px",marginLeft:"-10px"}}>Discount offer Food,Room</p>
            <p style={{backgroundColor:"purple",color:"white",width:"200px",padding:"15px",borderRadius:"5px",marginLeft:"-10px"}}>Travels</p>

           </div>
          <div class="d-flex">
            <div class="p-3">
            <h4>Safety & Security</h4>
           <p>Fire extinguishers</p>
           <p >CCTV outside property</p>
           <p>CCTV in common areas</p>
           <p>Smoke alarms</p>
           <p>Security alarm</p>
           <p>Key card access</p>
           <p>24-hour security</p>
           <h4>Entertainment and family services</h4>
                <p>Babysitting/child services (Additional charge)</p>
            </div>
            <div class="p-3">
            <h4>Pets</h4>
           <p>Pets are allowed on request. Charges may be applicable.</p>
           <h4>Cleaning services</h4>
           <p>Daily housekeeping</p>
           <p >Trouser press (Additional charge)</p>
           <p>Ironing service (Additional charge)</p>
           <p>Dry cleaning (Additional charge)</p>
           <p>Laundry (Additional charge)</p>
           
            </div>
            <div class="p-3">
                <h4>Food & Drink</h4>
                <p>Breakfast in the room</p>
                <p>Restaurant</p>
                <p>Tea/Coffee maker</p>
                <p>100% Pure Drink</p>
                <p>Lanuch,dinner</p> 
                <p>Discount offers</p>
                <h4>Accessibility</h4>
                <p>Wheelchair accessible</p>
            </div>
            <div class="p-3">
                <h4>Internet</h4>
                <p>WiFi is available in all areas and is free of charge.</p>
                <h4>Parking</h4>
                <p>Free private parking is possible on site (reservation is not needed).</p>
                <h4>Languages spoken</h4>
                <p>Tamil</p>
                <p>English</p>
            </div>
           
            

          </div>
          <div class="p-3">
            <h2 style={{textDecoration: 'underline'}}>Rules</h2>
            <table class="table table-bordered">
                <tr>
                    <td>Check-in</td>
                    <td  style={{padding:"5px"}}>
                    From 12:00
                        {/* <p >From 14:00</p> */}
                        {/* <p>Guests are required to show a photo identification and credit card upon check-in</p> */}
                        
                        </td>
                </tr>
                <tr>
                    <td class="p-3">Check-out </td>
                    <td>Until 12:00</td>
                </tr>
                <tr>
                    <td class="p-3">No age restriction</td>
                    <td>There is no age requirement for check-in</td>
                </tr>
                <tr>
                    <td class="p-3">Pets</td>
                    <td>Pets are allowed on request. Charges may be applicable.</td>
                </tr>
                <tr>
                    <td class="p-3">Discount</td>
                    <td>
When booking more than 5 rooms, different policies and additional supplements may apply.</td>
                </tr>
                <tr>
                    <td class="p-3">Accepted payment methods</td>
                    <td >
    <img style={{width:"100px",height:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpVlg8bLU93vgSRCpR1oTgWpGyJaUQATWVTnMgz5kCmA&s" alt="master card" />
    <img style={{width:"100px",height:"100px"}} src="https://t3.ftcdn.net/jpg/01/40/84/92/360_F_140849267_9sH8Dfzgx7G0iJMj2uRtbfcfHBLrB8JA.jpg" alt="Cash" />
    <img style={{width:"100px",height:"100px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeMrvKHR8tkLkVjH1A3ELnZAOZ9TwugfD9fsibO6XUKQ&s" alt="American Express" />
    <img style={{width:"100px",height:"100px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JCB_logo.svg/1280px-JCB_logo.svg.png" alt="JCB" />
    <img style={{width:"100px",height:"100px"}} src="https://logowik.com/content/uploads/images/visa-payment-card1873.jpg" alt="Visa Credit Card Logo" />
</td>

                </tr>
            </table>
          </div>

          </div>
        </div>
    )
}
export default FirstPage;