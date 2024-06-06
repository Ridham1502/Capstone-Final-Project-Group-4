import React from 'react';
import './LoginPage.css';

import userIcon from '../Assets/user.png';
import passwordIcon from '../Assets/password.png';
import logo from '../Assets/logo.jpg'; 

const LoginPage = () => {
  return (
    <div className='container'>
      <div className="logo">
        <img src={logo} alt="Cultural Canvas Logo" />
      </div>
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={userIcon} alt="Username Icon" />
          <input type="text" placeholder="UserName" />
        </div>
        <div className="input">
          <img src={passwordIcon} alt="Password Icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit">Register</div>
        <div className="submit">Login</div>
      </div>
    </div>
  );
};

export default LoginPage;
