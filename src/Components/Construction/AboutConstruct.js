import {React, useEffect} from 'react';
import './construct.css';
import home from './imagess/sad1.png'
import jon from './imagess/john.jpg';
import rambo from './imagess/rambo.webp';
import col from './imagess/cool.jpg';
import { FaPhoneAlt, FaTools, FaDollarSign, FaCheckCircle } from 'react-icons/fa';
import { FaCalendarAlt, FaBuilding, FaHandshake, FaTrophy, FaQuoteLeft } from 'react-icons/fa';




const AboutConstruct = () => {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about-construct">
      <div className="about-section">
        <img src={home} alt="House" className="house-image" />
        <h1 className="about-heading">ABOUT US</h1>
      </div>

      <div className="our-story">
        <h2>Our Story</h2>
        <h1>Your go-to hub for Righteous Construction Excellence</h1>
        <p>Rohan Infra is a homegrown construction gem founded on skill, openness, top-tier products, and dedicated customer care.</p>
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
       

        <div className="timeline-section">
  <h2>Our Journey</h2>
  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-icon">
        <FaCalendarAlt size={30} />
      </div>
      <div className="timeline-content">
        <div className="timeline-date">2017</div>
        <div className="timeline-description">
          <h3>Company Founded</h3>
          <p>Started with a vision to revolutionize the construction industry with quality and innovation.</p>
        </div>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-icon">
        <FaBuilding size={30} />
      </div>
      <div className="timeline-content">
        <div className="timeline-date">2018-2019</div>
        <div className="timeline-description">
          <h3> Early Growth</h3>
          <p>Within two years, we achieved remarkable growth, expanding our client base and completing major projects.</p>
        </div>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-icon">
        <FaHandshake size={30} />
      </div>
      <div className="timeline-content">
        <div className="timeline-date">2020-2021</div>
        <div className="timeline-description">
          <h3>Expansion & Innovation</h3>
          <p>Despite the global challenges of 2020, we innovated and adapted. Our commitment to delivering quality led to new offerings, partnerships, and an expansion into new regions.</p>
        </div>
      </div>
    </div>
    <div className="timeline-item">
      <div className="timeline-icon">
        <FaTrophy size={30} />
      </div>
      <div className="timeline-content">
        <div className="timeline-date">2022 & Beyond</div>
        <div className="timeline-description">
          <h3>Achievements</h3>
          <p>Highlight the most recent achievements, such as industry awards, cutting-edge innovations, or global expansion. </p>
        </div>
      </div>
    </div>
  </div>
</div>


<section className="testimonials-section">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-slider">
        <div className="testimonial">
          <div className="testimonial-quote">
            <FaQuoteLeft size={40} />
          </div>
          <p>"Rohan Infra transformed our vision into reality with their exceptional service and expertise. Highly recommended!"</p>
          <div className="testimonial-author">
            <img src={jon} alt="Jane Doe" />
            <div className="testimonial-author-info">
              <span className="testimonial-author-name">Jane Doe</span>
              <span className="testimonial-author-title">Homeowner</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-quote">
            <FaQuoteLeft size={40} />
          </div>
          <p>"The attention to detail and professionalism shown by Rohan Infra was outstanding. They delivered beyond our expectations."</p>
          <div className="testimonial-author">
            <img src={rambo} alt="John Smith" />
            <div className="testimonial-author-info">
              <span className="testimonial-author-name">John Smith</span>
              <span className="testimonial-author-title">Real Estate Developer</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <div className="testimonial-quote">
            <FaQuoteLeft size={40} />
          </div>
          <p>"Working with Rohan Infra was a pleasure. Their team was responsive, knowledgeable, and committed to excellence."</p>
          <div className="testimonial-author">
            <img src={col} alt="Steven cook" />
            <div className="testimonial-author-info">
              <span className="testimonial-author-name">Steven Cook</span>
              <span className="testimonial-author-title">Architect</span>
            </div>
          </div>
        </div>
      </div>
    </section>


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
