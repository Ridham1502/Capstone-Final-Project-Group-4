const express = require('express');
const router = express.Router();
const FAQ = require('../models/FAQ');


router.get('/faqs', async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.json(faqs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/faqs', async (req, res) => {
    const faq = new FAQ({
        question: req.body.question,
        answer: req.body.answer
    });

    try {
        const newFAQ = await faq.save();
        res.status(201).json(newFAQ);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
