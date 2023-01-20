import React, { useEffect, useState, useContext } from "react";
import { ProjectContext } from "./hooks/context";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

import "./styles/app.css";

import { sectionsData } from "./assets/sections";
import { projectsData } from "./assets/projects";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { toggle, isNavOpen } = useContext(ProjectContext);

  const handleClick = (id) => {
    setActiveSection(id);
    isNavOpen && toggle("nav");
    const sectionEl = document.getElementById(id);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    /**
     * When the user scrolls, check if the top of the element is within 2/3 of the window height, and
     * if so, set the active section to the id of the element.
     */
    const handleScroll = () => {
      sectionsData.concat(projectsData).forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= (2 / 3) * window.innerHeight) {
            setActiveSection(section.id);
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
      <Home setActiveSection={handleClick} />
      <Projects />
      <About setActiveSection={handleClick} />
      <Navbar
        activeSection={activeSection}
        setActiveSection={handleClick}
        sectionsData={sectionsData}
      />
    </div>
  );
};

export default App;
