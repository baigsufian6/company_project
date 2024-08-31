import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.css";
import rohans from "./images/rohans.png";
import construct from "./images/constructionImg.jpg";
import plots from "./images/plotImg.jpg";

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo">
          <img src={rohans} alt="Rohan Infra Builders" />
          <h3>RIBD</h3>
        </div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav className="nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
      </header>

      <main>
        <section id="home" className="heroine">
          <div className="heroine-content">
            <h1 className="animate-text">
              Building Dreams, Crafting Realities
            </h1>
            <p className="animate-text-delay">
              Welcome to Rohan Infra Builders and Developers
            </p>
            <Link to="/construction" className="cta-button">
              Get Started
            </Link>
          </div>
          <div className="heroine-image"></div>
        </section>

        <section id="services" className="services">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="service-card">
              <img src={plots} alt="Plots" />
              <h3>Plots</h3>
              <p>Find your perfect plot in prime locations.</p>
              <Link to="/plots" className="learn-more">
                Learn More
              </Link>
            </div>
            <div className="service-card">
              <img src={construct} alt="Construction" />
              <h3>Construction</h3>
              <p>Build your dream home with our expert team.</p>
              <Link to="/construction" className="learn-more">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <h2>Featured Projects</h2>
          <div className="project-slider">
            {/* Add a slider component here with project images and details */}
          </div>
        </section>

        <section id="about" className="about">
          <div className="about-content">
            <h2>About Rohan Infra</h2>
            <p>
              With over two decades of experience and 21 successful projects
              across Bangalore, Rohan Infra Builders and Developers has
              established itself as a trusted name in the construction industry.
              Our commitment to quality, innovation, and customer satisfaction
              sets us apart.
            </p>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">21+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Families</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-carousel">
            {/* Add a carousel component here with client testimonials */}
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Get in Touch</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone" />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={rohans} alt="RIBD Logo" />
            <h2>RIBD</h2>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>929-242-6868</p>
            <p>rohaninfrabuilders@gmail.com</p>
            <p>#342, 2nd and 3rd Floor, Dr. Rajkumar Road</p>
            <p>6th Block Rajajinagar, Bengaluru - 560010</p>
          </div>
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={["fab", "facebook-square"]} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={["fab", "twitter-square"]} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; 2024 Rohan Infra Builders and Developers. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
