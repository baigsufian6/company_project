import React from 'react';
import './construct.css';
import home from './imagess/sad1.png'
import { FaPhoneAlt, FaTools, FaDollarSign, FaCheckCircle } from 'react-icons/fa';
import home1 from './imagess/mane.avif'


const AboutConstruct = () => {
  return (
    <div className="about-construct">
      <div className="about-section">
        <img src={home} alt="House" className="house-image" />
        <h1 className="about-heading">ABOUT US</h1>
      </div>

      <div className="our-story">
        <h2>Our Story</h2>
        <h1>Your go-to hub for Righteous Construction Excellence</h1>
        <p>Rightcon, once SLV Contractors, is a homegrown construction gem founded on skill, openness, top-tier products, and dedicated customer care.</p>
        <div className="our-stats">
          <div className="stat-item">
            <h3>100+</h3>
            <p>Home Crafted</p>
          </div>
          <div className="stat-item">
            <h3>150+</h3>
            <p>Clients Satisfied</p>
          </div>
          <div className="stat-item">
            <h3>50Cr+</h3>
            <p>Budget Project Handled</p>
          </div>
        </div>
        <div className="video-section">
          <img src={home1} alt="Video Thumbnail" className="video-thumbnail" />
          <a href="https://www.youtube.com/watch?v=y3nCkaVVsk0" className="play-button">Watch Video</a>
        </div>
      </div>

      <div className="what-sets-us-apart">
        <h2>What Sets Us Apart</h2>
        <h1>Anticipate More with Rightcon's Touch!</h1>
        <div className="features">
          <div className="feature-item">
            <FaPhoneAlt className="feature-icon" />
            <h3>Around-the-Clock Customer Care</h3>
            <p>Rest easy with our 12/7 support, ensuring you're heard whenever you need us.</p>
          </div>
          <div className="feature-item">
            <FaTools className="feature-icon" />
            <h3>No Subcontractors, Just Rightcon</h3>
            <p>From concept to completion, your project is handled with our in-house expertise.</p>
          </div>
          <div className="feature-item">
            <FaDollarSign className="feature-icon" />
            <h3>Right Pricing, Every Time</h3>
            <p>Tailoring high-value projects to your budget, without unexpected costs - that's the Rightcon promise.</p>
          </div>
          <div className="feature-item">
            <FaCheckCircle className="feature-icon" />
            <h3>Meticulous Examination</h3>
            <p>We perform 154 quality checks throughout your project, ensuring excellence from start to finish.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutConstruct;
