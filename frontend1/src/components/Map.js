import {Link} from "react-router-dom";
function Map(){
    return(
        
        <div>
            <nav class="navbar bg-dark">
            <Link  to="/" class="navbar-brand mx-3" style={{color:"white"}}>Online hotal management System</Link>
             <div class="nav">
           
            <Link to="/create-travelbooking" class="nav-link" style={{color:"white"}}>back</Link>
        </div>
     </nav> 
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124452.18612864653!2d79.11834234999999!3d12.89930875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa68ffb%3A0xbedda6917d262b5e!2sVellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1706176473282!5m2!1sen!2sin" width="1400" height="650" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}
export default Map;