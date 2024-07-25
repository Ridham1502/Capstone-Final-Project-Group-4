import React from 'react';
import toast from 'react-hot-toast';
import './signin.css';
import axiosInstance from '../../utils/api.js'
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const body = { name, email, password };

    try {
      const response = await axiosInstance.post('/user/signup', body);
      toast.success('Signup successful!');
      console.log(response?.data);
      navigate("/login");
    } catch (error) {
      console.error('Signup error:', error);
      toast.error(error?.response?.data.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form className="signup-form" onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="btn-signup">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
