import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../Assets/logo.jpg'; // Ensure the path is correct

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="Cultural Canvas Logo" /></Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/movielist">Movie List</Link>
        <Link to="/addmovie">Add Movies/Events</Link>
       
        <Link to="/activities">Activities</Link>
        <Link to="/sports">Sports</Link>
        <Link to="/about">About Us</Link>
        <div className="dropdown">
          <button className="dropbtn">Canada</button>
          <div className="dropdown-content">
            <Link to="/toronto">Toronto</Link>
            <Link to="/vancouver">Vancouver</Link>
            <Link to="/montreal">Montreal</Link>
          </div>
        </div>
        <button className="sign-in-button" onClick={() => window.location.href='/login'}>Sign In</button>
        <button className="sign-in-button" onClick={() => window.location.href='/register'}>Register</button>
       
      </div>
    </div>
  );
}
