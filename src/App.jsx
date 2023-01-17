import React, { useEffect, useState } from "react";
import { InfoContext } from "./hooks/context";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

import "./styles/app.css";

import { sectionsData } from "./assets/sections";
import { projectsData } from "./assets/projects";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { isInfoOpen, toggleInfo } = React.useContext(InfoContext);

  const handleClick = (id) => {
    setActiveSection(id);
    const sectionEl = document.getElementById(id);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      sectionsData.concat(projectsData).forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight) {
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
  console.log(isInfoOpen);
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
