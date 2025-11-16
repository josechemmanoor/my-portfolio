import React from "react";
import "../styles/Projects.css";

const projects = [
  {
    title: "SafeCircle",
    description: "A React Native app for women's safety with SOS, fake calls, and AI-based safe routes.",
    tech: "React Native, Firebase, AI",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects, skills, and experience.",
    tech: "React, Tailwind CSS",
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <span className="tech">{project.tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
