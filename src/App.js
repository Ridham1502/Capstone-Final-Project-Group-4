import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
//import Home from './components/HomePage/HomePage';
import MovieDetails from './components/MovieDetails/MovieDetails';
import AdminPage from './components/AdminPage/AdminPage';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes> {/* Replace <Route> with <Routes> */}
           <Route path="/" element={<RegisterLogin />} />
          <Route path="/login" element={<LoginPage />} />
          // <Route path="/" element={<AdminPage />} />
          <Route path="/movies" element={<MovieDetails />} />
          {/* <Route path="/events" element={<Events />} /> */}
          {/* <Route path="/activities" element={<Activities />} /> */}
          {/* <Route path="/sports" element={<Sports />} /> */}
           <Route path="/about" element={<AdminPage />} /> 
        </Routes> {/* Close <Routes> */}
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
