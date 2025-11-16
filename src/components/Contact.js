import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="contact-heading">Contact</h1>
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-icon-container">
            <FaEnvelope className="contact-icon" aria-hidden="true" />
          </div>
          <h3>Email</h3>
          <a 
            href="mailto:jschemmanoor@gmail.com"
            aria-label="Send email to jschemmanoor@gmail.com"
          >
            jschemmanoor@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon-container">
            <FaPhone className="contact-icon" aria-hidden="true" />
          </div>
          <h3>Phone</h3>
          <a 
            href="tel:+919495065860"
            aria-label="Call +91 9495065860"
          >
            +91 9495065860
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon-container">
            <FaLinkedin className="contact-icon" aria-hidden="true" />
          </div>
          <h3>LinkedIn</h3>
          <a 
            href="https://www.linkedin.com/in/jose-chemmanoor-922aa6274/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Jose Chemmanoor's LinkedIn profile"
          >
            linkedin.com/in/josechemmanoor
          </a>
        </div>

        <div className="contact-card">
          <div className="contact-icon-container">
            <FaGithub className="contact-icon" aria-hidden="true" />
          </div>
          <h3>GitHub</h3>
          <a 
            href="https://github.com/josechemmanoor" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Jose Chemmanoor's GitHub profile"
          >
            github.com/josechemmanoor
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;