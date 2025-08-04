const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Signup
router.post('/signup', async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Email already exists' });

    const newUser = new User({ fullname, email, password });
    await newUser.save();
    res.json({ message: 'Signup successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Signin
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  console.log("SIGNIN REQUEST:", { email, password }); // ✅ Add this

  try {
    const user = await User.findOne({ email, password });

    if (!user) {
      console.log("No matching user found."); // ✅ Add this too
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.json({ fullname: user.fullname, email: user.email });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});


module.exports = router;
