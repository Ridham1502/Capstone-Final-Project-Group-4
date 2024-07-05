import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
// import MovieDetails from './components/MovieDetails/MovieDetails';
import MovieList from './components/MovieList/MovieList';
import AddMovie from './components/Admin/AddMovie';
import RegisterLogin from './components/RegisterLogin/RegisterLogin';
import LoginPage from './components/LoginPage/LoginPage';
import HomePage from './components/HomePage/HomePage';
function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes> 
          {/* <Route path="/m" element={<MovieList />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterLogin />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/movielist" element={<MovieList/>} />
          <Route path="/addmovie" element={<AddMovie/>} />
        
        </Routes> 
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
