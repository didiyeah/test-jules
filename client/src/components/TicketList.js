import React from 'react';
import TicketItem from './TicketItem';
import './TicketList.css'; // Import the CSS file

const TicketList = ({ tickets, onAddToCart }) => {
  if (!tickets || tickets.length === 0) {
    return <p className="no-items-message">No tickets available at the moment.</p>;
  }

  return (
    <div className="ticket-list">
      {tickets.map(ticket => (
        <TicketItem key={ticket.id} ticket={ticket} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default TicketList;
