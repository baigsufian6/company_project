import {React, useEffect}from 'react';
import { useLocation, Link } from 'react-router-dom';
import rohan from './imagess/rohans.png';
import './construct.css';

const CostResultPage = () => {

    useEffect(() => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
      }, []);

  const location = useLocation();
  const { totalCost, package: packageType, name, phone, location: siteLocation, plot, floors } = location.state || {};

  const getFloorText = (floors) => {
    if (floors === '0') return 'Ground Floor';
    if (floors === '1') return '1st Floor';
    if (floors === '2') return '2nd Floor';
    if (floors === '3') return '3rd Floor';
    return `${floors}th Floor`;
  };

  return (
    <div className="cost-result-page">
      <div className="result-container">
        <header className="result-header">
          <h1 className="page-title">Cost Estimation Result</h1>
          <div className="company-logo">
            <img src={rohan} alt="Company Logo" />
          </div>
        </header>
        {totalCost ? (
          <>
            <div className="cost-highlight">
              <h2 className="cost-label">Estimated Project Cost</h2>
              <p className="cost-value">₹{totalCost.toLocaleString('en-IN')}</p>
            </div>
            <div className="result-content">
              <div className="project-summary">
                <h3>Project Summary</h3>
                <div className="summary-grid">
                  <div className="summary-item">
                    <span className="summary-icon">📦</span>
                    <span className="summary-label">Package</span>
                    <span className="summary-value">{packageType}</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-icon">📏</span>
                    <span className="summary-label">Plot Size</span>
                    <span className="summary-value">{plot} sq ft</span>
                  </div>
                  <div className="summary-item">
                    <span className="summary-icon">🏢</span>
                    <span className="summary-label">Floors</span>
                    <span className="summary-value">{getFloorText(floors)}</span>
                  </div>
                </div>
              </div>
              <div className="client-details">
                <h3>Client Information</h3>
                <div className="details-list">
                  <div className="detail-item">
                    <span className="detail-icon">👤</span>
                    <span className="detail-label">Name</span>
                    <span className="detail-value">{name}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📞</span>
                    <span className="detail-label">Phone</span>
                    <span className="detail-value">{phone}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-icon">📍</span>
                    <span className="detail-label">Location</span>
                    <span className="detail-value">{siteLocation}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="next-steps">
              <h3>Next Steps</h3>
              <p>Our team will contact you shortly to discuss the project details and schedule a site visit.</p>
            </div>
          </>
        ) : (
          <p className="error-message">Sorry, no data available. Please go back and submit the form again.</p>
        )}
        <div className="action-buttons">
          <Link to="/construction/calculate" className="back-button">
            Recalculate
          </Link>
          <Link to="/construction/contact" className="contact-button">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CostResultPage;
