const express = require('express');
const router = express.Router();
const ticketController = require('../controllers/ticketController');

// GET all tickets
router.get('/', ticketController.getAllTickets);

// GET a single ticket by ID
router.get('/:id', ticketController.getTicketById);

// POST a new ticket
router.post('/', ticketController.createTicket);

// PUT to update a ticket by ID
router.put('/:id', ticketController.updateTicket);

// DELETE a ticket by ID
router.delete('/:id', ticketController.deleteTicket);

module.exports = router;
