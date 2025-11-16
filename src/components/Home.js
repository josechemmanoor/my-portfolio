import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../styles/Home.css";

const roles = ["Student", "UI/UX Designer", "Full-Stack Web Developer"];

function Home() {
  const [currentRole, setCurrentRole] = useState(roles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(roles[Math.floor(Math.random() * roles.length)]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Function for smooth scrolling
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home" id="home">
      <p className="small-text">Hey there, I'm</p>
      <h1 className="big-text">Jose Chemmanoor</h1>
      <p className="dynamic-text">{currentRole}</p>
      <div className="box">
        <a 
          href="#contact" 
          onClick={(e) => scrollToSection(e, 'contact')} 
          className="box-text"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}

export default Home;