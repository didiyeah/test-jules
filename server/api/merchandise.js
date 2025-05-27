const express = require('express');
const router = express.Router();
const merchandiseController = require('../controllers/merchandiseController');

// GET all merchandise
router.get('/', merchandiseController.getAllMerchandise);

// GET a single merchandise item by ID
router.get('/:id', merchandiseController.getMerchandiseById);

// POST a new merchandise item
router.post('/', merchandiseController.createMerchandise);

// PUT to update a merchandise item by ID
router.put('/:id', merchandiseController.updateMerchandise);

// DELETE a merchandise item by ID
router.delete('/:id', merchandiseController.deleteMerchandise);

module.exports = router;
