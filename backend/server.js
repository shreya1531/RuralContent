require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('MongoDB error:', err));

// Routes
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./routes/booking');
const contactRoutes = require('./routes/contact');

app.use('/api/auth', authRoutes);
app.use('/api/book', bookingRoutes);
app.use('/api/contact', contactRoutes);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running at http://localhost:${process.env.PORT}`);
});
