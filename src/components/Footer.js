import React from 'react';
import './style/Footer.css'; // Import the footer styles (create this CSS file)

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Aditya Pandya. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/aditya-pandya-9b326b1a0/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/pandya-aditya" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="mailto:aditya@example.com" target="_blank" rel="noopener noreferrer">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;