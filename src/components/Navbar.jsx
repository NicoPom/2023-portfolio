import React, { useContext, useState } from "react";
import { ProjectContext } from "../hooks/context";

import ActionButton from "./ActionButton";
import { projectsData } from "../data/projects";
import { sectionsData } from "../data/sections";

import "../styles/navbar.css";

const Navbar = ({ activeSection, setActiveSection }) => {
  const { isNavOpen, isInfoOpen, toggle, setIsNavOpen } =
    useContext(ProjectContext);

  const [expandedSections, setExpandedSections] = useState([]);

  const toggleExpanded = (sectionId) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter((id) => id !== sectionId));
    } else {
      setExpandedSections([...expandedSections, sectionId]);
    }
  };

  const projectsList = projectsData.map((project) => (
    <li key={project.id} className="navbar--sublist__item">
      <span
        className={`navbar--link ${
          project.id === activeSection ? "active" : ""
        }`}
        onClick={() => setActiveSection(project.id)}
      >
        {project.title}
      </span>
    </li>
  ));

  const contactList = (
    <ul className="navbar--contact__list">
      <li className="navbar--sublist__item">
        <a
          className="navbar--link hover-underline-animation"
          href="https://github.com/NicoPom"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
      <li className="navbar--sublist__item">
        <a
          className="navbar--link hover-underline-animation"
          href="https://www.linkedin.com/in/nicolas-pomares-4a8535197/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
      <li className="navbar--sublist__item">
        <a
          className="navbar--link hover-underline-animation"
          href="mailto: nicolaspomaresdev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          nicolaspomaresdev@gmail.com
        </a>
      </li>
    </ul>
  );

  const sectionList = sectionsData.map((section) => (
    <li className="navbar--section__item" key={section.id}>
      <span
        className={`navbar--link ${
          section.id === activeSection ? "active" : ""
        }`}
        onClick={() => {
          section.id !== "contact" &&
            section.id !== "projects" &&
            setActiveSection(section.id);
          if (section.id === "projects" || section.id === "contact") {
            toggleExpanded(section.id);
          }
        }}
      >
        {section.id}
      </span>
      {(section.id === "projects" || section.id === "contact") && (
        <ul
          className={`navbar--sublist ${
            expandedSections.includes(section.id) ? "expanded" : ""
          }`}
        >
          {section.id === "projects" && projectsList}
          {section.id === "contact" && contactList}
        </ul>
      )}
    </li>
  ));

  const actionButtonElement = projectsData.map((project) => {
    if (project.id === activeSection) {
      return (
        <ActionButton
          key={project.id}
          activeSection={activeSection}
          project={project}
        />
      );
    }
    return null;
  });

  if (activeSection !== "home")
    return (
      <div className="navbar">
        <div
          className={`navbar__top ${
            isNavOpen ? "navbar__top__is--open " : ""
          } `}
          onMouseLeave={() => setIsNavOpen(false)}
        >
          <nav>
            <ul className="navbar__list">{sectionList}</ul>
          </nav>
        </div>

        <div className="navbar__bottom">
          {!isInfoOpen[activeSection] && (
            <div
              className="navbar__display clickable"
              onClick={() => toggle("nav")}
            >
              <span className="navbar__display--text">{activeSection}</span>
              <img src="images/menu.svg" alt="menu_svg" />
            </div>
          )}

          {actionButtonElement}
        </div>
      </div>
    );
};

export default Navbar;
