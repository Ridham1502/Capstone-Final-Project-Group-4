import React, { useEffect, useState } from "react";
import axiosInstance from "../../utils/api";
import toast from "react-hot-toast";
import "./Profile.css";
import Cookies from 'js-cookie';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    bio: "",
    address: "",
    genres: "",
    language: "",
    favouriteEvent: "",
    city: "",
    state: "",
    country: "",
    postalcode: "",
    favouriteMovie: ""
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = Cookies.get('token');

        if (!token) {
          toast.error("Token not found. Please log in.");
          return;
        }

        const response = await axiosInstance.get("/user/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data.data);
        setFormData({
          full_name: response.data.data.full_name || "",
          email: response.data.data.email || "",
          phone_number: response.data.data.phone_number || "",
          bio: response.data.data.bio || "",
          address: response.data.data.address || "",
          genres: response.data.data.genres || "",
          language: response.data.data.language || "",
          favouriteEvent: response.data.data.favouriteEvent || "",
          city: response.data.data.city || "",
          state: response.data.data.state || "",
          country: response.data.data.country || "",
          postalcode: response.data.data.postalcode || "",
          favouriteMovie: response.data.data.favouriteMovie || ""
        });
      } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Failed to fetch profile.");
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = Cookies.get('token');

      if (!token) {
        toast.error("Token not found. Please log in.");
        return;
      }

      const response = await axiosInstance.put("/user/profileUpdate", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data.data);
      setEditing(false);
      toast.success("Profile updated successfully.");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      {user ? (
        <div className="profile-details">
          {editing ? (
            <form onSubmit={handleSubmit}>
              <div className="profile-item">
                <label htmlFor="full_name">Full Name:</label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-item">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-item">
                <label htmlFor="phone_number">Phone Number:</label>
                <input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-item">
                <label htmlFor="bio">Bio:</label>
                <textarea
                  id="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-item">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-item">
                <label htmlFor="genres">Genres:</label>
                <input
                  type="text"
                  id="genres"
                  name="genres"
                  value={formData.genres}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-item">
                <label htmlFor="language">Language:</label>
                <input
                  type="text"
                  id="language"
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-item">
                <label htmlFor="favouriteEvent">Favourite Event:</label>
                <input
                  type="text"
                  id="favouriteEvent"
                  name="favouriteEvent"
                  value={formData.favouriteEvent}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-item">
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-item">
                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-item">
                <label htmlFor="country">Country:</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-item">
                <label htmlFor="postalcode">Postal Code:</label>
                <input
                  type="text"
                  id="postalcode"
                  name="postalcode"
                  value={formData.postalcode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile-item">
                <label htmlFor="favouriteMovie">Favourite Movie:</label>
                <input
                  type="text"
                  id="favouriteMovie"
                  name="favouriteMovie"
                  value={formData.favouriteMovie}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit">Save Changes</button>
              <button type="button" onClick={() => setEditing(false)}>
                Cancel
              </button>
            </form>
          ) : (
            <>
              <div className="profile-item">
                <strong>Full Name:</strong> {user.full_name}
              </div>
              <div className="profile-item">
                <strong>Email:</strong> {user.email}
              </div>
              <div className="profile-item">
                <strong>Phone Number:</strong> {user.phone_number}
              </div>
              <div className="profile-item">
                <strong>Bio:</strong> {user.bio}
              </div>
              <div className="profile-item">
                <strong>Address:</strong> {user.address}
              </div>
              <div className="profile-item">
                <strong>Genres:</strong> {user.genres}
              </div>
              <div className="profile-item">
                <strong>Language:</strong> {user.language}
              </div>
              <div className="profile-item">
                <strong>Favourite Event:</strong> {user.favouriteEvent}
              </div>
              <div className="profile-item">
                <strong>City:</strong> {user.city}
              </div>
              <div className="profile-item">
                <strong>State:</strong> {user.state}
              </div>
              <div className="profile-item">
                <strong>Country:</strong> {user.country}
              </div>
              <div className="profile-item">
                <strong>Postal Code:</strong> {user.postalcode}
              </div>
              <div className="profile-item">
                <strong>Favourite Movie:</strong> {user.favouriteMovie}
              </div>
              <button onClick={() => setEditing(true)}>Edit Profile</button>
            </>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;

