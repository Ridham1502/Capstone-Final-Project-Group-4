import React, { useState, useEffect } from 'react';
import './UserList.css';
import axiosInstance from "../../utils/api.js";
import toast from "react-hot-toast";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, [searchTerm]); // Trigger useEffect on searchTerm change

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get('/admin/listAllUser', {
        params: { search: searchTerm }
      });
      console.log("response : ", response);
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewUser = (user) => {
    setSelectedUser(user);
  };

  const handleDeleteUser = async (userId) => {
    try {
      //await axiosInstance.delete(`/users/${userId}`);
      console.log(`Deleting user with ID: ${userId}`);
      await axiosInstance.delete(`/admin/userDeleteByid?userId=${userId}`);
      toast.success("User deleted successfully!");
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="user-list-container">
      <h2>User List</h2>

      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />

      <table className="user-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Address</th>
            <th>Genres</th>
            <th>Language</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map(user => (
            <tr key={user.id}>
              <td>{user?.full_name}</td>
              <td>{user?.email}</td>
              <td>{user?.phone_number}</td>
              <td>{user?.address}</td>
              <td>{user?.genres}</td>
              <td>{user?.language}</td>
              <td>
                <button onClick={() => handleViewUser(user)}>View</button>
                <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedUser(null)}>&times;</span>
            <h2>User Details</h2>
            <hr></hr><br></br>
            <p><strong>Full Name:</strong> {selectedUser?.full_name}</p>
            <p><strong>Email:</strong> {selectedUser?.email}</p>
            <p><strong>Address:</strong> {selectedUser?.address}</p>
            <p><strong>Bio:</strong> {selectedUser?.bio}</p>
            <p><strong>City:</strong> {selectedUser?.city}</p>
            <p><strong>Country:</strong> {selectedUser?.country}</p>
            <p><strong>Genres:</strong> {selectedUser?.genres}</p>
            <p><strong>Phone number:</strong> {selectedUser?.phone_number}</p>
            <p><strong>Postal Code:</strong> {selectedUser?.postalcode}</p>
            <p><strong>State:</strong> {selectedUser?.state}</p>

          </div>
        </div>
      )}
    </div>
  );
}
