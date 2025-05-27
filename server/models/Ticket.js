const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  type: {
    type: String, // e.g., 'adult', 'child', 'senior', 'family_pass'
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  validity: {
    type: String, // e.g., 'single_day', 'season_pass_2024'
    required: true,
  },
  stock: {
    type: Number,
    default: 0, // Can be set to Infinity for unlimited passes like season passes
  },
  imageUrl: {
    type: String,
  },
  isEcological: { // To highlight eco-friendly options, e.g., digital tickets
    type: Boolean,
    default: false,
  },
  // Add any other relevant fields
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
ticketSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
