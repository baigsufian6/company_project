import React from 'react';
import './FooterPlot.css'; // Assuming you are using an external CSS file
import infra from './Assets/rohanlogo.png'

const FooterPlot = () => {
  return (
    <footer className="plot-footer">
      <div className="plot-footer-container">
        {/* Logo and Description Section */}
        <div className="plot-footer-logo-section">
          <img src={infra} alt="Rohan Infra Logo" className="plot-footer-logo" />
          <h3 className="plot-footer-title">ROHAN INFRA</h3>
          <p className="plot-footer-subtitle">Builderrs & Developerrs</p>
          <p className="plot-footer-description">
            Plant your roots in the right plot, and watch your dreams grow.
          </p>
          {/* Social Icons */}
          <div className="plot-footer-social-icons">
            <a href="#" className="plot-social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="plot-social-icon"><i className="fab fa-instagram"></i></a>
            <a href="#" className="plot-social-icon"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="plot-social-icon"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Navigation Links Section */}
        <div className="plot-footer-links-section">
          <ul className="plot-footer-links">
            <li><a href="/Plots">Home</a></li>
            <li><a href="about">About Us</a></li>
            <li><a href="project">Project</a></li>
            <li><a href="career">Careers</a></li>
            <li><a href="contact">Contact</a></li>
        
          </ul>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="plot-footer-newsletter-section">
          <h4 className="plot-newsletter-title">Newsletter</h4>
          <form className="plot-newsletter-form">
            <input type="email" placeholder="Email" className="plot-newsletter-input" />
            <button type="submit" className="plot-subscribe-btn">Subscribe ➔</button>
          </form>
          <p>Email: rohaninfrabuilderrs@gmail.com</p>
          <p>Phone No: +91 9742571664</p>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="plot-footer-bottom">
        <p>© 2024 Rohan Infra All rights reserved.</p>
        <div className="plot-footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Built By Rohan Infra</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterPlot;
