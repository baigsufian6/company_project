import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import rohan from "./imagess/rohans.png";
import "./construct.css";

const NavbarConstruct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  const costCalculatorRef = useRef(null);

  const handleClick = () => {
    if (costCalculatorRef.current) {
      costCalculatorRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close navbar after clicking
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close navbar after clicking any link
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
          <li>
            <Link to="/construction" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link to="/construction/projects" onClick={handleLinkClick}>Projects</Link>
          </li>
          <li>
            <Link to="/construction/about" onClick={handleLinkClick}>About Us</Link>
          </li>
          <li>
            <Link to="/construction/careers" onClick={handleLinkClick}>Careers</Link>
          </li>
          <li>
            <Link to="/construction/contact" onClick={handleLinkClick}>Contact Us</Link>
          </li>
          <li>
            <Link to="/plots" onClick={handleLinkClick}>Plots</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLinkClick}>Home Page</Link>
          </li>
        </ul>
        <Link to="/construction/calculate" onClick={handleClick}>
          <button className="cta-navbar-button">Get Cost Estimation</button>
        </Link>
      </nav>
    </header>
  );
};

export default NavbarConstruct;