// src/components/Resume.js
import React from "react";
import { FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import "../styles/Resume.css"; 
import "../styles/global.css";


const Resume = () => {
  const resumePdf = process.env.PUBLIC_URL + "/resume.pdf"; // use PUBLIC_URL for safety

  return (
    <div className="resume-section" id="resume">
    <h1 class="section-heading">Resume</h1>

      <div className="resume-links">
        <a 
          href={resumePdf} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="resume-link"
        >
          <FaExternalLinkAlt className="link-icon" />
          View Resume
        </a>

        <a 
          href={resumePdf} 
          download="Jose Chemmanoor_Resume.pdf" 
          className="resume-link"
        >
          <FaDownload className="link-icon" />
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
