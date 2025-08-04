const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  email: String,
  items: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
