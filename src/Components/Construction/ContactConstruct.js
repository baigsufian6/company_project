import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapPin, Phone, Mail } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import emailjs from 'emailjs-com';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function ContactConstruct() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (templateParams) => {
    emailjs.send('service_6i9br0x', 'template_po4448h', templateParams, 'V6XQV5b3ZjIxTPWFc')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again later.');
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      to_name: 'Rohan Infra',
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message
    };
    sendEmail(templateParams);
  };

  const center = [12.977743, 77.553056]; // Latitude and Longitude for Company, Bengaluru

  return (
    <div className="contact-construct-page">
      <div className="contact-construct-container">
        <div className="contact-construct-form-section">
          <h2 className="contact-construct-subtitle">Contact us</h2>
          <h1 className="contact-construct-title">
            We are here for you,
            <br />
            Get in touch With Us!
          </h1>
          <form onSubmit={handleSubmit} className="contact-construct-form">
            <div className="contact-construct-form-row">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter Your First Name"
                className="contact-construct-form-input"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter Your Last Name"
                className="contact-construct-form-input"
                required
              />
            </div>
            <div className="contact-construct-form-row">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Phone Number"
                className="contact-construct-form-input"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="contact-construct-form-input"
                required
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="contact-construct-form-textarea"
              required
            ></textarea>
            <button type="submit" className="contact-construct-form-submit">
              Reach Us
            </button>
          </form>
        </div>
        <hr className="contact-construct-divider"></hr>

        <div className="contact-construct-info-section">
          <div className="contact-construct-info">
            <div className="contact-construct-info-item">
              <Phone className="contact-construct-info-icon" />
              <div>
                <h3 className="contact-construct-info-title">Talk to Us</h3>
                <p>+91 86187 24081</p>
              </div>
            </div>
            <div className="contact-construct-info-item">
              <Mail className="contact-construct-info-icon" />
              <div>
                <h3 className="contact-construct-info-title">Email Us</h3>
                <p>rohaninfrabuilderrs@gmail.com</p>
              </div>
            </div>
            <div className="contact-construct-info-item">
              <MapPin className="contact-construct-info-icon" />
              <div>
                <h3 className="contact-construct-info-title">Visit Us</h3>
                <p>
                  #342, 2nd and 3rd Floor Dr. Rajkumar Road Beside AL-BEK
                  Restaurant Block 6th Rajajinagar Bengaluru - 560010
                </p>
              </div>
            </div>
          </div>

          <div
            className="contact-construct-map-container"
            style={{
              height: "300px",
              borderRadius: "0.5rem",
              overflow: "hidden",
            }}
          >
            <MapContainer
              center={center}
              zoom={15}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={center}>
                <Popup>
                  403, 8th B Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka
                  560011
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