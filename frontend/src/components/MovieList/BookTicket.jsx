import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookTicket.css';
import axiosInstance from '../../utils/api';
import Cookies from 'js-cookie';
import toast from "react-hot-toast";

export default function BookTicket() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const movieId = searchParams.get('id');
  const [movie, setMovie] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    adultCount: 0,
    childCount: 0,
    phoneNumber: ''
  });
  const [foodItems, setFoodItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axiosInstance.get('/user/getMovieDetails', {
          params: { id: movieId }
        });
        setMovie(response.data.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    }

    async function fetchFoodItems() {
      try {
        const response = await axiosInstance.get('/user/listAllFood');
        setFoodItems(response.data.data);
      } catch (error) {
        console.error('Error fetching food items:', error);
      }
    }

    fetchMovieDetails();
    fetchFoodItems();
  }, [movieId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleItemAdd = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const calculateTotalAmount = () => {
    const adultPrice = (parseInt(formData.adultCount, 10) || 0) * (movie?.price || 0);
    const childPrice = (parseInt(formData.childCount, 10) || 0) * ((movie?.price / 2) || 0);
    const foodPrice = selectedItems.reduce((sum, item) => sum + (parseInt(item.price, 10) || 0), 0);
    const total = adultPrice + childPrice + foodPrice;
    setTotalAmount(total);
  };

  useEffect(() => {
    calculateTotalAmount();
  }, [formData, selectedItems, movie]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get('token');
      await axiosInstance.post('/user/bookticket', {
        movieId,
        ...formData,
        totalamount: totalAmount + 10,
        addonfood: selectedItems.map(item => item._id),
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Ticket booked successfully!');
      navigate('/confirmation');
    } catch (error) {
      console.error('Error booking ticket:', error);
      toast.error('Failed to book ticket.');
    }
  };

  return (
    <div className="book-ticket-container">
      <div className="movie-details">
        <img src={movie?.image} alt={movie?.title} className="movie-image" />
        <div className="movie-info">
          <h1>{movie?.title}</h1>
          <p>{movie?.description}</p>
          <p><strong>Genre:</strong> {movie?.genre}</p>
          <p><strong>Duration:</strong> {movie?.runtime} mins</p>
          <p><strong>Price:</strong> ${movie?.price}</p>
        </div>
      </div>
      <div className="content">
        <div className="food-beverages-container">
          <h2>Grab a bite!</h2>
          <div className="food-items">
            {foodItems.map(item => (
              <div key={item.id} className="food-item">
                <img src={item.image} alt={item.name} />
                <div className="food-info">
                  <h3>{item.name}</h3>
                  <p>{item.details}</p>
                  <p><strong>{item.kcal} kcal | {item.quantity}ml</strong></p>
                  <p className="food-price">${item.price}</p>
                  <button onClick={() => handleItemAdd(item)}>Add</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="payment-container">
          <h2>User Details</h2>
          <form onSubmit={handleSubmit} className="ticket-form">
            <div className="form-group">
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Date:</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Time:</label>
              <input type="time" name="time" value={formData.time} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Number of Adults:</label>
              <input type="number" name="adultCount" value={formData.adultCount} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Number of Children:</label>
              <input type="number" name="childCount" value={formData.childCount} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </div>
          </form>
        </div>
      </div>
      <div className="booking-summary">
        <h2>Booking Summary</h2>
        <p><strong>Selected Seats:</strong> Premium - H10, H11 (2 Tickets)</p>
        <p><strong>Number of Adults:</strong> {formData.adultCount}</p>
        <p><strong>Number of Children:</strong> {formData.childCount}</p>
        <p><strong>Selected Food Items:</strong></p>
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <p>Convenience fees: $10.00</p>
        <p><strong>Sub total:</strong> ${totalAmount}</p>
        <p><strong>Amount Payable:</strong> ${totalAmount + 10.00}</p>
        <button className="proceed-button" onClick={handleSubmit}>Proceed</button>
      </div>
    </div>
  );
}
