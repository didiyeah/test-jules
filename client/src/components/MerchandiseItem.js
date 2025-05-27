import React from 'react';
import './MerchandiseItem.css'; // Import the CSS file

const MerchandiseItem = ({ item, onAddToCart }) => {
  return (
    <div className="merchandise-item">
      {/* Placeholder for image. In a real app, use an <img> tag */}
      <div className="item-image-placeholder">
        {item.imageUrl ? <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }} /> : 'Image coming soon'}
      </div>
      {item.isEcoFriendly && <span className="eco-badge">🌍 Eco-Friendly</span>}
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p className="price">${item.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(item)} className="button button-secondary">
        Add to Cart
      </button>
    </div>
  );
};

export default MerchandiseItem;
