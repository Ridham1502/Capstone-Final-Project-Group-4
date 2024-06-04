import React from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterLogin.css';

import userIcon from '../Assets/user.png';
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';
import confirmIcon from '../Assets/confirm.jpeg';

const RegisterLogin = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert('You have successfully registered!');
    navigate('/login');
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={userIcon} alt="Username Icon" />
          <input type="text" placeholder="UserName" />
        </div>
        <div className="input">
          <img src={emailIcon} alt="Email Icon" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={passwordIcon} alt="Password Icon" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="input">
          <img src={confirmIcon} alt="Confirm Password Icon" />
          <input type="password" placeholder="Confirm Password" />
        </div>
      </div>
      <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit" onClick={handleRegister}>Register</div>
        <div className="submit" onClick={() => navigate('/login')}>Login</div>
      </div>
    </div>
  );
};

export default RegisterLogin;
