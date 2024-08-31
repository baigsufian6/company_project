import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, Phone, Mail } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function ContactConstruct() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const center = [12.9259, 77.5937]; // Latitude and Longitude for Jayanagar, Bengaluru

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="form-section">
          <h2 className="contact-subtitle">Contact us</h2>
          <h1 className="contact-title">
            We are here for you,<br />
            Get in touch With Us!
          </h1>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Enter Your First Name" className="form-input" />
              <input type="text" placeholder="Enter Your Last Name" className="form-input" />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Enter Your Phone Number" className="form-input" />
              <input type="email" placeholder="Enter Your Email" className="form-input" />
            </div>
            <textarea placeholder="Message" className="form-textarea"></textarea>
            <button type="submit" className="form-submit">Reach Us</button>
          </form>
        </div>
        <hr className='divi'></hr>
        
        <div className="info-section">
          <div className="contact-info">
            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h3 className="info-title">Talk to Us</h3>
                <p>9606592959</p>
              </div>
            </div>
            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <h3 className="info-title">Email Us</h3>
                <p>contact@rightcon.in</p>
              </div>
            </div>
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h3 className="info-title">Visit Us</h3>
                <p>403, 8th B Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011</p>
              </div>
            </div>
          </div>
          
          <div className="map-container" style={{ height: '300px', borderRadius: '0.5rem', overflow: 'hidden' }}>
            <MapContainer center={center} zoom={15} style={{ height: '100%', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={center}>
                <Popup>
                  403, 8th B Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactConstruct;