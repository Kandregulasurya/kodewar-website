import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Information */}
        <div className="footer-section footer-about">
          <h2 className="footer-logo">Kodewar Technologies</h2>

          <p>
            We create innovative digital solutions that help businesses
            grow, improve productivity, and build a stronger digital presence.
          </p>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>

            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>

          <ul>
            <li><a href="#webdevelopment">Web Development</a></li>
            <li><a href="#Mobiledevelopment">Mobile Development</a></li>
            <li><a href="#ui/ux">UI/UX Design</a></li>
            <li><a href="#softwaredeveloper">Software Development</a></li>
            <li><a href="#digitalsolutions">Digital Solutions</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Visakhapatnam, Andhra Pradesh, India</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <span>+91 98765 43210</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>info@kodewar.com</span>
          </div>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">

        <p>
          {new Date().getFullYear()} Kodewar Technologies. All Rights Reserved.
        </p>

        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;

