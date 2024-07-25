import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faGauge, faUsers,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './adminnav.css';
import { useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    localStorage.removeItem('user');
    navigate("/");

  };
  return (
    <div className="admin-navbar">
      <ul>
      <li>
          <NavLink to="/admin/" activeClassName="selected">
            <FontAwesomeIcon icon={faGauge} /> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/addmovie" activeClassName="selected">
            <FontAwesomeIcon icon={faFilm} /> Add Movie
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/userlist" activeClassName="selected">
            <FontAwesomeIcon icon={faUsers} /> Users
          </NavLink>
        </li>
        <li>
          <button className="sign-in-btn" onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AdminNavbar;
