import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterLogin from './components/RegisterLogin/RegisterLogin';
import LoginPage from './components/LoginPage/LoginPage';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RegisterLogin />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
