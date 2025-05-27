import React from 'react';
import './TicketItem.css'; // Import the CSS file

const TicketItem = ({ ticket, onAddToCart }) => {
  return (
    <div className="ticket-item">
      {ticket.isEcological && <span className="eco-badge">🌿 Eco-Friendly</span>}
      <h3>{ticket.name}</h3>
      <p>{ticket.description}</p>
      <p className="price">${ticket.price.toFixed(2)}</p>
      <p className="details">Type: {ticket.type} | Validity: {ticket.validity}</p>
      <button onClick={() => onAddToCart(ticket)} className="button button-primary">
        Add to Cart
      </button>
    </div>
  );
};

export default TicketItem;
