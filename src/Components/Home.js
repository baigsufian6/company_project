import React, { useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { FaMapMarkerAlt, FaBuilding, FaBars, FaTimes } from 'react-icons/fa';
import { LayoutDashboard, Home as HomeIcon } from 'lucide-react';
import plots from './images/plotImg.jpg';
import consti from './images/slider_2.jpg';
import prop1 from './images/prop1.webp';
import prop2 from './images/prop2.webp';
import prop4 from './images/prop4.webp';
import prop5 from './images/prop5.webp';
import layout from './images/Layout-300x243.jpg';
import market from './images/1603747793-GettyImages-1061234002.webp';
import rohan from './images/rohans.png';
import './Main.css';

const ServiceCard = ({ title, description, icon: Icon, href, image }) => (
  <div
    className="xpat-service-card bg-gray-100 p-8 rounded-lg shadow-md relative overflow-hidden cursor-pointer transition-all duration-300 hover:translate-y-[-10px] hover:bg-gray-900 hover:text-white group "
    onClick={() => window.location.href = href}
  >
    <div className="relative z-10">
      <Icon className="w-12 h-12 mb-4 transition-colors duration-300 group-hover:text-white" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <a href={href} className="inline-block font-bold text-blue-600 group-hover:text-white">
        Read More
      </a>
    </div>
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-20"
    />
  </div>
);

const ServicesGrid = () => {
  const services = [
    {
      title: "Plots",
      description: "Find the perfect plot with prime locations tailored to your needs.",
      icon: FaMapMarkerAlt,
      href: "/plots",
      image: plots
    },
    {
      title: "Construction",
      description: "Expert construction services built with precision and quality.",
      icon: FaBuilding,
      href: "/construction",
      image: consti
    },
    {
      title: "Layout Development",
      description: "Get expert help in designing your ideal layout.",
      icon: LayoutDashboard,
      href: "/plots",
      image: layout
    },
    {
      title: "Residential Real Estate Marketing",
      description: "Unlock the best market value for your plots with our expert sales strategies.",
      icon: HomeIcon,
      href: "/plots",
      image: market
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleContactClick = () => {
    document.querySelector('.xpat-contact').scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="xpat-home">
      <header className="xpat-header">
        <img src={rohan} alt="Construction" className="xpat-logo" />

        {/* Hamburger menu button (visible on small screens) */}
        <div className="xpat-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Navigation links */}
        <nav className={`xpat-nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home">Home</a>
          <a href="#aboutus">About us</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="/plots">Plots</a>
          <a href="/construction">Construction</a>
          <a href="#contactus" onClick={handleContactClick}>Contact us</a>
        </nav>

        <button className="xpat-appointment-btn">Get Appointment</button>
      </header>

      <section className="xpat-hero" id="home">
        <h1>An Expert Construction Service You Can Trust</h1>
        <p>Creating architectural and creative solutions Creating architectural and creative solutions</p>
        <button className="xpat-detail-btn" onClick={() => navigate('/construction')}>More Detail</button>
      </section>

      <section className="xpat-company" id="aboutus">
        <h2>Building Your Dream Since 1995</h2>
        <div className="xpat-company-content">
          <div className="xpat-company-text">
            <p>At Rohan Infra, we are dedicated to providing expert construction and plot selling services. Our commitment to excellence and precision ensures that every project we undertake is handled with the utmost care and professionalism.</p>
            <p>We focus on delivering results that meet and exceed our clients' expectations, with attention to detail and a clear understanding of their needs. Our team is experienced, knowledgeable, and dedicated to achieving the best outcomes, making Rohan Infra a trusted name in the industry.</p>
          </div>
          <div className="xpat-company-image"></div>
        </div>
      </section>

      <section className="xpat-services" id="services">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <ServicesGrid />
      </section>

      <section className="xpat-features">
        <div className="xpat-features-content">
          <h2>We Service You More</h2>
          <p>At Rohan Infra, we excel in construction and plot selling, ensuring every project is handled with precision and care. Our commitment to excellence turns your vision into reality.</p>
          <ul className="xpat-features-list">
            <li>Best Quality Work</li>
            <li>Top Quality Equipment</li>
            <li>Experienced Workers</li>
            <li>Best Civil Engineers</li>
            <li>Budget-Friendly</li>
            <li>Great Understanding</li>
            <li>Emergency Support</li>
            <li>Responsible Reasonable</li>
          </ul>
          <button className="xpat-contact-btn" id="contactus" onClick={handleContactClick}>Contact US</button>
        </div>
        <div className="xpat-features-image"></div>
      </section>

      <section className="xpat-projects" id="projects">
        <h2>Our Projects</h2>
        <Slider {...sliderSettings} className="xpat-slider">
          <div className="xpat-project-slide">
            <img src={prop1} alt="Project 1" />
          </div>
          <div className="xpat-project-slide">
            <img src={prop2} alt="Project 2" />
          </div>
          <div className="xpat-project-slide">
            <img src={prop4} alt="Project 4" />
          </div>
          <div className="xpat-project-slide">
            <img src={prop5} alt="Project 5" />
          </div>
        </Slider>
      </section>

      <section className="xpat-contact" id="contactus">
        <div className="xpat-contact-content">
          <h2>Contact Us</h2>
          <form className="xpat-contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit" className="xpat-submit-btn">Send Message</button>
          </form>
        </div>
        <div className="xpat-contact-info">
          <h3>Get In Touch</h3>
          <p>Address: Rajajinagar, Bengaluru, Karnataka 560010</p>
          <p>Phone: (+91) 6361285668</p>
          <p>Email: rohaninfrabuilderrs@gmail.com</p>
          <div className="xpat-social-icons">
            <Facebook />
            <Twitter />
            <Instagram />
            <Linkedin />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
