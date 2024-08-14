import React, { useState } from 'react';
import axiosInstance from "../../utils/api.js";
import toast from "react-hot-toast";

export default function AddFood() {
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [kcal, setKcal] = useState('');
  const [type, setType] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const foodData = { name, details, price, quantity: quantity, kcal, type: type, image: image };

    try {
   
      const response = await axiosInstance.post("/admin/addFood", foodData);

      if (response) {
        // Handle successful response
        toast.success("Food and Bevrages added successfully.")
        console.log('Food added successfully');
      } else {
        // Handle error response
        toast.error("Failed to add food");
        console.log('Failed to add food');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Add Food</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="text" placeholder="Details" value={details} onChange={(e) => setDetails(e.target.value)} />
        <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <input type="text" placeholder="Kcal" value={kcal} onChange={(e) => setKcal(e.target.value)} />
        <input type="text" placeholder="Type" value={type} onChange={(e) => setType(e.target.value)} />
        <input type="text" placeholder="Image URLs" value={image} onChange={(e) => setImage(e.target.value)} />
        <button type="submit">Add Food</button>
      </form>
    </div>
  );
}
