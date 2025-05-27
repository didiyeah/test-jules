const mongoose = require('mongoose');

const merchandiseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  category: {
    type: String, // e.g., 'clothing', 'toys', 'souvenirs'
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sizes: {
    type: [String], // e.g., ['S', 'M', 'L', 'XL']
    default: [],
  },
  colors: {
    type: [String],
    default: [],
  },
  stock: {
    type: Number,
    default: 0,
  },
  imageUrl: {
    type: String,
  },
  isEcoFriendly: { // For eco-merchandise
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to update `updatedAt` field before saving
merchandiseSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Merchandise = mongoose.model('Merchandise', merchandiseSchema);

module.exports = Merchandise;
