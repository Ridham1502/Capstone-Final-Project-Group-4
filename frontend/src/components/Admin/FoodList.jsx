import React, { useEffect, useState } from 'react';
import './Booking.css';
import axiosInstance from "../../utils/api.js";
import toast from "react-hot-toast";

export default function FoodList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await axiosInstance.get('/admin/listAllFood');
        console.log(response.data.data);
        setBookings(response.data.data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch bookings.');
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/admin/foodDeleteByid?foodId=${id}`);
      setBookings((prevBookings) => prevBookings.filter(booking => booking._id !== id));
      toast.success("Food deleted successfully!");
    } catch (error) {
      setError('Failed to delete item.');
      toast.error("Failed to delete item.");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="booking-container">
      <h1>All Food/Beverages</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Details</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Kcal</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map(booking => (
            <tr key={booking._id}>
              <td>{booking.name}</td>
              <td>{booking.details}</td>
              <td>{booking.price}</td>
              <td>{booking.quantity}</td>
              <td>{booking.kcal}</td>
              <td>{booking.type}</td>
              <td>
                <button onClick={() => handleDelete(booking._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
