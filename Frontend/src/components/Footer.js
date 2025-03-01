// // Footer.js
// import React from "react";
// import HomePage from './HomePage.css' 

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-links">
//         <a href="#">Help</a>
//         <a href="#">Support</a>
//         <a href="#">Privacy Policy</a>
//         <a href="#">Terms of Use</a>
//       </div>
//       <p>&copy; 2025 FundIt Inc. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;


import React, { useState } from "react";
import "./Footer.css"; // Import CSS
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social media icons

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setMessage("Please enter a valid email.");
      return;
    }
    setMessage("Thank you for subscribing! 🎉");
    setEmail(""); // Clear input after subscribing
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <h3>📩 Stay Updated!</h3>
        <p>Subscribe to receive the latest campaigns and exclusive offers.</p>
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
        {message && <p className="subscribe-message">{message}</p>}
      </div>

      {/* Footer Links and Social Media */}
      <div className="footer-content">
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Help</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>

        <div className="social-media">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook" className="social-icon"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="social-icon"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="social-icon"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="social-icon"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="copyright-section">
        <p>&copy; 2025 FundIt Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
