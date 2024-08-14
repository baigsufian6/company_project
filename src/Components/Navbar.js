import React from 'react';
import "./Main.css";
function Navbar() {
  return (
    <header className="navbar-header">
      <nav className="navbar">
        <a href="/" className="nav-link">
          HOME
        </a>
        <a href="/SERVICES" className="nav-link">
          SERVICES
        </a>
        <a href="/ABOUT US" className="nav-link">
          ABOUT US
        </a>
        <a href="/REVIEWS" className="nav-link">
          REVIEWS
        </a>
        <a href="/CONTACT US" className="nav-link">
          CONTACT US
        </a>
        
      </nav>
    </header>
  );
}

export default Navbar;
