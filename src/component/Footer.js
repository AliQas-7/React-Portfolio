import React from 'react';
import './Style.css';

const Footer = (mode) => {
  return (
    <footer className={`footer ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Soft Qashe. All rights reserved.</p>
        <div className="footer-links">
          <a href="/ContactUs">Contact</a>
          <a href="/PrivacyPolicy">Privacy Policy</a>

            <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>

            <a href="mailto:roman10132526@gmail.com">
              <i className="far fa-envelope"></i>
            </a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;