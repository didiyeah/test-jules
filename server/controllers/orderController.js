const Order = require('../models/Order');
const User = require('../models/User'); // Needed to check if user exists

exports.createOrder = async (req, res) => {
  // Assuming req.body contains: { userId, items, totalAmount, shippingAddress (optional) }
  // For now, we'll trust userId from req.body. Later, this should come from authenticated user.
  const { userId, items, totalAmount, shippingAddress } = req.body;

  if (!userId || !items || items.length === 0 || !totalAmount) {
    return res.status(400).json({ message: 'Missing required fields for order creation.' });
  }

  try {
    // Optional: Check if the user exists
    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(404).json({ message: 'User not found. Cannot create order.' });
    }

    const newOrder = new Order({
      user: userId,
      items,
      totalAmount,
      shippingAddress,
      // status defaults to 'pending' as per schema
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error creating order', error: error.message });
  }
};

// This function was previously in userController.js
exports.getUserOrders = async (req, res) => {
  // In a real app, this userId should come from authenticated user (req.user.id)
  // For now, we'll take it from the request parameters as defined in the user routes
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({ message: 'User ID is required to fetch orders.' });
  }

  try {
    const orders = await Order.find({ user: userId }).populate('user', 'username email'); // Populate user details
    if (!orders) {
      return res.status(404).json({ message: 'No orders found for this user.' });
    }
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user orders', error: error.message });
  }
};


// Keeping these as placeholders as per subtask focus
exports.getAllOrders = (req, res) => {
  res.json({ message: 'Get all orders placeholder (admin)' });
};

exports.getOrderById = (req, res) => {
  res.json({ message: `Get order with ID ${req.params.id} placeholder` });
};

exports.updateOrderStatus = (req, res) => {
  res.json({ message: `Update status for order with ID ${req.params.id} placeholder (admin)` });
};
