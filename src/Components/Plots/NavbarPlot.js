import React, { useState } from 'react';
import './NavbarPlot.css';
import logo from './Assets/rohanlogo.png';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    // Close mobile menu on link click
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="custom-navbar">
      <div className="custom-nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`custom-nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/plots" onClick={handleLinkClick}>Home</Link></li>
          <li><Link to="about" onClick={handleLinkClick}>About Us</Link></li>
          <li><Link to="project" onClick={handleLinkClick}>Project</Link></li>
          <li><Link to="career" onClick={handleLinkClick}>Career</Link></li>
          <li><Link to="contact" onClick={handleLinkClick}>Contact</Link></li>
          <li><Link to="/construction" onClick={handleLinkClick}>Construction</Link></li>
          <li><Link to="/" onClick={handleLinkClick}>Home Page</Link></li>
          <li className="custom-phone-info">
            <FaPhoneAlt />
            <a href="tel:+1234567890">+91 9742571664</a>
          </li>
          <li>
            <Link to="calculator">
              <button className="custom-cta-navbar-button">Get Cost Estimation</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="custom-mobile-menu-icon" onClick={toggleMobileMenu}>
        <span className="custom-bar"></span>
        <span className="custom-bar"></span>
        <span className="custom-bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
