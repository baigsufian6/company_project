import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useNavigate } from 'react-router-dom';
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    emailjs.init("V6XQV5b3ZjIxTPWFc"); // Replace with your actual User ID
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (templateParams) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await emailjs.send(
        'service_6i9br0x',  // Replace with your actual Service ID
        'template_po4448h', // Replace with your actual Template ID
        templateParams,
        'V6XQV5b3ZjIxTPWFc'      // Replace with your actual User ID
      );

      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({
        name: "",
        email: "",
        message: "",
        phone: ''
      });
    } catch (error) {
      console.error('FAILED...', error);
      setError('Failed to send message. Please try again later.');
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const templateParams = {
      to_name: 'Rohan Infra',
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message
    };
    await sendEmail(templateParams);
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
            <form onSubmit={handleContactSubmit}>
              <div className="rohan-contact-form-group">
                <input type="text" name="name" className="rohan-contact-input" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
              </div>
              <div className="rohan-contact-form-group">
                <input type="email" name="email" className="rohan-contact-input" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
              </div>
              <div className="rohan-contact-form-group">
                <input type="tel" name="phone" className="rohan-contact-input" placeholder="Your Phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="rohan-contact-form-group">
                <textarea name="message" className="rohan-contact-textarea" placeholder="Your Message" required value={formData.message} onChange={handleChange}></textarea>
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="rohan-contact-submit-btn" disabled={isLoading}>
                <Send size={18} />
                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
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