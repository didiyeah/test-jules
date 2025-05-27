import React from 'react';
// import './HomePage.css'; // Optional: if more specific styles are needed

const HomePage = () => {
  return (
    <div className="page-container">
      <h1>Welcome to EcoSpark Adventures!</h1>
      <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '30px' }}>
        Your ultimate destination for family fun and ecological wonders!
      </p>
      
      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        {/* Placeholder for a large, welcoming park image or a slideshow */}
        <div style={{ 
          backgroundColor: '#A9DFBF', /* Light green placeholder */
          padding: '60px 20px', 
          borderRadius: '8px', 
          color: '#145A32' /* Darker green text */
        }}>
          <h2>Experience the Magic of Nature!</h2>
          <p>Explore thrilling rides, beautiful landscapes, and learn about our conservation efforts.</p>
          {/* Image placeholder: <img src="client/src/assets/images/park-panorama.jpg" alt="Park panorama" /> */}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '30px' }}>
        <div style={{ width: '300px', padding: '20px', backgroundColor: '#E8F8F5', borderRadius: '8px', margin: '10px', textAlign: 'center' }}>
          <h3>Buy Tickets</h3>
          <p>Plan your adventure today. Easy online booking!</p>
          {/* Icon placeholder: <img src="client/src/assets/icons/ticket-icon.svg" alt="Ticket icon" /> */}
          <a href="/tickets" className="button button-primary" style={{marginTop: '10px'}}>Get Tickets</a>
        </div>
        <div style={{ width: '300px', padding: '20px', backgroundColor: '#E8F6F3', borderRadius: '8px', margin: '10px', textAlign: 'center' }}>
          <h3>Official Merchandise</h3>
          <p>Take home a piece of EcoSpark!</p>
          {/* Icon placeholder: <img src="client/src/assets/icons/merch-icon.svg" alt="Merchandise icon" /> */}
          <a href="/merchandise" className="button button-secondary" style={{marginTop: '10px'}}>Shop Merch</a>
        </div>
        <div style={{ width: '300px', padding: '20px', backgroundColor: '#FDEDEC', borderRadius: '8px', margin: '10px', textAlign: 'center' }}>
          <h3>Our Mission</h3>
          <p>Learn about our commitment to ecology and fun.</p>
          {/* Icon placeholder: <img src="client/src/assets/icons/eco-icon.svg" alt="Ecology icon" /> */}
          <a href="/about-us" className="button button-accent" style={{marginTop: '10px'}}>Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
