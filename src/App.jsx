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
  const [scrollingTimeout, setScrollingTimeout] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollingTimeout) {
        clearTimeout(scrollingTimeout);
      }
      setScrollingTimeout(
        setTimeout(() => {
          sections.forEach((section) => {
            const el = document.getElementById(section);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top >= 0 && rect.top <= window.innerHeight) {
                setActiveSection(section);
              }
            }
          });
        }, 50)
      );
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, setActiveSection, scrollingTimeout]);

  const handleClick = (id) => {
    setActiveSection(id);
  };

  useEffect(() => {
    const sectionEl = document.getElementById(activeSection);
    if (sectionEl) {
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  }, [activeSection]);

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
