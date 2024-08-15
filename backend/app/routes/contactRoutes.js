const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// POST route for submitting contact form
router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        const newContact = new Contact({
            name,
            email,
            message,
        });
        await newContact.save();
        res.status(201).json({ message: 'Your message has been sent successfully!' });
    } catch (err) {
        res.status(500).json({ message: 'An error occurred while sending your message.' });
    }
});

module.exports = router;
