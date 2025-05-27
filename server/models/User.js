const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    // Basic email validation, can be enhanced
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
    // Password hashing will be handled before saving (e.g., using a pre-save hook with bcrypt)
  },
  role: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Add any other relevant fields like address, phone number, etc.
});

// We will add a pre-save hook here later for password hashing.

const User = mongoose.model('User', userSchema);

module.exports = User;
