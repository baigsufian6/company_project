import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import rohan from "./imagess/rohans.png";
import "./construct.css";

const FooterConstruct = () => {
  return (
    <footer>
      <div className="footer-contents">
        <div className="footer-left">
          <div className="logo">
            <img src={rohan} alt="Rightcon Logo" />
          </div>
          <p>
            A Team of Seasoned construction Professionals driven by Passion.
          </p>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=61554191187502">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/rohaninfrabuilderrs?igsh=MTV5MTg2amJ2cXV2cg==">
              <FaInstagram />
            </a>
            <a href="/">
              <FaLinkedinIn />
            </a>
            <a href="https://youtube.com/@rohaninfrabuilderrs?si=PwFo7YBOsMje_JFu">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-middle">
          <ul>
            <li>
              <a href="/construction">Home</a>
            </li>
            <li>
              <a href="/construction/projects">Projects</a>
            </li>
            <li>
              <a href="/construction/about">About Us</a>
            </li>
            <li>
              <a href="/construction/careers">Careers</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="/construction">Interior Design Services</a>
            </li>
            <li>
              <a href="/construction">Architectural Design Services</a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <p>
            Join our newsletter to stay up to date on features and releases.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit">Subscribe ➔</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Rohan Infra All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default FooterConstruct;
