import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer className="pk-footer">

      {/* =====================================================
          FOOTER TOP
      ===================================================== */}

      <div className="pk-footer-top">

        {/* BRAND */}
        <div className="pk-footer-brand">

          <a href="#" className="pk-footer-logo">
            PK <span>ENTERTAINMENTS</span>
          </a>

          <p className="pk-footer-tagline">
            We specialised in making Mini Theatres.
          </p>

          <p className="pk-footer-description">
            Premium home theatre and entertainment solutions
            designed to bring a cinematic experience into your
            home and entertainment spaces.
          </p>

          {/* SOCIAL */}
          <div className="pk-socials">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="X">𝕏</a>
          </div>

        </div>


        {/* EXPLORE */}
        <div className="pk-footer-column">

          <h3>Explore</h3>

          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>

        </div>


        {/* SERVICES */}
        <div className="pk-footer-column">

          <h3>Services</h3>

          <a href="#services">
            Home Theatre Setup
          </a>

          <a href="#services">
            Audio Systems
          </a>

          <a href="#services">
            Projectors & Screens
          </a>

          <a href="#services">
            Mini Theatre Setup
          </a>

          <a href="#services">
            Dolby Atmos Systems
          </a>

        </div>


        {/* CONTACT */}
        <div className="pk-footer-column pk-footer-contact">

          <h3>Get in touch</h3>

          <div className="pk-contact-item">

            <span className="pk-contact-icon">
              ☎
            </span>

            <div>
              <small>Phone</small>

              <a href="tel:+919000135543">
                +91 9000135543
              </a>
            </div>

          </div>


          <div className="pk-contact-item">

            <span className="pk-contact-icon">
              📍
            </span>

            <div>
              <small>Location</small>

              <p>
                # 48-3-55/1, Day & Night Hospital Road,
                Near Rama Talkies, Srinagar,
                Visakhapatnam - 530016.
              </p>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;