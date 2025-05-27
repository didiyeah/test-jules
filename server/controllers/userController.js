const User = require('../models/User');
// const bcrypt = require('bcryptjs'); // Will be used later
// const jwt = require('jsonwebtoken'); // Will be used later

// Renamed createUser to registerUser for clarity as per requirements
exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email or username' });
    }

    // TODO: Hash password before saving
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password, // Storing plain text for now
      // password: hashedPassword, // Will be replaced with hashed password
    });

    const savedUser = await newUser.save();

    // TODO: Generate JWT token
    // For now, return the user object (excluding password)
    const userToReturn = { ...savedUser._doc };
    delete userToReturn.password;

    res.status(201).json(userToReturn);
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // TODO: Compare hashed password
    // const isMatch = await bcrypt.compare(password, user.password);
    // For now, comparing plain text
    if (password !== user.password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // TODO: Generate JWT token
    // For now, return the user object (excluding password)
    const userToReturn = { ...user._doc };
    delete userToReturn.password;

    res.json(userToReturn);
  } catch (error) {
    res.status(500).json({ message: 'Error logging in user', error: error.message });
  }
};

// Keeping these as placeholders as per subtask focus
exports.getAllUsers = (req, res) => {
  res.json({ message: 'Get all users placeholder (admin)' });
};

exports.getUserById = (req, res) => {
  res.json({ message: `Get user with ID ${req.params.id} placeholder` });
};

exports.updateUser = (req, res) => {
  res.json({ message: `Update user with ID ${req.params.id} placeholder` });
};

exports.deleteUser = (req, res) => {
  res.json({ message: `Delete user with ID ${req.params.id} placeholder (admin)` });
};

// This will be implemented in orderController or similar, or refined later
exports.getUserOrders = (req, res) => {
  res.json({ message: `Get orders for user with ID ${req.params.userId} placeholder (moved to orderController)` });
};
