const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// GET all orders (admin only - placeholder for now)
router.get('/', orderController.getAllOrders);

// GET a single order by ID
router.get('/:id', orderController.getOrderById);

// POST a new order
router.post('/', orderController.createOrder);

// PUT to update an order's status by ID (e.g., for admin to mark as shipped)
router.patch('/:id/status', orderController.updateOrderStatus); // Using PATCH as it's a partial update

// GET all orders for a specific user
router.get('/user/:userId', orderController.getUserOrders);

module.exports = router;
