import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import rohan from './imagess/rohans.png';
import './construct.css';

const FooterConstruct = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo">
            <img src={rohan} alt="Rightcon Logo" />
          </div>
          <p>A Team of Seasoned construction Professionals driven by Passion.</p>
          <div className="social-icons">
            <a href="/"><FaFacebookF /></a>
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaLinkedinIn /></a>
            <a href="/"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-middle">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
          <ul>
            <li><a href="#services">Construction Services</a></li>
            <li><a href="#interior-design">Interior Design Services</a></li>
            <li><a href="#architectural-design">Architectural Design Services</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <p>Join our newsletter to stay up to date on features and releases.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">Subscribe ➔</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Rohan Infra All rights reserved.</p>
        <div className="footer-links">
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms-of-service">Terms of Service</a>
          <a href="#built-by">Built By [Your Company]</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterConstruct;
