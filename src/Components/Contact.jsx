
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import "../Styles/Contact.css";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.1,
    },
  },
};

function ContactInfoCard({
  href,
  icon,
  label,
  title,
  description,
  external = false,
  whatsapp = false,
}) {
  const Icon = icon;

  return (
    <motion.a
      href={href}
      className="contact-info-box"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      variants={fadeUp}
      whileHover={{ y: -7, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.25 }}
    >
      <div className={`info-icon ${whatsapp ? "whatsapp" : ""}`}>
        <Icon />
      </div>

      <div className="contact-info-content">
        <span>{label}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.a>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    e.currentTarget.reset();
  };

  return (
    <section className="kodewar-contact">
      {/* Background */}
      <div className="contact-background" aria-hidden="true" />
      <div className="contact-glow glow-one" aria-hidden="true" />
      <div className="contact-glow glow-two" aria-hidden="true" />

      <div className="contact-wrapper">
        {/* Hero and form */}
        <div className="contact-top">
          {/* LEFT SIDE */}
          <motion.div
            className="contact-left"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {/* Circular image */}
            <motion.div
              className="moon-image"
              variants={fadeUp}
              whileHover={{ scale: 1.035 }}
              transition={{ duration: 0.4 }}
            >
              <div className="moon-inner">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmL1murJSTAzxQc0X8FUMDnWP2RQFldgFhU1XrM-Nnhg&s=10"
                  alt="PK Entertainments home theatre"
                  loading="lazy"
                />
              </div>

              <div className="moon-glow" />
            </motion.div>

            {/* Introduction */}
            <motion.div
              className="contact-introduction"
              variants={fadeUp}
            >
              <span className="contact-label">
                CONTACT PK ENTERTAINMENTS
              </span>

              <h1>
                Let's create
                <span> your perfect theatre.</span>
              </h1>

              <p>
                Looking to bring the cinema experience into your
                home? PK Entertainments specialises in creating
                premium Mini Theatres and Home Theatre systems
                designed around your space and entertainment needs.
              </p>

              <p>
                From high-quality projectors and screens to
                powerful audio systems and Dolby Atmos, our team
                helps you create an immersive entertainment
                experience right at home.
              </p>

              <p>
                Tell us about your space and requirements. We will
                help you choose the right combination of technology,
                sound and visual experience.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - FORM */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="contact-form"
                  className="contact-form-card"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="form-heading">
                    <span>GET IN TOUCH</span>

                    <h2>Start your theatre journey</h2>

                    <p>
                      Tell us about your home theatre requirement
                      and our team will get back to you.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit}>
                    {/* Name and phone */}
                    <div className="form-row">
                      <div className="form-field">
                        <label htmlFor="contact-name">Name</label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          placeholder="Your name"
                          autoComplete="name"
                          required
                        />
                      </div>

                      <div className="form-field">
                        <label htmlFor="contact-phone">Phone</label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          placeholder="Phone number"
                          autoComplete="tel"
                          required
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-field">
                      <label htmlFor="contact-email">Email</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        autoComplete="email"
                        required
                      />
                    </div>

                    {/* Location */}
                    <div className="form-field">
                      <label htmlFor="contact-location">
                        Location
                      </label>
                      <input
                        id="contact-location"
                        name="location"
                        type="text"
                        placeholder="Your city / location"
                        autoComplete="address-level2"
                      />
                    </div>

                    {/* Service */}
                    <div className="form-field">
                      <label htmlFor="contact-service">
                        Service Needed
                      </label>

                      <select
                        id="contact-service"
                        name="service"
                        defaultValue=""
                        required
                      >
                        <option value="" disabled>
                          Select a service
                        </option>

                        <option value="Mini Theatre Setup">
                          Mini Theatre Setup
                        </option>

                        <option value="Home Theatre Setup">
                          Home Theatre Setup
                        </option>

                        <option value="Projector & Screen">
                          Projector &amp; Screen
                        </option>

                        <option value="Audio System">
                          Audio System
                        </option>

                        <option value="Dolby Atmos">
                          Dolby Atmos
                        </option>

                        <option value="Complete Home Entertainment">
                          Complete Home Entertainment
                        </option>

                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="form-field">
                      <label htmlFor="contact-message">
                        Message
                      </label>

                      <textarea
                        id="contact-message"
                        name="message"
                        rows="4"
                        placeholder="Tell us about your theatre space or requirement..."
                        required
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      className="send-button"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Send Enquiry</span>
                      <FaArrowRight />
                    </motion.button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-message"
                  className="success-card"
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  role="status"
                  aria-live="polite"
                >
                  <FaCheckCircle />

                  <h2>Enquiry Sent!</h2>

                  <p>
                    Thank you for contacting PK Entertainments.
                    Our team will contact you soon regarding your
                    theatre requirement.
                  </p>

                  <button
                    type="button"
                    className="send-button success-back-button"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Enquiry
                    <FaArrowRight />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* CONTACT INFORMATION */}
        <motion.div
          className="contact-info-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <ContactInfoCard
            href="tel:+919000135543"
            icon={FaPhoneAlt}
            label="PHONE"
            title="+91 9000135543"
            description="Talk to our team"
          />

          <ContactInfoCard
            href="mailto:info@pkentertainments.com"
            icon={FaEnvelope}
            label="EMAIL"
            title="info@pkentertainments.com"
            description="Send us an enquiry"
          />

          <ContactInfoCard
            href="https://wa.me/919000135543"
            icon={FaWhatsapp}
            label="WHATSAPP"
            title="Chat with us"
            description="Quick conversation"
            external
            whatsapp
          />

          <ContactInfoCard
            href="https://www.google.com/maps/search/?api=1&query=48-3-55%2F1%20Day%20%26%20Night%20Hospital%20Road%20Near%20Rama%20Talkies%20Srinagar%20Visakhapatnam%20530016"
            icon={FaMapMarkerAlt}
            label="LOCATION"
            title="Visakhapatnam"
            description="Visit our showroom"
            external
          />
        </motion.div>

        {/* LOCATION SECTION */}
        <motion.div
          className="location-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div
            className="location-heading"
            variants={fadeUp}
          >
            <div>
              <span>FIND US</span>
              <h2>Visit PK Entertainments.</h2>
            </div>

            <p>
              # 48-3-55/1, Day &amp; Night Hospital Road,
              Near Rama Talkies, Srinagar, Visakhapatnam - 530016.
            </p>
          </motion.div>

          {/* Google Map */}
          <motion.div
            className="kodewar-map"
            variants={fadeUp}
          >
            <iframe
              title="PK Entertainments Location"
              src="https://www.google.com/maps?q=48-3-55%2F1%2C%20Day%20%26%20Night%20Hospital%20Road%2C%20Near%20Rama%20Talkies%2C%20Srinagar%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530016&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            <a
              href="https://www.google.com/maps/search/?api=1&query=48-3-55%2F1%20Day%20%26%20Night%20Hospital%20Road%20Near%20Rama%20Talkies%20Srinagar%20Visakhapatnam%20530016"
              target="_blank"
              rel="noopener noreferrer"
              className="map-location-button"
            >
              Open Location
              <FaArrowRight />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
