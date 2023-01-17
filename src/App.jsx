import React, { useEffect, useState } from "react";
import "./styles/app.css";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

import { projectsData } from "./assets/projectsData";
import sections from "./assets/sections";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = (id) => {
    setActiveSection(id);
    const sectionEl = document.getElementById(id);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight) {
            setActiveSection(section);
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
      <Projects projects={projectsData} />
      <About />
      <Navbar
        activeSection={activeSection}
        setActiveSection={handleClick}
        projects={projectsData}
      />
    </div>
  );
};

export default App;
