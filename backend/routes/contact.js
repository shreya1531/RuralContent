const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const { name, message } = req.body;
    if (!name || !message) {
      return res.status(400).json({ message: 'Name and message required' });
    }

    const contact = new Contact({ name, message });
    await contact.save();
    res.json({ message: "Message received!" });
  } catch (err) {
    console.error("Contact error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
