import React from 'react';
import FooterLogo from "./assets/footerLogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <img src={FooterLogo} alt="Footer Logo" className="footer-logo" />
          <div className="social-icons">
            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} className="icon" /></a>
            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
            <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedinIn} className="icon" /></a>
          </div>
        </div>
        <div className="footer-column">
          <h5 className="footer-heading">Expertise</h5>
          <ul className="footer-list">
            <li><a href="#">Design</a></li>
            <li><a href="#">Specialist Expertise</a></li>
            <li><a href="#">Commercial Advice</a></li>
            <li><a href="#">Traffic & Transport</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5 className="footer-heading">Sectors</h5>
          <ul className="footer-list">
            <li><a href="#">Road</a></li>
            <li><a href="#">Tunnels</a></li>
            <li><a href="#">Bridges</a></li>
            <li><a href="#">Others +</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5 className="footer-heading">Our Business</h5>
          <ul className="footer-list">
            <li><a href="#">Work With Us</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">News</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h5 className="footer-heading">Our Capabilities</h5>
          <ul className="footer-list">
            <li><a href="#">Engineers</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>2021 Case International. All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  );
}
