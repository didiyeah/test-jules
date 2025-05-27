const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET all users (admin only - placeholder for now)
router.get('/', userController.getAllUsers);

// GET a single user by ID (for profile viewing, potentially admin or self)
router.get('/:id', userController.getUserById);

// POST a new user (register)
router.post('/register', userController.registerUser); // Updated to registerUser

// POST for user login
router.post('/login', userController.loginUser);

// PUT to update a user by ID (for profile updates)
router.put('/:id', userController.updateUser);

// DELETE a user by ID (admin only - placeholder for now)
router.delete('/:id', userController.deleteUser);

// GET orders for a specific user - This route has been moved to server/api/orders.js
// router.get('/:userId/orders', userController.getUserOrders);

module.exports = router;
