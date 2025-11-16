import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="container">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
        <section id="resume"><Resume /></section>
      </div>
    </div>
  );
}

export default App;