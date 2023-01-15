import React from "react";
import { useEffect, useState } from "react";
import "./styles/app.css";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

import { projectsData } from "./assets/projectsData";

function App() {
  const [projects, setProjects] = useState([]);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  useEffect(() => {
    const sectionEl = document.getElementById(activeSection);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth" });
      console.log(sectionEl);
    }
  }, [activeSection]);

  return (
    <div className="app">
      <Home />
      <Projects projects={projects} />
      <About />
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        projects={projects}
      />
    </div>
  );
}

export default App;
