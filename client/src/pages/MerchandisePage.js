import React, { useState, useEffect } from 'react';
import MerchandiseList from '../components/MerchandiseList';
// import './MerchandisePage.css'; // Optional: if more specific styles are needed

// Placeholder merchandise data
const dummyMerchandise = [
  { id: 'm1', name: 'Park Mascot Plush Toy', description: 'Cuddly and fun! Made from recycled materials.', price: 25, imageUrl: 'https://via.placeholder.com/150/FFC0CB/000000?Text=Plush+Toy', isEcoFriendly: true },
  { id: 'm2', name: 'ThrillSeeker T-Shirt (Organic Cotton)', description: 'Show off your adventurous spirit with this organic cotton tee.', price: 22, imageUrl: 'https://via.placeholder.com/150/ADD8E6/000000?Text=T-Shirt', isEcoFriendly: true },
  { id: 'm3', name: 'Logo Cap', description: 'Stylish cap with park logo.', price: 15, imageUrl: 'https://via.placeholder.com/150/90EE90/000000?Text=Cap', isEcoFriendly: false },
  { id: 'm4', name: 'Bamboo Keychain Set', description: 'A set of 3 eco-friendly bamboo keychains.', price: 10, imageUrl: 'https://via.placeholder.com/150/FFFFE0/000000?Text=Keychain', isEcoFriendly: true },
];

const MerchandisePage = () => {
  // In a real app, you'd fetch this data from an API
  const [merchandise, setMerchandise] = useState([]);

  useEffect(() => {
    // Simulate API call
    setMerchandise(dummyMerchandise);
  }, []);

  const handleAddToCart = (item) => {
    // For now, just log to console. This will be implemented with context later.
    console.log('Added to cart:', item);
    alert(`${item.name} added to cart! (Placeholder)`);
  };

  return (
    <div className="page-container">
      <h1>Official Merchandise</h1>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>Take a piece of the fun home with you! Look for the 🌍 for our eco-friendly products.</p>
      <MerchandiseList items={merchandise} onAddToCart={handleAddToCart} />
    </div>
  );
};

export default MerchandisePage;
