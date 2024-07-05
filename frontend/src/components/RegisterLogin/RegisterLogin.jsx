import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterLogin.css';
import userIcon from '../Assets/user.png';
import emailIcon from '../Assets/email.png';
import passwordIcon from '../Assets/password.png';
import confirmIcon from '../Assets/confirm.jpeg';
import phone from '../Assets/phone.png';
import logo from '../Assets/logo.jpg';


const RegisterLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone_number: '',
    role: 'user',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      console.log("Registering with data: ", formData);
      const response = await fetch('http://localhost:5002/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('You have successfully registered!');
        navigate('/login');
      } else {
        console.error('Registration error:', data);
        alert(data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Registration failed');
    }
  };

  return (
    <div className='container'>
      <div className="logo">
        <img src={logo} alt="Cultural Canvas Logo" />
      </div>
      <div className="header">
        <div className="text">Register</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={userIcon} alt="Username Icon" />
          <input 
            type="text" 
            placeholder="Username" 
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
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
        <div className="input">
          <img src={confirmIcon} alt="Confirm Password Icon" />
          <input 
            type="password" 
            placeholder="Confirm Password" 
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className="input">
        <img src={phone} alt="Phone Number Icon" />
          <input 
            type="text" 
            placeholder="Phone Number" 
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
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
