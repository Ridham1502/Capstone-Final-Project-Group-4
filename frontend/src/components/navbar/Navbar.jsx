import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

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
    navigate('/');
  };

  const getCookie = (name) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/logo.jpg" alt="Logo" />
      </div>
      <div className="navbar-menu-icon" onClick={toggleMenu}>
        <img src="/hamburger.png" alt="Menu" />
      </div>
      <div className={`navbar-links ${menuOpen ? 'show' : ''}`}>
        {isLoggedIn && userRole === 'Admin' && (
          <a href="/addmovie">Add Movies</a>
        )}
        <a href="/">Home</a>
        <a href="/movie">Events</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/faqpage">FAQ Page</a>
        {isLoggedIn ? (
          <>
            <a href="/profile">Profile</a>
            <button className="sign-in-btn" onClick={handleLogout}>Logout</button>
          </>
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
