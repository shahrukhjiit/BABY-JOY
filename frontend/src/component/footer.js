// Footer.js
import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>About Baby Shop</h3>
          <p>Baby Shop is your one-stop destination for all your baby needs. From clothing to toys, we have it all!</p>
          <div className="social-media">
            <a href="https://www.facebook.com"><img src="/assest/facebook.png" alt="Facebook" className="social-icon" /></a>
            <a href="https://www.gmail.com"><img src="/assest/gmail.png" alt="Gmail" className="social-icon" /></a>
            <a href="https://www.whatsapp.com"><img src="/assest/whatsapp.png" alt="WhatsApp" className="social-icon" /></a>
            <a href="https://www.twitter.com"><img src="/assest/twitter.png" alt="Twitter" className="social-icon" /></a>
            <a href="https://www.instagram.com"><img src="/assest/instagram.png" alt="insta" className="social-icon" /></a>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@babyshop.com</p>
          <p>Phone: 123-456-7890</p>
          <form className="feedback-form">
            <input type="text" placeholder="Enter your feedback" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="footer-categories">
          <h3>Product Categories</h3>
          <ul className="category-list">
            <li>Baby_gates</li>
            <li>Cabinet Locks</li>
            <li>Outlet Covers</li>
            <li>Furniture</li>
            <li>Edge Guards</li>
            <li>Baby Monitors</li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">&copy; 2024 Baby Shop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
