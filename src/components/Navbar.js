import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</a></li>
        <li><a href="#education" onClick={(e) => scrollToSection(e, 'education')}>Education</a></li>
        <li><a href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>Projects</a></li>
        <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
        <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
        <li><a href="#resume" onClick={(e) => scrollToSection(e, 'resume')} >Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;