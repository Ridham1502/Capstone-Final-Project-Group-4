import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-bg-light">
      <div className="footer-container">
        <div className="footer-section">
          <ul className="list-unstyled">
            <p className="footer-title">
              <img src="/logo.jpg" alt="Logo" className="footer-logo" />
            </p>
            <div className="social-icons">
              <FaInstagram className="icon instagram" />
              <FaTwitter className="icon twitter" />
              <FaLinkedin className="icon linkedin" />
              <FaYoutube className="icon youtube" />
            </div>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="list-unstyled">
            <p className="footer-subtitle">Movies</p>
            <li className="footer-link">Features</li>
            <li className="footer-link">Live Share</li>
            <li className="footer-link">Video Record</li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="list-unstyled">
            <p className="footer-subtitle">Community</p>
            <li className="footer-link">Featured Artists</li>
            <li className="footer-link">The Portal</li>
            <li className="footer-link">Live Events</li>
          </ul>
        </div>
        <div className="footer-section">
          <ul className="list-unstyled">
            <p className="footer-subtitle">Company</p>
            <li className="footer-link">About Us</li>
            <li className="footer-link">Contact Us</li>
            <li className="footer-link">History</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
