import React, { useEffect, useState, useCallback } from 'react';
import './HomePlot.css';
import './PlotSalesHomepage.css';
import Footer from '../FooterPlot';
import Client from '../Pages/ClientsPlot';
import img1 from '../Assets/hello.jpeg';
import img2 from '../Assets/chandra.jpeg';
import img3 from '../Assets/layout2.jpeg';
import img4 from '../Assets/layout3.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faHammer, faBuilding, faLandmark } from '@fortawesome/free-solid-svg-icons';

const HomePlot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plotData = [
    { image: img1, text: 'Build Your Future Home' },
    { image: img2 },
    { image: img3 },
    { image: img4 },
  ];

  const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = useCallback(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prevSlide) => (prevSlide + 1) % plotData.length);
      }
    }, [isTransitioning]);

    const prevSlide = useCallback(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentSlide((prevSlide) => (prevSlide - 1 + plotData.length) % plotData.length);
      }
    }, [isTransitioning]);

    useEffect(() => {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }, [nextSlide]);

    const handleTransitionEnd = () => {
      setIsTransitioning(false);
    };

    return (
      <>
        <div className='full-home'>
          <div className="plot-sales">
            <div className="plot-sales__slider" onTransitionEnd={handleTransitionEnd}>
              {plotData.map((plot, index) => (
              <div
              key={index}
              className={`plot-sales__slide ${index === currentSlide ? 'plot-sales__slide--active' : ''}`}
              style={{
                backgroundImage: `url(${plot.image})`,
                backgroundSize: 'cover', /* Ensures the image covers the container */
                backgroundPosition: 'center', /* Centers the image */
                transform: `translateX(${(index - currentSlide) * 100}%) scale(${index === currentSlide ? 1.05 : 1})`,
                opacity: index === currentSlide ? 1 : 0.5,
                transition: 'transform 1s ease-in-out, opacity 1s ease-in-out',
              }}
            >
              <div className="plot-sales__slide-content">
                <h2 className="plot-sales__slide-text">{plot.text}</h2>
              </div>
            </div>
            
              ))}
            </div>
            <button className="plot-sales__nav plot-sales__nav--prev" onClick={prevSlide} disabled={isTransitioning}>&#10094;</button>
            <button className="plot-sales__nav plot-sales__nav--next" onClick={nextSlide} disabled={isTransitioning}>&#10095;</button>
            <div className="plot-sales__dots">
              {plotData.map((_, index) => (
                <span
                  key={index}
                  className={`plot-sales__dot ${index === currentSlide ? 'plot-sales__dot--active' : ''}`}
                  onClick={() => !isTransitioning && setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>

          <div className="what-we-do">
            <h2 className="title">What We Do</h2>
            <div className="underline"></div>
            <p className="subtitle">We bring your dream home to life, where your search for the perfect property begins</p>
            
            <div className="services-container">
              <div className="service-card">
                <FontAwesomeIcon icon={faHammer} className="icon" style={{ color: '#003366' }} />
                <h3>Construction</h3>
                <p>Rohan Infra is one of the leading real estate companies in developing residential projects. Our aim is to create an environment that enhances the quality of life and provides peace, tranquility, and comfort.</p>
              </div>

              <div className="service-card">
                <FontAwesomeIcon icon={faLandmark} className="icon" style={{ color: '#003366' }} />
                <h3>Real Estate</h3>
                <p>With several real estate projects underway, Rohan Infra is a leading player in the industry, offering a range of dynamic and popular inventories that are customized to meet your specific needs and budget.</p>
              </div>

              <div className="service-card">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="3" y1="15" x2="21" y2="15" />
                  <line x1="9" y1="3" x2="9" y2="21" />
                  <line x1="15" y1="3" x2="15" y2="21" />
                  <circle cx="6" cy="6" r="1" />
                  <circle cx="18" cy="18" r="1" />
                </svg>
                <h3>Plots Development/Selling</h3>
                <p>We have completed more than 21 projects and have brought joy and housing to over 1,000 families in various localities of Bangalore, including Devanahalli, Yelahanka, and Tavrekere.</p>
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
                <p>Select your Villa's or Plot's and let's connect with us. Ask what answer you need. You can also contact the Support team if you have any questions.</p>
              </div>
              
              <div className="home-step">
                <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <h3>Let's Connect with us</h3>
                <p>Our Support Team will connect with you regarding your queries and they will assist you in all aspects to buy your Dream Home or Plots.</p>
              </div>
              
              <div className="home-step">
                <FontAwesomeIcon icon={faHandshake} className="icon" />
                <h3>Close the Deal</h3>
                <p>After the deal, you will get all the Registration documents and proper guidance for payment. Payment modes are Cash, Online, Card & Cheque</p>
              </div>
            </div>
          </div>
          <Client />
          <Footer />
        </div>
      </>
    );
  };

  return <Hero />;
};

export default HomePlot;