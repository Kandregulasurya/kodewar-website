import React, { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1800);
  };

  const handleNewMessage = () => {
    setSubmitted(false);
  };

  return (
    <section className="contact-section">

      {/* Background effects */}
      <div className="bg-glow bg-glow-one"></div>
      <div className="bg-glow bg-glow-two"></div>

      <div className="contact-wrapper">

        {/* ================= LEFT SIDE ================= */}
        <div className="contact-left">

          {!submitted ? (
            <>
              <div className="contact-label">
                CONTACT US
              </div>

              <h1>
                Let's <span>Connect</span>
              </h1>

              <p className="contact-text">
                Have a question, idea, or project in mind?
                Send us a message and our team will get back
                to you as soon as possible.
              </p>

              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >

                {/* NAME */}
                <div className="form-group">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                {/* EMAIL */}
                <div className="form-group">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* MESSAGE */}
                <div className="form-group">
                  <label htmlFor="message">
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Tell us how we can help..."
                    required
                  ></textarea>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="submit-button"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <span className="button-arrow">→</span>
                    </>
                  )}
                </button>

              </form>
            </>
          ) : (

            /* ================= SUCCESS LEFT SIDE ================= */

            <div className="success-content">

              <div className="success-badge">
                <span>✓</span>
              </div>

              <div className="contact-label">
                MESSAGE SENT
              </div>

              <h1>
                We'll Contact <span>You Soon!</span>
              </h1>

              <p className="contact-text">
                Thank you for reaching out to us.
                Your message has been successfully submitted.
                Our team will contact you shortly.
              </p>

              <button
                className="new-message-button"
                onClick={handleNewMessage}
              >
                Send Another Message
                <span>↗</span>
              </button>

            </div>
          )}

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div
          className={`contact-right ${
            submitted ? "success-right" : ""
          }`}
        >

          {!submitted ? (

            /* NORMAL IMAGE */
            <div className="image-area">

              <div className="image-glow"></div>

              <div className="image-card">

                <img
                  src="../Image1.png"
                  alt="People working together"
                />

              </div>

              <div className="floating-tag tag-one">
                <span>✦</span>
                Let's talk
              </div>

              <div className="floating-tag tag-two">
                <span>💬</span>
                We're here
              </div>

            </div>

          ) : (

            /* ================= SUCCESS IMAGE ================= */

            <div className="success-visual">

              <div className="success-image-glow"></div>

              <div className="success-icon">

                <div className="check-circle">
                  <span>✓</span>
                </div>

                <div className="success-ring ring-one"></div>
                <div className="success-ring ring-two"></div>

              </div>

              <div className="success-message">

                <span>✦</span>

                <h3>
                  We'll be in touch!
                </h3>

                <p>
                  Your message is safely with us.
                </p>

              </div>

            </div>

          )}

        </div>

      </div>

    </section>
  );
}

export default Contact;