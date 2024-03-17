import React from 'react';
import './footerstyles.css';
import logo from '../../src/Assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <div className="hurray-logo-container">
              <img style={{ marginBottom: '10px', marginTop:'-15px' }} src={logo} alt="HURRAY" className="white-logo" />
            </div>

            <p>
              #808 & 809, 7th Floor, Oxford Tower, Kodihalli,
              Old Airport Road
              Bangalore, Karnataka 560008
            </p>
            <div className="contact">
              <span><strong>Phone:</strong> +91 9900426501 / +91-8792743862</span>
              <span><strong>Email:</strong> <a href="mailto:info@hurrayedutech.com" className="contact-link">info@hurrayedutech.com</a></span>
            </div>
          </div>



          <div className="footer-section links">
            <h2>Useful Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Courser</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </div>
          <div className="footer-section links">
            <h2>Our Programs</h2>
            <ul>
              <li><a href="#">OVERSEAS EDUCATION</a></li>
              <li><a href="#">IELTS TRAINING</a></li>
              <li><a href="#">PTE TRAINING</a></li>
              <li><a href="#">OET TRAINING</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company Name. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
