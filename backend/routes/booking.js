const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Book Items
router.post('/', async (req, res) => {
  const { user, items } = req.body;
  if (!user || !items) return res.status(400).json({ message: 'Missing data' });

  try {
    const booking = new Booking({ email: user.email, items });
    await booking.save();
    res.json({ message: 'Items booked successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Booking failed' });
  }
});

// Get Bookings
router.get('/:email', async (req, res) => {
  try {
    const bookings = await Booking.find({ email: req.params.email });
    const items = bookings.flatMap(b => b.items);
    res.json({ items });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching bookings' });
  }
});

module.exports = router;
