import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.css";
import rohans from "./images/rohans.png";
import construct from "./images/constructionImg.jpg";
import plots from "./images/plotImg.jpg";
import good from "./images/prop1.webp";
import good1 from "./images/prop2.webp";
import good2 from "./images/prop3.webp";
import good3 from "./images/prop4.webp";

const projects = [
  {
    id: 1,
    image: good,
  },
  {
    id: 2,
    image: good1,
  },
  {
    id: 3,
    image: good2,
  },
  {
    id: 4,
    image: good3,
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
      );
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

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
        {/* Home Section */}
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

        {/* Services Section */}
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

        {/* Improved Featured Projects Section */}
        <section id="projects" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
              Featured Projects
            </h2>
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {projects.concat(projects.slice(0, 2)).map((project, index) => (
                  <div
                    key={`${project.id}-${index}`}
                    className="w-1/3 flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 z-10"
                disabled={isTransitioning}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 z-10"
                disabled={isTransitioning}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
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

        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonial-carousel">
            {/* Add a carousel component here with client testimonials */}
          </div>
        </section>

        {/* Contact Section */}
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

      {/* Footer */}
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
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: info@rohaninfra.com</p>
            <p>Phone: +91 12345 67890</p>
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
