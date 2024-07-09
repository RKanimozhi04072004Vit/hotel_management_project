import {Link} from "react-router-dom";
function Nav()
{
    
return(

<nav class="navbar bg-warning">
<Link  to="/" class="navbar-brand mx-3">Online hotal management System</Link>
<div class="nav">
<Link to="/admin-page" class="nav-link">Admin</Link>
<Link to="/create-room" class="nav-link">Book Room</Link>
<Link to="/room-list" class="nav-link">Room List</Link>
<Link to="/create-user" class="nav-link">User Contact</Link>
<Link to="/contact-list" class="nav-link">Contact
List</Link>
</div>
</nav>

)
}
export default Nav;

// mongodb+srv://test:<password>@cluster0.2np1z6v.mongodb.net/

//mongodb+srv://test:<password>@cluster0.2np1z6v.mongodb.net/