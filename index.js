const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
const connectDB = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5001; 

connectDB();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
