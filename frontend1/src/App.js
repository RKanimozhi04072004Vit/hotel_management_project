import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import CreateUserMsg from './components/CreateUserMsg';
import CreateReviewRating from './components/CreateReviewRating';
import ReviewRatingList from './components/ReviewRatingList';
import ContactList from './components/ContactList';
import Admin from './components/Admin';
import CreateBookroom from './components/CreateBookroom';
  import Bookroom from './components/Bookroom';
import BookroomList from './components/BookroomList';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import AdminPage from './components/AdminPage';
import Addrooms from './components/Addrooms';
import AddRoomList from './components/AddRoomList';
import EditRooms from './components/EditRooms';
import AvailableRoomList from './components/AvailableRoomList';
import RoomFilter from './components/RoomFilter';
import AddFood from './components/AddFood';
import FoodList from './components/FoodList';
import EditFood from './components/EditFood';
import AvailableFoodList from './components/AvailableFoodList';
import CreateFood from './components/CreateFood';
import FoodOrder from './components/FoodOrder';
import FoodOrderList from './components/FoodOrderList';
import UserReviewRatingList from './components/UserReviewRatingList';
import EditTravel from './components/EditTravel';
import CreateTravel from './components/CreateTravel';
import TravelList from './components/TravelList';
import AvailableTravel from './components/AvailableTravel'
import About from './components/About';
import CreateTravelBooking from './components/CreateTravelBooking';
import TravelBookingList from './components/TravelBookingList';
import CreateeducationBookRoom from './components/CreateeducationBookRoom';
import EducationBookRoomList from './components/EducationBookRoomList';
import FirstPage from './components/FirstPage';
import Map from './components/Map';


function App() {
return (
<div class="">
<HashRouter>
{/* <Nav /> */}

<Routes>

<Route path="/signup" element={<Signup />} />
<Route path="/admin" element={<Admin />} />
<Route path="/Bookroom" element={<Bookroom/>}/>
<Route path="/FoodOrder" element={<FoodOrder/>}/>
<Route path="/create-user" element={<CreateUserMsg />} />
<Route path="/create-rating" element={<CreateReviewRating />}/>
<Route path="/create-room" element={<CreateBookroom />} />
<Route path="/create-food" element={<CreateFood />} />
<Route path="/contact-list" element={<ContactList />} />
<Route path="/rating-list" element={<ReviewRatingList />}/>
<Route path="/room-list" element={<BookroomList />} />
<Route path="/foodOrder-list" element={<FoodOrderList />} />
<Route path="/register" element={<Signup />} />
<Route path="/login" element={<Login />} />
<Route path="/home" element={<Home />} />
<Route path="/logout" element={<Home />} />
<Route path="/admin-page" element={<AdminPage />} />
<Route path="/add-rooms" element={<Addrooms />} />
<Route path="/add-room" element={<AddRoomList />} />
<Route path="/update-addroom/:id" element={<EditRooms />} />
{/* <Route path="/update-addroomrating/:id" element={<Ratings />} /> */}
<Route path="/available-room" element={<AvailableRoomList />} />
<Route path="/room-filter" element={<RoomFilter />} />
<Route path="/add-food" element={<AddFood />} />
<Route path="/create-travel" element={<CreateTravel />} />
<Route path="/update-food/:id" element={<EditFood />} />
<Route path="/update-travel/:id" element={<EditTravel />} />
<Route path="/food-list" element={<FoodList />} />
<Route path="/travel-list" element={<TravelList />} />
<Route path="/available-food" element={<AvailableFoodList />} />
<Route path="/rating-review" element={<UserReviewRatingList />} />
<Route path="/about" element={<About />} />
<Route path="/available-travel" element={<AvailableTravel/>} />
<Route path="/travelbooking-list" element={<TravelBookingList />} />
<Route path="/create-travelbooking" element={<CreateTravelBooking />} />
<Route path="/create-eduroom" element={<CreateeducationBookRoom />} />
<Route path="/edubook-list" element={<EducationBookRoomList />} /> 
 <Route path="/" element={<FirstPage />} />
<Route path="/map" element={<Map />} />
</Routes> 
</HashRouter>
</div>
);
}
export default App;