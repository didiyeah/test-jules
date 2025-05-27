const express = require('express');
const router = express.Router();

const ticketRoutes = require('./tickets');
const merchandiseRoutes = require('./merchandise');
const userRoutes = require('./users');
const orderRoutes = require('./orders');

router.use('/tickets', ticketRoutes);
router.use('/merchandise', merchandiseRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
