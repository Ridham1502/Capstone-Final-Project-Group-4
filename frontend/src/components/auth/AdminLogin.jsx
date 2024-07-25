import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./signin.css";
import axiosInstance from "../../utils/api.js";
import Cookies from "js-cookie";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const history = useHistory();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/admin/login", {
        email,
        password,
      });

      console.log(response.data.data.token);
      const { token } = response.data.data.token;

      Cookies.set("token", token);
      console.log("response.data.data  :" + response.data.data.user)
      // localStorage.setItem("user", response.data.data.user);

      navigate("/admin/addmovie");
      toast.success("Login successful!");
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
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

export default AdminLogin;
