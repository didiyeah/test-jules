import React from 'react';
import MerchandiseItem from './MerchandiseItem';
import './MerchandiseList.css'; // Import the CSS file

const MerchandiseList = ({ items, onAddToCart }) => {
  if (!items || items.length === 0) {
    return <p className="no-items-message">No merchandise available at the moment.</p>;
  }

  return (
    <div className="merchandise-list">
      {items.map(item => (
        <MerchandiseItem key={item.id} item={item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default MerchandiseList;
