import React from 'react';
import './construct.css';
import mane from './imagess/mane.avif'

function ProjectConstruct() {
  return (
    <div>
      <div className="project-construct">
      <div className="content-overlay">
        <h1>Constructing Dreams Into</h1>
        <h2>Comfortable Living.</h2>
        <p>Molding Dreams Into Liveable Spaces!</p>
        <button className="cta-button">Book a call</button>
      </div>
    </div>

    <section className="signature-designs">
          <h2>Signature Designs</h2>
          <h3>Lifting Home Aesthetics to New Heights</h3>
          <div className="design-grid">
            <div className="design-card">
              <img src={mane} alt="Project Ramesh Residency" />
              <h4>Project Ramesh Residency</h4>
              <p>Location: Ramamurthy Nagar, Bangalore</p>
              <button className="view-details">View Details</button>
            </div>
            <div className="design-card">
              <img src={mane} alt="Project Dharmesh Residency" />
              <h4>Project Dharmesh Residency</h4>
              <p>Location: Bannerghatta Road, Bangalore</p>
              <button className="view-details">View Details</button>
            </div>
            <div className="design-card">
              <img src={mane} alt="Project Sridhar Residency" />
              <h4>Project Sridhar Residency</h4>
              <p>Location: Kalyan Nagar, Bangalore</p>
              <button className="view-details">View Details</button>
            </div>
            <div className="design-card">
              <img src={mane} alt="Project Dharmesh Residency" />
              <h4>Project Dharmesh Residency</h4>
              <p>Location: Bannerghatta Road, Bangalore</p>
              <button className="view-details">View Details</button>
            </div>
            <div className="design-card">
              <img src={mane} alt="Project Dharmesh Residency" />
              <h4>Project Dharmesh Residency</h4>
              <p>Location: Bannerghatta Road, Bangalore</p>
              <button className="view-details">View Details</button>
            </div>
            <div className="design-card">
              <img src={mane} alt="Project Dharmesh Residency" />
              <h4>Project Dharmesh Residency</h4>
              <p>Location: Bannerghatta Road, Bangalore</p>
              <button className="view-details">View Details</button>
            </div>
            <div className="design-card">
              <img src={mane} alt="Project Dharmesh Residency" />
              <h4>Project Dharmesh Residency</h4>
              <p>Location: Bannerghatta Road, Bangalore</p>
              <button className="view-details">View Details</button>
            </div>
            <div className="design-card">
              <img src={mane} alt="Project Dharmesh Residency" />
              <h4>Project Dharmesh Residency</h4>
              <p>Location: Bannerghatta Road, Bangalore</p>
              <button className="view-details">View Details</button>
            </div>  <div className="design-card">
              <img src={mane} alt="Project Dharmesh Residency" />
              <h4>Project Dharmesh Residency</h4>
              <p>Location: Bannerghatta Road, Bangalore</p>
              <button className="view-details">View Details</button>
            </div>
          </div>
          <button className="view-all">View All</button>
        </section>
    </div>
  );
}

export default ProjectConstruct;