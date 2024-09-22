// src/AboutUs.js
import {React, useEffect} from 'react';
import './AboutPlot.css'; // Create a separate CSS file for styling
import logo from '../Assets/logo.jpg'; // Make sure the path to the logo image is correct
import sufi from '../Assets/sufi.jpg';
import abt from '../Assets/about .jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye, faHandshake, faPoll } from '@fortawesome/free-solid-svg-icons';
import { faUser, faFileAlt,fapoll, faChartLine, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { faSurvey } from '@fortawesome/free-solid-svg-icons';
import { faHome, faBuilding } from '@fortawesome/free-solid-svg-icons';
import narendra from '../Assets/narendra.jpg';
import ceo from '../Assets/ceo.jpg'
import Footer from '../FooterPlot'
import Count from './Count';
import ghar from '../Assets/ghar.jpg'

const AboutPlot = () => {

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);
  
  const steps = [
    { icon: faUser, title: 'Marketing', description: 'Marketing will be done through flyers,ads,social media.And client discussion will happen over through the phone call,sometimes direct conversion at Organisation.' },
    { icon: faFileAlt, title: 'Follow-up', description: 'Follow-up with the client for better clarification,coveying details about the plots/sites.' },
    { icon: faHandshake, title: 'Schedule Site Visit', description: 'Schedule the site visit according to the availability of clients and convey the visting procedure to the clients like travell,location.' },
    { icon: faPoll, title: 'Survey', description: 'We will provide brief descriptions about the plots/sites to the client at direct visit and do survey of the plots.' },
    { icon: faChartLine, title: 'Booking', description: 'Booking of plots/sites with client confirmation and provide more information about plots and its benefits & Aminities.' },
    { icon: faClipboardCheck, title: 'Registration', description: 'CRM Team will do the Registration and assist with the clients for payment,loan process,approval.' },
  ];
  return (
   <div className='plot-about-container'>
   <div className='sufi-img'>
    <img src={sufi}></img>
    </div>
    {/* <div className="about-us-container">
      {/* Left goalbox: Text Content */}
      
    <div className="about-section">
      <section className="about-us">
        <div className="text-content">
          <h2>About Us</h2>
           <p className='aalu'>           
            Rohan Infra Builders & Developers is a leading real estate firm
            known for creating high-quality, innovative properties that meet
            the modern lifestyle. Our commitment to excellence and customer
            satisfaction drives us to build spaces that inspire.
          </p>
        </div>
        <div className="image-content">
          <img src={logo} alt="About Us" />
        </div>
      </section>

      <section className="mission">
        <div className="image-content">
          <img src={ghar} alt="Our Mission" />
        </div>
        <div className="text-content">
          <h2>Our Mission: Building Dreams, Creating Homes</h2>
           <p className='aalu'>            
           At Rohan Infra Builders, we believe in turning dreams into reality.
            Our mission is not just to build structures, but to create homes
            where families grow and businesses thrive. We are committed to
            delivering projects that blend luxury with sustainability.
          </p>
        </div>
      </section>

      <section className="ours-story">
        <div className="text-content">
          <h2>Our Story</h2>
           <p className='aalu'>           
            Founded in 2017, Rohan Infra Builders & Developers has grown into
            one of the most trusted names in real estate. Our journey started
            with a vision to redefine urban living with innovative, sustainable
            projects. Over the years, we have expanded our portfolio to include
            residential, commercial, and industrial properties, transforming
            cityscapes and creating landmark developments across the country.
          </p>
        </div>
        <div className="image-content">
          <img src={abt} alt="Our Story" />
        </div>
      </section>
    </div>


    <Count/>


    <div className="goals-mission">
      <div className="content-wrapper">
        <h2>Our Goals and Mission</h2>
        
        <div className="sections-wrapper">
          <div className="goalbox">
            <FontAwesomeIcon icon={faBullseye} className="icon" />
            <h3>GOALS</h3>
             <p className='aalu'>              Our goal is to make your Dreams a reality. We deliver with trust, transparency, competence, and proven outcomes. Your search for a good property ends here.
            </p>
          </div>

          <div className="goalbox">
            <FontAwesomeIcon icon={faEye} className="icon" />
            <h3>VISION</h3>
             <p className='aalu'>              The fundamental aim is to cater to the basic needs of a customer, which is to provide premier property to all our customers and that too at an affordable price.
            </p>
          </div>

          <div className="goalbox">
            <FontAwesomeIcon icon={faHandshake} className="icon" />
            <h3>MISSION</h3>
             <p className='aalu'>              Provide downright solutions to satisfy our customers and maximize their investment returns. The values of trust, accountability, and transparency come naturally with Oraiyan Groups.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="how-it-works">
      <h2>How It Work</h2>
      <div className="underline"></div>
      <p className="subtitle">We listed our oppertunity and servies as a real estate company</p>
      
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step">
            <div className="step-icon">
              <span className="step-number">{index + 1}</span>
              <FontAwesomeIcon icon={step.icon} />
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>

    

    <section className="founders-section">
      <h2 className="founder-section-title">Meet Our Founders</h2>
      <p className="section-subtitle">
        It is said that leaders don't create followers, they create more leaders.
      </p>

      <div className="founders-grid">
        <div className="founder-card">
          <img
            src={ceo} // Replace with actual image URL
            alt="H V GURUMURTHI"
            className="founder-image"
          />
          <h3 className="founder-name">Rohan K N</h3>
          <p className="founder-title">FOUNDER AND CEO</p>
        </div>

        <div className="founder-card">
          <img
            src={narendra} // Replace with actual image URL
            alt="K VINOD RAO"
            className="founder-image"
          />
          <h3 className="founder-name">Narendra Babu</h3>
          <p className="founder-title">CO-FOUNDER AND MANAGING DIRECTOR</p>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
  );
};



export default AboutPlot;
