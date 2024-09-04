

import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Main.css';
import rohanlogo from './Plots/Assets/rohanlogo.png'; // or .jpg, .svg, etc.

const Home = () => {
  return (
    <div className="headpart">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img src={rohanlogo} alt="Rohan Infra Builders" />
          <h3>RIBD</h3>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="cta-button">Enquire</button>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h3>Welcome!</h3>
            <h2>We are Rohan Infra Builders and Developers</h2>
            <div className="divider"></div>
            <h1>Let your Dreams Be your Wings.</h1>
            <div className="signature">
              <h4>Rohan Infra</h4>
              <img
                src="https://websitedemos.net/real-estate-consultant-02/wp-content/uploads/sites/728/2020/11/signature-01-free-img.png"
                alt="Signature"
              />
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://websitedemos.net/real-estate-consultant-02/wp-content/uploads/sites/728/2020/11/consultant-01-free-img.png"
              alt="Consultant"
            />
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <h1>How may I help?</h1>
          <div className="service">
            <h3>What Are You Looking For?</h3>
            <div className="choice">
              <button className='chambu'><Link to="/plots" className="btns">Plots</Link></button>
              <button><Link to="/construction" className="btns">Construction</Link></button>
            </div>
          </div>
          <div className="divider"></div>
          <div className="service-grid">
            {/* Add service items here */}
          </div>
        </section>

        {/* About Section */}
        <section className="about">
          <div className="about-content">
            <h3>About Us</h3>
            <h2>"Transforming Dreams into Reality: Rohan Infra Builders — Your Premier Choice for Quality Homes in Bangalore"</h2>
            <div className="divider"></div>
            <p>At Rohan Infra Builders and Developers, we turn your property dreams into reality. With over 21 successful projects across Bangalore, we are known for our trust, quality, and customer satisfaction.</p>
          </div>
          <div className="about-image">
            <img
              src="https://websitedemos.net/real-estate-consultant-02/wp-content/uploads/sites/728/2020/11/consultant-02-free-img.png"
              alt="About"
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h2>What My Clients Say</h2>
          <div className="divider"></div>
          <div className="testimonial-grid">
            {/* Add testimonial items here */}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img className="rohan-img" src={rohanlogo} alt="RIBD Logo" />
            <h2>RIBD</h2>
          </div>

          <div className="footer-contact">
            <h4>Contact</h4>
            <p>929-242-6868</p>
            <p>rohaninfrabuilderrs@gmail.com</p>
            <h4>Address</h4>
            <p>#342, 2nd and 3rd Floor, Dr. Rajkumar Road</p>
            <p>Beside AL-BEK Restaurant</p>
            <p>6th Block Rajajinagar, Bengaluru - 560010</p>
          </div>

          <div className="footer-social">
            <div className="facebook">
              <FontAwesomeIcon icon={['fab', 'facebook-square']} />
            </div>
            <div className="insta">
              <FontAwesomeIcon icon={['fab', 'instagram']} style={{ color: '#f8f9fc' }} />
            </div>
            <div className="twitter">
              <FontAwesomeIcon icon={['fab', 'twitter-square']} style={{ color: '#ebedef' }} />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2024 Real Estate Company</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;