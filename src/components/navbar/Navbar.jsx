import React from 'react'
import './style.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src="/logo.jpg" alt="Logo" />
      </div>
      <div className="navbar-links">
        <a href="#movies">Movies</a>
        <a href="#events">Events</a>
        <a href="#activities">Activities</a>
        <a href="#sports">Sports</a>
        <a href="#admin">Admin</a>
        <div className="dropdown">
          <button className="dropbtn">Canada</button>
          <div className="dropdown-content">
            <a href="#toronto">Toronto</a>
            <a href="#vancouver">Vancouver</a>
            <a href="#montreal">Montreal</a>
          </div>
        </div>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </div>
  )
}
