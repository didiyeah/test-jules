import React, { useState, useEffect } from 'react';
import TicketList from '../components/TicketList';
// import './TicketsPage.css'; // Optional: if more specific styles are needed

// Placeholder ticket data
const dummyTickets = [
  { id: 't1', name: 'Adult Day Pass', description: 'Access to all park areas for one adult.', price: 50, type: 'Adult', validity: '1 Day', isEcological: false },
  { id: 't2', name: 'Child Day Pass', description: 'Access for one child (under 12).', price: 30, type: 'Child', validity: '1 Day', isEcological: false },
  { id: 't3', name: 'Family Eco-Pass (2A, 2C)', description: 'Great value for families, digital-only eco-pass.', price: 145, type: 'Family', validity: '1 Day', isEcological: true },
  { id: 't4', name: 'Season Pass 2024 (Digital)', description: 'Unlimited access for the entire 2024 season, eco-friendly digital pass.', price: 250, type: 'Adult', validity: 'Season 2024', isEcological: true },
];

const TicketsPage = () => {
  // In a real app, you'd fetch this data from an API
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Simulate API call
    setTickets(dummyTickets);
  }, []);

  const handleAddToCart = (ticket) => {
    // For now, just log to console. This will be implemented with context later.
    console.log('Added to cart:', ticket);
    alert(`${ticket.name} added to cart! (Placeholder)`);
  };

  return (
    <div className="page-container">
      <h1>Park Tickets</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>Choose your adventure from the options below. Look for the 🌿 for our eco-friendly digital passes!</p>
      <TicketList tickets={tickets} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default TicketsPage;
