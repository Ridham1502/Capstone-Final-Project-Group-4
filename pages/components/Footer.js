import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="bg-gray-50 h-1/4 w-full flex md:flex-row flex-col justify-around items-start p-5 bg-white p-8 rounded-lg shadow-md">
        <div className="p-5 ">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              {/* Stream<span className="text-blue-600">line</span> */}
              <img src="/movielogo.png" alt="Logo" style={{ height: '100px' }} />
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Movies</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Features
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Live Share
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Video Record
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Community</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Featured Artists
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              The Portal
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Live Events
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About Us
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact Us
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              History
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <div className="pb-2">
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Register
              </button>
            </div>
            <div className="pb-2">
              <button className="w-full bg-white border border-blue-500 hover:bg-blue-100 text-blue-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Login
              </button>
            </div>
          </ul>

        </div>
      </div>
        <div className="flex justify-between items-center p-5 bg-gray-50">
          <h1 className="text-gray-800 font-semibold">
            © 2020-2024 All rights reserved | Build with ❤ by
            <span className="hover:text-blue-600 font-semibold cursor-pointer">
              Cultural Canvas
            </span>
          </h1>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com" target="_blank" className="text-gray-800 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.691 0 8.281.011 7.019.07 5.702.132 4.527.396 3.515 1.408c-1.012 1.012-1.276 2.187-1.338 3.504C2.011 8.281 2 8.691 2 12c0 3.309.011 3.719.07 4.981.062 1.317.326 2.492 1.338 3.504 1.012 1.012 2.187 1.276 3.504 1.338C8.281 21.989 8.691 22 12 22c3.309 0 3.719-.011 4.981-.07 1.317-.062 2.492-.326 3.504-1.338 1.012-1.012 1.276-2.187 1.338-3.504.058-1.262.07-1.672.07-4.981 0-3.309-.011-3.719-.07-4.981-.062-1.317-.326-2.492-1.338-3.504C19.473.396 18.298.132 16.981.07 15.719.011 15.309 0 12 0z" />
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162 18.162 15.403 18.162 12 15.403 5.838 12 5.838zm0 10.324c-2.299 0-4.162-1.863-4.162-4.162S9.701 7.838 12 7.838s4.162 1.863 4.162 4.162-1.863 4.162-4.162 4.162z" />
                <circle cx="18.406" cy="5.595" r="1.439" />
              </svg>
            </a>
            <a href="https://www.twitter.com" target="_blank" className="text-gray-800 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M24 4.557a9.828 9.828 0 01-2.828.775A4.932 4.932 0 0023.337 3.1c-.951.564-2.005.974-3.127 1.194A4.918 4.918 0 0016.616 3c-2.717 0-4.924 2.206-4.924 4.924 0 .386.045.762.127 1.123C7.691 8.826 4.066 6.906 1.64 4.148c-.427.734-.672 1.586-.672 2.496 0 1.722.878 3.243 2.209 4.135-.815-.026-1.58-.25-2.252-.623v.063c0 2.404 1.709 4.41 3.976 4.864a4.936 4.936 0 01-2.224.084c.626 1.955 2.444 3.377 4.599 3.415a9.868 9.868 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.068a13.978 13.978 0 007.557 2.212c9.054 0 14.001-7.507 14.001-14.001 0-.213-.004-.426-.015-.637A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" className="text-gray-800 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M23.498 6.186a2.97 2.97 0 00-2.097-2.104C19.735 3.671 12 3.671 12 3.671s-7.735 0-9.401.411A2.97 2.97 0 00.502 6.186C0 7.853 0 12 0 12s0 4.147.502 5.814a2.97 2.97 0 002.097 2.104c1.666.411 9.401.411 9.401.411s7.735 0 9.401-.411a2.97 2.97 0 002.097-2.104C24 16.147 24 12 24 12s0-4.147-.502-5.814zM9.546 15.568v-7.16l6.44 3.58-6.44 3.58z" />
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" className="text-gray-800 hover:text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.462.099 2.794.143v3.24h-1.918c-1.505 0-1.797.716-1.797 1.765v2.31h3.59l-.467 3.622h-3.123V24h6.116c.73 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
          </div>
        </div>

    </>
  );
}

export default Footer;