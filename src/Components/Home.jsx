import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../Styles/Home.css";

function Home() {
  return (
    <section className="home" id="home">
      <video className="home-video" autoPlay loop muted playsInline>
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4"
          type="video/mp4"
        />
      </video>
      <div className="home-overlay"></div>

      <div className="cinema-light light-one"></div>
      <div className="cinema-light light-two"></div>
      <div className="cinema-light light-three"></div>

      <div className="home-content">
        <p className="home-small-text">PREMIUM HOME ENTERTAINMENT EXPERIENCE</p>

        <h1 className="home-title">
          <span className="title-line">Bring the </span>
          <span className="title-highlight">Cinema </span>
          <span className="title-line">
            Home<span className="title-dot">.</span>
          </span>
        </h1>

        <p className="home-description">
          PK Entertainment transforms your living space into an immersive
          cinematic experience with premium home theaters, powerful sound
          systems and carefully designed entertainment spaces.
        </p>

        <div className="home-buttons">
          <Link to="/work" className="home-btn primary-btn">
            <span>Explore Our Work</span>
            <FaArrowRight className="btn-arrow" />
          </Link>

          <Link to="/contact" className="home-btn secondary-btn">
            <span>Let's Talk</span>
            <FaArrowRight className="btn-arrow" />
          </Link>
        </div>
      </div>

      <div className="home-bottom">
        <div className="home-features">
          <div className="feature-item">
            <span></span>
            <p></p>
          </div>

          <div className="feature-item">
            <span></span>
            <p></p>
          </div>

          <div className="feature-item">
            <span></span>
            <p></p>
          </div>
        </div>

        <a href="#work" className="scroll-indicator">
          <span className="scroll-line"></span>
          <p>SCROLL TO EXPLORE</p>
        </a>
      </div>
    </section>
  );
}

export default Home;
