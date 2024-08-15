import React from 'react';
import { Link } from 'react-router-dom';
import './Confirmation.css';

export default function Confirmation() {
  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <h1 className="confirmation-title">Booking Confirmed!</h1>
        <p className="confirmation-message">
          🎉 <strong>Thank you for booking your ticket!</strong> Your booking has been confirmed successfully.
        </p>
        <p className="confirmation-note">
          <strong>Enjoy the movie!</strong> We hope you have a fantastic experience.
        </p>
        <Link to="/" className="back-home-button">Back to Home</Link>
      </div>
    </div>
  );
}
 
