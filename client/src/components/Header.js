import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import the CSS file

const Header = () => {
  return (
    <header>
      <div className="container"> {/* Added container for better layout control */}
        <div className="logo-placeholder">
          {/* Placeholder for logo image: <img src="/path/to/logo.png" alt="Park Logo" /> */}
          EcoSpark Adventures
        </div>
        <nav>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/tickets" className={({ isActive }) => isActive ? 'active' : ''}>Tickets</NavLink></li>
            <li><NavLink to="/merchandise" className={({ isActive }) => isActive ? 'active' : ''}>Merchandise</NavLink></li>
            <li><NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : ''}>Cart</NavLink></li>
            <li><NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
