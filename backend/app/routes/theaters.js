const express = require('express');
const router = express.Router();
const Theater = require('../models/theater'); 


router.get('/', async (req, res) => {
  try {
    const theaters = await Theater.find();
    res.json(theaters);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
