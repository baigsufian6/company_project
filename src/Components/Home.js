import React from 'react';
import './Main.css';

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="logo">
          <img src="https://websitedemos.net/real-estate-consultant-02/wp-content/uploads/sites/728/2020/11/logo-regular-free-img-150x35.png" alt="Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="cta-button">Consultation</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h3>Welcome!</h3>
            <h2>We are Rohan Infra Builderrs and Developerrs</h2>
            <div className="divider"></div>
            <h1>Making better real estate decisions</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper.</p>
            <div className="signature">
              <h4>Rohan Developers</h4>
              <img src="https://websitedemos.net/real-estate-consultant-02/wp-content/uploads/sites/728/2020/11/signature-01-free-img.png" alt="Signature" />
            </div>
          </div>
          <div className="hero-image">
            <img src="https://websitedemos.net/real-estate-consultant-02/wp-content/uploads/sites/728/2020/11/consultant-01-free-img.png" alt="Consultant" />
          </div>
        </section>

        <section className="services">
          <h2>How I Can Help</h2>
          <div className="divider"></div>
          <div className="service-grid">
            {/* Add service items here */}
          </div>
        </section>

        <section className="about">
          <div className="about-content">
            <h3>About</h3>
            <h2>I Deliver Measurable Results</h2>
            <div className="divider"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          <div className="about-image">
            <img src="https://websitedemos.net/real-estate-consultant-02/wp-content/uploads/sites/728/2020/11/consultant-02-free-img.png" alt="About" />
          </div>
        </section>

        <section className="testimonials">
          <h2>What My Clients Say</h2>
          <div className="divider"></div>
          <div className="testimonial-grid">
            {/* Add testimonial items here */}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="https://websitedemos.net/real-estate-consultant-02/wp-content/uploads/sites/728/2020/11/logo-regular-free-img.png" alt="Logo" />
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>929-242-6868</p>
            <p>email@example.com</p>
            <h4>Address</h4>
            <p>123 Fifth Avenue, New York, NY 10160</p>
          </div>
          <div className="footer-social">
            {/* Add social icons here */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2024 Real Estate Consultant </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;