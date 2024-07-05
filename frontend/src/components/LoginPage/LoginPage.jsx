// frontend/src/components/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';
import logo from '../Assets/logo.jpg';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5002/api/user/login', { // Correct URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Login successful!');
        navigate('/');
      } else {
        console.error('Login error:', data);
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('Login failed');
    }
};


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
          <img src={emailIcon} alt="Email Icon" />
          <input 
            type="email" 
            placeholder="Email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input">
          <img src={passwordIcon} alt="Password Icon" />
          <input 
            type="password" 
            placeholder="Password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit" onClick={handleLogin}>Login</div>
        <div className="submit" onClick={() => navigate('/register')}>Register</div>
      </div>
    </div>
  );
};

export default LoginPage;
