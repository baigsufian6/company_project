import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import rohan from './imagess/rohans.png';
import './construct.css';

const NavbarConstruct = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={rohan} alt="Rightcon Logo" />
        </div>
        <div className="hamburger" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <nav className={isOpen ? "nav-links open" : "nav-links"}>
        <ul>
          <li><Link to="/construction">Home</Link></li>
          <li><Link to="/construction/projects">Projects</Link></li>
          <li><Link to="/construction/services">Services</Link></li>
          <li><Link to="/construction/about">About Us</Link></li>
          <li><Link to="/construction/blogs">Blogs</Link></li>
          <li><Link to="/construction/careers">Careers</Link></li>
          <li><Link to="/construction/contact">Contact Us</Link></li>
        </ul>
        <button className="cta-navbar-button">Get Cost Estimation</button>
      </nav>
    </header>
  );
};

export default NavbarConstruct;