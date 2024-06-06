import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <>
      <div className="footer-bg-light py-4">
        <div className="footer-container d-flex flex-column flex-md-row justify-content-between align-items-start p-4 footer-bg-white rounded-lg shadow-md">
          <div className="p-3">
            <ul className="list-unstyled">
              <p className="text-dark font-weight-bold h3 pb-4">
                <img src="/logo.png" alt="Logo" style={{ height: '100px' }} />
              </p>
              <div className="d-flex gap-3 pb-4">
                <FaInstagram className="h4 cursor-pointer text-secondary hover-text-warning" />
                <FaTwitter className="h4 cursor-pointer text-secondary hover-text-primary" />
                <FaLinkedin className="h4 cursor-pointer text-secondary hover-text-primary" />
                <FaYoutube className="h4 cursor-pointer text-secondary hover-text-danger" />
              </div>
            </ul>
          </div>
          <div className="p-3">
            <ul className="list-unstyled">
              <p className="text-dark font-weight-bold h4 pb-3">Movies</p>
              <li className="text-secondary font-weight-semibold pb-2 cursor-pointer">
                Features
              </li>
              <li className="text-secondary font-weight-semibold pb-2 cursor-pointer">
                Live Share
              </li>
              <li className="text-secondary font-weight-semibold pb-2 cursor-pointer">
                Video Record
              </li>
            </ul>
          </div>
          <div className="p-3">
            <ul className="list-unstyled">
              <p className="text-dark font-weight-bold h4 pb-3">Community</p>
              <li className="text-secondary font-weight-semibold pb-2 cursor-pointer">
                Featured Artists
              </li>
              <li className="text-secondary font-weight-semibold pb-2 cursor-pointer">
                The Portal
              </li>
              <li className="text-secondary font-weight-semibold pb-2 cursor-pointer">
                Live Events
              </li>
            </ul>
          </div>
          <div className="p-3">
            <ul className="list-unstyled">
              <p className="text-dark font-weight-bold h4 pb-3">Company</p>
              <li className="text-secondary font-weight-semibold pb-2 cursor-pointer">
                About Us
              </li>
              <li className="text-secondary font-weight-semibold pb-2 cursor-pointer">
                Contact Us
              </li>
              <li className="text-secondary font-weight-semibold pb-2 cursor-pointer">
                History
              </li>
            </ul>
          </div>
          <div className="p-3">
            <ul className="list-unstyled">
              <div className="pb-2">
                <button className="btn btn-primary btn-block font-weight-bold">
                  Register
                </button>
              </div>
              <div className="pb-2">
                <button className="btn btn-outline-primary btn-block font-weight-bold">
                  Login
                </button>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center p-4 footer-bg-light">
        <p className="text-dark font-weight-semibold">
          © 2020-2024 All rights reserved | Built with ❤ by
          <span className="text-primary font-weight-semibold cursor-pointer">
            Cultural Canvas
          </span>
        </p>
        <div className="d-flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" className="text-dark hover-text-primary">
            <FaInstagram className="h4" />
          </a>
          <a href="https://www.twitter.com" target="_blank" className="text-dark hover-text-primary">
            <FaTwitter className="h4" />
          </a>
          <a href="https://www.youtube.com" target="_blank" className="text-dark hover-text-primary">
            <FaYoutube className="h4" />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="text-dark hover-text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h4">
              <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.462.099 2.794.143v3.24h-1.918c-1.505 0-1.797.716-1.797 1.765v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
}
