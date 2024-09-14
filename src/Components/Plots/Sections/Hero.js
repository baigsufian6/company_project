import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './PlotSalesHomepage.css';
import img1 from '../Assets/area1.jpg';
import img2 from '../Assets/area2.jpg';
import img3 from '../Assets/area3.jpg';
import img4 from '../Assets/area5.png';

const plotData = [
  { image: img1, text: 'Discover Your Dream Plot' },
  { image: img2, text: 'Prime Locations Available' },
  { image: img3, text: 'Build Your Future Home' },
  { image: img4, text: 'Invest in Premium Real Estate' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % plotData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + plotData.length) % plotData.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % plotData.length);
  };

  return (
    <div className="plot-sales">
      <div className="plot-sales__slider">
        {plotData.map((plot, index) => (
          <div
            key={index}
            className={`plot-sales__slide ${index === currentSlide ? 'plot-sales__slide--active' : ''}`}
            style={{ backgroundImage: `url(${plot.image})` }}
          >
            <div className="plot-sales__slide-content">
              <h2 className="plot-sales__slide-text">{plot.text}</h2>
            </div>
          </div>
        ))}
      </div>
      <button className="plot-sales__nav-button plot-sales__nav-button--prev" onClick={handlePrevSlide}>
        <ChevronLeft size={32} />
      </button>
      <button className="plot-sales__nav-button plot-sales__nav-button--next" onClick={handleNextSlide}>
        <ChevronRight size={32} />
      </button>
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
  );
};

export default Hero;