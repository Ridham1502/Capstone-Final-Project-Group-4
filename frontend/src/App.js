import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AdminNavbar from './components/navbar/AdminNavbar';
import MovieList from './components/MovieList/MovieList';
import AddMovie from './components/Admin/AddMovie';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/Profile/Profile';
import AdminLogin from './components/auth/AdminLogin';
import MovieDetails from './components/MovieList/MovieDetails';
import AdminDashboard from './components/Admin/AdminDashboard';
import UserList from './components/Admin/UserList';
import { Toaster } from 'react-hot-toast';
import BookTicket from './components/MovieList/BookTicket';
import FoodAdd from './components/Admin/AddFood';
import Booking from './components/Admin/Booking';
import FoodList from './components/Admin/FoodList';
import HomePage from './components/HomePage/HomePage';
import AboutUs from './components/Aboutus/Aboutus';
import Confirmation from './components/MovieList/Confirmation';
import ContactUsPage from './components/ContactUsPage/ContactUsPage';
import FAQPage from './components/FAQ/FAQPage';


function App() {
  return (
    <Router>
      <div>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie" element={<MovieList />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/loginadmin" element={<AdminLogin />} />
          <Route path="/moviedetails" element={<MovieDetails />} />
          <Route path="/bookticket" element={<BookTicket />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/faqpage" element={<FAQPage />} />
          <Route path="/admin/*" element={<AdminDashboard />}>
            <Route index element={<h3>Welcome to Admin Dashboard</h3>} />
            <Route path="addmovie" element={<AddMovie />} />
            <Route path="userlist" element={<UserList />} />
            <Route path="foodadd" element={<FoodAdd />} />
            <Route path="bookinglist" element={<Booking />} />
            <Route path="foodlist" element={<FoodList />} />
          </Route>
        
        </Routes>
        <FooterConditional />
        <Toaster />
      </div>
    </Router>
  );
}

function MainNavigation() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return isAdminRoute ? <AdminNavbar /> : <Navbar />;
}

function FooterConditional() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  return !isAdminRoute ? <Footer /> : null;
}

export default App;