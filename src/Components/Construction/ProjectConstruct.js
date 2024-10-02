import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './construct.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import prop1 from './imagess/3.jpg';
import prop2 from './imagess/6.jpg';
import prop3 from './imagess/1.jpg';
import image1 from './imagess/7.jpg';
import image2 from './imagess/8.jpg';
import image3 from './imagess/5.jpg';
import img2 from './imagess/2.jpg';
import img4 from './imagess/4.jpg'
import img9 from './imagess/9.jpg'
import img10 from './imagess/10.jpg'
import img11 from './imagess/11.jpg'
import img12 from './imagess/12.jpg'

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <ChevronRight size={24} />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <ChevronLeft size={24} />
  </div>
);

function ProjectConstruct() {
  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/construction/contact'); // This will navigate to the Career page
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div>
      <div className="project-construct">
        <div className="content-overlay">
          <h1>Constructing Dreams Into</h1>
          <h2>Comfortable Living.</h2>
          <p>Molding Dreams Into Liveable Spaces!</p>
          <button className="cta-button" onClick={handleClick}>Book a call</button>
        </div>
      </div>

      <section className="signature-designs">
  <h2>Signature Designs</h2>
  <h3>Lifting Home Aesthetics to New Heights</h3>

  {/* External View of Homes */}
  <div className="slider-container">
    <h4>External Views</h4>
    <Slider {...settings}>
      <div className="design-card">
        <img src={image1} alt="Project Ramesh Residency External View" />
      </div>
      <div className="design-card">
        <img src={image2} alt="Project Dharmesh Residency External View" />
      </div>
      <div className="design-card">
        <img src={image3} alt="Project Sridhar Residency External View" />
      </div>
      <div className="design-card">
        <img src={img4} alt="Project Internal View" />
      </div>
      <div className="design-card">
        <img src={prop3} alt="Project Prop3 Internal View" />
      </div>
    </Slider>
  </div>

  {/* Internal View of Homes */}
  <div className="slider-container">
    <h4>Internal Views</h4>
    <Slider {...settings}>
      <div className="design-card">
        <img src={prop1} alt="Project Prop1 Internal View" />
      </div>
      <div className="design-card">
        <img src={prop2} alt="Project Prop2 Internal View" />
      </div>
      <div className="design-card">
        <img src={img2} alt="Project Internal View" />
      </div>
      <div className="design-card">
        <img src={img9} alt="Project Internal View" />
      </div>
      <div className="design-card">
        <img src={img10} alt="Project Internal View" />
      </div>
      <div className="design-card">
        <img src={img11} alt="Project Internal View" />
      </div>
      <div className="design-card">
        <img src={img12} alt="Project Internal View" />
      </div>
    </Slider>
  </div>
</section>

    </div>
  );
}

export default ProjectConstruct;