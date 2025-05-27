const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  productType: {
    type: String,
    enum: ['ticket', 'merchandise'],
    required: true,
  },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    // This ref will be dynamically set based on productType if needed,
    // or handled at the application level. For simplicity, not using refPath here.
  },
  name: { // Name of the product at the time of purchase
    type: String,
    required: true,
  },
  price: { // Price of the product at the time of purchase
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
}, {_id: false}); // Prevent Mongoose from creating an _id for subdocuments

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items: [orderItemSchema],
  totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'fulfilled', 'cancelled'],
    default: 'pending',
  },
  shippingAddress: { // Optional, relevant for merchandise
    type: String,
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
orderSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
