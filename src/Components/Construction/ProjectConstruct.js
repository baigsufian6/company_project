import React from 'react';
import { useNavigate } from 'react-router-dom';
import './construct.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import prop1 from './imagess/prop1.webp';
import prop2 from './imagess/prop2.webp';
import prop3 from './imagess/prop3.webp';
import image1 from './imagess/image1.jpg';
import image2 from './imagess/image2.jpg';
import image3 from './imagess/image3.jpg';

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <button className="slick-arrow slick-next" onClick={onClick}>
    <ChevronRight size={24} />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="slick-arrow slick-prev" onClick={onClick}>
    <ChevronLeft size={24} />
  </button>
);


function ProjectConstruct() {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/construction/contact'); // This will navigate to the Career page
  };

  const settings = {
    dots: true,
    infinite: false,
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
        <Slider {...settings}>
          <div className="design-card">
            <img src={image1} alt="Project Ramesh Residency" />
            <h4>Project Ramesh Residency</h4>
            <p>Location: Ramamurthy Nagar, Bangalore</p>
          </div>
          <div className="design-card">
            <img src={image2} alt="Project Dharmesh Residency" />
            <h4>Project Dharmesh Residency</h4>
            <p>Location: Bannerghatta Road, Bangalore</p>
          </div>
          <div className="design-card">
            <img src={image3} alt="Project Sridhar Residency" />
            <h4>Project Sridhar Residency</h4>
            <p>Location: Kalyan Nagar, Bangalore</p>
          </div>
          <div className="design-card">
            <img src={prop1} alt="Project Prop1" />
            <h4>Project Prop1</h4>
            <p>Location: Kalyan Nagar, Bangalore</p>
          </div>
          <div className="design-card">
            <img src={prop2} alt="Project Prop2" />
            <h4>Project Prop2</h4>
            <p>Location: Kalyan Nagar, Bangalore</p>
          </div>
          <div className="design-card">
            <img src={prop3} alt="Project Prop3" />
            <h4>Project Prop3</h4>
            <p>Location: Kalyan Nagar, Bangalore</p>
          </div>
        </Slider>
      </section>
    </div>
  );
}

export default ProjectConstruct;
