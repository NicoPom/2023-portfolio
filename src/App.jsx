import React, { useEffect, useState } from "react";
import "./styles/app.css";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

import { sectionsData } from "./assets/sections";
import { projectsData } from "./assets/projects";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = (id) => {
    setActiveSection(id);
    const sectionEl = document.getElementById(id);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      sectionsData.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight) {
            setActiveSection(section.id);
          }
        }
      });
      projectsData.forEach((project) => {
        const el = document.getElementById(project.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight) {
            setActiveSection(project.id);
          }
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, setActiveSection]);

  return (
    <div className="app">
      <Home />
      <Projects />
      <About />
      <Navbar
        activeSection={activeSection}
        setActiveSection={handleClick}
        sectionsData={sectionsData}
      />
    </div>
  );
};

export default App;
