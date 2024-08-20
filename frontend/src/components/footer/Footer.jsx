import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../Assets/logo.jpg';

const Footer = () => {
  return (
    <div className="footer-bg-light">
      <div className="footer-container">
        <div className="footer-section footer-logo">
          <img src={logo} alt="Cultural Canvas Logo" />
          <div className="social-icons">
            <FaInstagram className="icon instagram" />
            <FaTwitter className="icon twitter" />
            <FaLinkedin className="icon linkedin" />
            <FaYoutube className="icon youtube" />
          </div>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Movies</h4>
          <ul className="list-unstyled">
            <li className="footer-link">Features</li>
            <li className="footer-link">Live Share</li>
            <li className="footer-link">Video Record</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Community</h4>
          <ul className="list-unstyled">
            <li className="footer-link">Featured Artists</li>
            <li className="footer-link">The Portal</li>
            <li className="footer-link">Live Events</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4 className="footer-title">Company</h4>
          <ul className="list-unstyled">
            <li className="footer-link">About Us</li>
            <li className="footer-link">Contact Us</li>
            <li className="footer-link">History</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
