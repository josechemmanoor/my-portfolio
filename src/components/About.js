import React from "react";
import "../styles/About.css";
import profilePic from "../assets/profile.jpg"; // Update with actual image path

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h1 className="about-heading">About</h1>
        <p className="about-text">
          Welcome to my digital space! I'm <strong>Jose Chemmanoor</strong>, a passionate BTech student specializing in 
          Computer Science and Engineering at Rajagiri School of Engineering and Technology (RSET) in Kakkanad, Kochi. 
          <br /><br />
          While I currently call Kochi home, my journey began in the bustling city of Thrissur, Kerala. I pursued my early 
          education at Don Bosco ICSE School, Mannuthy, and later completed my higher secondary studies at St. Joseph’s 
          School, Kuriachira.
          <br /><br />
          Fueled by curiosity and a love for technology, I’m on a mission to explore the ever-evolving world of computer science. 
          Join me as we dive into this exciting field, sharing knowledge and experiences along the way!
        </p>
      </div>
      <div className="about-image">
        <img src={profilePic} alt="Jose Chemmanoor" />
      </div>
    </div>
  );
}

export default About;
