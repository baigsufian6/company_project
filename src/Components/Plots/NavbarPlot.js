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

  return (
    <div className="custom-navbar">
      <div className="custom-nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={`custom-nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><Link to="/plots">Home</Link></li>
          <li><Link to="about">About Us</Link></li>
          <li><Link to="project">Project</Link></li>
          <li><Link to="career">Career</Link></li>
          <li><Link to="contact">Contact</Link></li>
          <li><Link to="/construction">Construction</Link></li>
          <li><Link to="/">Home Page</Link></li>
        </ul>
      </div>
      <div className='custom-box'>
        <div className="custom-contact-info">
          <FaPhoneAlt />
          <a href="tel:+1234567890">+91 9742571664</a>
        </div>
        <Link to="calculator">
          <button className="custom-cta-navbar-button">Get Cost Estimation</button>
        </Link>
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
