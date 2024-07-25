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

function App() {
  return (
    <Router>
      <div>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/loginadmin" element={<AdminLogin />} />
          <Route path="/moviedetails" element={<MovieDetails />} />
          <Route path="/admin/*" element={<AdminDashboard />}>
            <Route index element={<h3>Welcome to Admin Dashboard</h3>} />
            <Route path="addmovie" element={<AddMovie />} />
            <Route path="userlist" element={<UserList />} />
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
