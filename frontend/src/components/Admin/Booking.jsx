import React, { useEffect, useState } from 'react';
import './Booking.css'; 
import axiosInstance from "../../utils/api.js";

export default function Booking() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await axiosInstance.get('/admin/listAllBooking');
        console.log(response.data.data)
        setBookings(response.data.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch bookings.');
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="booking-container">
      <h1>All Bookings</h1>
      <table>
        <thead>
          <tr>
            {/* <th>Booking ID</th> */}
            <th>Movie</th>
            {/* <th>User</th> */}
            <th>Name</th>
            <th>E-Mail</th>
            <th>Date</th>
            <th>Time</th>
            <th>Adults</th>
            <th>Children</th>
            <th>Phone Number</th>
            <th>Food Items</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking._id}>
              {/* <td>{booking._id}</td> */}
              <td>{booking.movieId.title}</td>
              {/* <td>{booking.userId}</td> */}
              <td>{booking.name}</td>
              <td>{booking.email}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.adultCount}</td>
              <td>{booking.childCount}</td>
              <td>{booking.phoneNumber}</td>
              <td>
                {booking.addonfood.map(food => (
                  <span key={food._id}>{food.name}, </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
