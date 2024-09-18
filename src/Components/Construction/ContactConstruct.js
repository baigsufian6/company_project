import { React, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapPin, Phone, Mail } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function ContactConstruct() {

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
                placeholder="Enter Your First Name"
                className="contact-construct-form-input"
              />
              <input
                type="text"
                placeholder="Enter Your Last Name"
                className="contact-construct-form-input"
              />
            </div>
            <div className="contact-construct-form-row">
              <input
                type="tel"
                placeholder="Enter Your Phone Number"
                className="contact-construct-form-input"
              />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="contact-construct-form-input"
              />
            </div>
            <textarea
              placeholder="Message"
              className="contact-construct-form-textarea"
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
