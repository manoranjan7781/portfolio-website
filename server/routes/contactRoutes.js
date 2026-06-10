const express = require('express');
const Contact = require('../models/Contact');

const router = express.Router();

/**
 * POST /api/contact
 * Save contact form submission to MongoDB
 */
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Server-side validation
    if (!name || !name.trim()) {
      return res.status(400).json({ success: false, message: 'Name is required' });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({ success: false, message: 'Email is required' });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Please provide a valid email address' });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({ success: false, message: 'Message is required' });
    }

    if (message.trim().length > 1000) {
      return res.status(400).json({ success: false, message: 'Message cannot exceed 1000 characters' });
    }

    console.log("Contact Form Submission:");
console.log({
  name: name.trim(),
  email: email.trim().toLowerCase(),
  message: message.trim(),
});

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      data: {
        name,
        email,
      },
    });
  } catch (error) {
    console.error('Contact form error:', error.message);

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
});

module.exports = router;
