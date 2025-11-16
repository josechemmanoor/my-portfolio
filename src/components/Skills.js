import React from "react";
import "../styles/Skills.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact className="skill-icon" /> },
  { name: "HTML", icon: <FaHtml5 className="skill-icon" /> },
  { name: "CSS", icon: <FaCss3Alt className="skill-icon" /> },
  { name: "JavaScript", icon: <FaJs className="skill-icon" /> },
  { name: "Node.js", icon: <FaNodeJs className="skill-icon" /> },
  { name: "Python", icon: <FaPython className="skill-icon" /> },
];

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
