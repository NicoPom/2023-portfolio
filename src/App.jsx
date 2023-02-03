import React, { useEffect, useState, useContext } from "react";
import { ProjectContext } from "./hooks/context";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import "./styles/app.css";
import { sectionsData } from "./data/sections";
import { projectsData } from "./data/projects";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { toggle, isNavOpen } = useContext(ProjectContext);

  // Function to handle clicks on the navigation bar
  const handleClick = (id) => {
    setActiveSection(id);
    // Close the navigation bar if it's open
    if (isNavOpen) toggle("nav");
    // Scroll to the section
    const sectionEl = document.getElementById(id);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check the visibility of all sections
      [...sectionsData, ...projectsData].forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if the middle of the element is in the viewport
          if (
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2
          ) {
            // Prevent clipping effect when scrolling between projects
            if (section.id !== "projects") setActiveSection(section.id);
          }
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts
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
