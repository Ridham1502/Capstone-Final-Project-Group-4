import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
import logo from '../Assets/logo.jpg'; 

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const token = getCookie('token');

    if (token) {
      setIsLoggedIn(true);
      const storedUserRole = localStorage.getItem('user');
      if (storedUserRole) {
        setUserRole(JSON.parse(storedUserRole).role);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserRole('');
    navigate("/");
  };

  const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="Cultural Canvas Logo"/>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/movies">Movies</a> 
        {isLoggedIn && userRole === 'Admin' && (
          <a href="/addmovie">Add Movies</a>
         )}
        <a href="#events">Events</a>
        <a href="#activities">Activities</a>
        <a href="#about">About Us</a>
        <div className="dropdown">
          <button className="dropbtn">Canada</button>
          <div className="dropdown-content">
            <a href="#toronto">Toronto</a>
            <a href="#vancouver">Vancouver</a>
            <a href="#montreal">Montreal</a>
          </div>
        </div>
        {
          isLoggedIn ? (<a href="/profile">Profile</a>) : ("")
        }
        {isLoggedIn ? (
          <button className="sign-in-btn" onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <button className="sign-in-btn"><a href='/login'>Login</a></button>
            <button className="sign-in-btn"><a href='/signup'>Sign up</a></button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
