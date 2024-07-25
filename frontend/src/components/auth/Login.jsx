import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./signin.css";
import axiosInstance from "../../utils/api.js";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/user/login", {
        email,
        password,
      });

      console.log(response?.data.data.token);
      const token = response?.data.data.token;

      // Store token in localStorage
      //   localStorage.setItem("token", response.data.data.token);
      Cookies.set("token", token);

      // Redirect to dashboard or another protected route
      toast.success("Login successful!");
      navigate("/profile");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-login">
          Login
        </button>
      </form>
      <a href="/loginadmin">Admin Login</a>
    </div>
  );
};

export default Login;
