import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <p>&copy; {currentYear} EcoSpark Adventures. All rights reserved.</p>
        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms-of-service">Terms of Service</a>
          <span>|</span>
          <a href="/contact-us">Contact Us</a>
        </div>
        {/* Placeholder for social media icons */}
        {/* <div className="social-media-icons"> ... </div> */}
      </div>
    </footer>
  );
};

export default Footer;
