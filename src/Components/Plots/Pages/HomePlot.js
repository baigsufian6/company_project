import { React, useEffect, useState } from 'react';
import './HomePlot.css';
import bannerImage from '../Assets/about .jpg'; // Adjust this path accordingly
import projectImage from '../Assets/about1.jpg'; 
import Footer from '../FooterPlot';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Client from '../Pages/ClientsPlot';
import './PlotSalesHomepage.css';
import img1 from '../Assets/bailey-anselme-Bkp3gLygyeA-unsplash.jpg';
import img2 from '../Assets/image1.jpeg';
import img3 from '../Assets/area3.jpg';
import img4 from '../Assets/dillon-kydd-XGvwt544g8k-unsplash.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faEye, faHandshake, faPoll } from '@fortawesome/free-solid-svg-icons';
import { faUser, faFileAlt,fapoll, faChartLine, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { faSurvey } from '@fortawesome/free-solid-svg-icons';
import {faHome, faBuilding } from '@fortawesome/free-solid-svg-icons';

const HomePlot = () => {

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  const plotData = [
    { image: img1, text: 'Build Your Future Home' },
    { image: img2, text: 'Prime Locations Available' },
    { image: img3, text: 'Discover Your Dream Plot' },
    { image: img4, text: 'Invest in Premium Real Estate' },
  ];

  const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % plotData.length);
      }, 5000); // Slides change every 5 seconds
      return () => clearInterval(timer);
    }, []);

    return (
      <>
      <div className='full-home'>
       <div className="plot-sales">
      <div className="plot-sales__slider">
        {plotData.map((plot, index) => (
          <div
            key={index}
            className={`plot-sales__slide ${index === currentSlide ? 'plot-sales__slide--active' : ''}`}
            style={{ backgroundImage: `url(${plot.image})`, transform: `translateX(${(index - currentSlide) * 100}%)` }}
          >
            <div className="plot-sales__slide-content">
              <h2 className="plot-sales__slide-text">{plot.text}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="plot-sales__dots">
        {plotData.map((_, index) => (
          <span
            key={index}
            className={`plot-sales__dot ${index === currentSlide ? 'plot-sales__dot--active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>

    <div className="what-we-do">
      <h2 className="title">What We Do</h2>
      <div className="underline"></div>
      <p className="subtitle">We Turn Dream Home Into Reality and Your Search For A Good Property Ends Here</p>
      
      <div className="services-container">
        <div className="service-card">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          <h3>Construction</h3>
          <p>Oraiyan Groups is one of the leading real estate company in developing residential project. Our aim is to create an environment that enhances the quality of life and provides peace, tranquility, and comfort.</p>
        </div>
        
        <div className="service-card">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
          </svg>
          <h3>Real Estate</h3>
          <p>With several real estate projects underway, Oraiyan Groups is a leading player in the industry, offering a range of dynamics and popular inventories that are customised to meet your specific needs and budget.</p>
        </div>
        
        <div className="service-card">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="9" y1="21" x2="9" y2="9"></line>
          </svg>
          <h3>Plots Development/Selling</h3>
          <p>We have completed more than 30 projects and have brought joy and housing to over 1,000 families in various localities of Bangalore, including Surya City,Anekal,Electronic City,Bannerhatta.</p>
        </div>
      </div>
    </div>


    <div className="how-it-works">
      <h2 className="title">How It Works</h2>
      <div className="underline"></div>
      <p className="subtitle">Process to get your right one, almost easy, flexible and fun.</p>
      
      <div className="steps-container">
        <div className="home-step">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <h3>Select your Plots</h3>
          <p>Select your Villa's or Plot's and let's connect with us. Ask what answer you need. You can also contact with the Support team if you have any question.</p>
        </div>
        
        <div className="home-step">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          <h3>Let's Connect with us</h3>
          <p>Our Support Team will connect with regarding your queries and they will assist you in all aspects to buy your Dream Home or Plots.</p>
        </div>
        
        <div className="home-step">
          <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
          <h3>Close the Deal</h3>
          <p>After the deal you will get all the Registration documents and proper guidence for payment and you can pay the amount in Loan,Cash,Card,Cheque,Online.</p>
        </div>
      </div>
    </div>
        <Client />
        <Footer />
        </div>
      </>
    );
  };

  return <Hero/>;
};

export default HomePlot;
