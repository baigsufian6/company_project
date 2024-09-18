import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import './ContactPlot.css';
import Footer from '../FooterPlot';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const center = [12.977743, 77.553056]; // Latitude and Longitude for Bengaluru

  return (
    <>
      <div className="rohan-contact-page-container">
        <div className="rohan-contact-header-section">
          <h1>Get in Touch</h1>
          <p>We're here to help and answer any question you might have</p>
        </div>
        <div className="rohan-contact-main-content">
          <div className="rohan-contact-form-container">
            <h2>Send us a message</h2>
            <form onSubmit={handleSubmit}>
              <div className="rohan-contact-form-group">
                <input type="text" className="rohan-contact-input" placeholder="Your Name" required />
              </div>
              <div className="rohan-contact-form-group">
                <input type="email" className="rohan-contact-input" placeholder="Your Email" required />
              </div>
              <div className="rohan-contact-form-group">
                <input type="tel" className="rohan-contact-input" placeholder="Your Phone" />
              </div>
              <div className="rohan-contact-form-group">
                <textarea className="rohan-contact-textarea" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="rohan-contact-submit-btn">
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          <div className="rohan-contact-info-container">
            <div className="rohan-contact-info-item">
              <Phone className="rohan-contact-icon" />
              <div className="rohan-contact-info-text">
                <h3>Phone</h3>
                <p>+91 86187 24081</p>
              </div>
            </div>
            <div className="rohan-contact-info-item">
              <Mail className="rohan-contact-icon" />
              <div className="rohan-contact-info-text">
                <h3>Email</h3>
                <p>rohaninfrabuilderrs@gmail.com</p>
              </div>
            </div>
            <div className="rohan-contact-info-item">
              <MapPin className="rohan-contact-icon-map" />
              <div className="rohan-contact-info-text">
                <h3>Address</h3>
                <p>#342, 2nd and 3rd Floor, Dr. Rajkumar Road, Beside AL-BEK Restaurant, Block 6th Rajajinagar, Bengaluru - 560010</p>
              </div>
            </div>
            <div className="rohan-contact-map-container">
              <MapContainer center={center} zoom={15} style={{ height: "100%", width: "100%" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                  <Popup>
                    Rohan Infrabuilders, Bengaluru
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;