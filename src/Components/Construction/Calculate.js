import React from "react";
import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import "./construct.css";

function Calculate() {

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    package: '',
    phone: '',
    name: '',
    location: '',
    plot: '',
    floors: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sqftValue = formData.package === 'Standard Package (1870/sqft)' ? 1870 : 2150;
    const floorCount = parseInt(formData.floors) || 1; // Use 1 if floors is 0
    const totalCost = floorCount * (formData.plot * sqftValue);
    navigate('/construction/cost-result', { state: { ...formData, totalCost } });
  };

  return (
    <section className="cost-calculator">
      <h2>Cost Calculator</h2>
      <h3>Estimate cost of your dream project</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="package">Package Required*</label>
            <select id="package" value={formData.package} onChange={handleInputChange} required>
              <option value="">Select the package</option>
              <option value="Standard Package (1870/sqft)">Standard Package (1870/sqft)</option>
              <option value="Premium Package(2150/sqft)">Premium Package(2150/sqft)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number*</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Full Name*</label>
            <input type="text" id="name" placeholder="Enter your full name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="location">Site Location*</label>
            <input type="text" id="location" placeholder="Enter site location" value={formData.location} onChange={handleInputChange} required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="plot">Plot Dimension*</label>
            <input type="number" id="plot" placeholder="in square feet" value={formData.plot} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="floors">No. of Floors*</label>
            <select id="floors" value={formData.floors} onChange={handleInputChange} required>
              <option value="">Select the no. of floors</option>
              {[...Array(11)].map((_, i) => (
                <option key={i} value={i}>{i === 0 ? 'Ground Floor' : i + (i === 1 ? 'st Floor' : i === 2 ? 'nd Floor' : i === 3 ? 'rd Floor' : 'th Floor')}</option>
              ))}
            </select>
          </div>
        </div>
        <button type="submit" className="cost-button">Get Cost Estimation</button>
      </form>
    </section>
  );
}

export default Calculate;
