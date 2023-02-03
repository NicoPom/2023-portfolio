import React, { useContext, useState } from "react";
import { ProjectContext } from "../hooks/context";

import ActionButton from "./ActionButton";

import ContactList from "./ContactList";

import { projectsData } from "../data/projects";
import { sectionsData } from "../data/sections";

import "../styles/navbar.css";

const Navbar = ({ activeSection, setActiveSection }) => {
  const { isNavOpen, isInfoOpen, toggle, setIsNavOpen } =
    useContext(ProjectContext);

  const [expandedSections, setExpandedSections] = useState([]);

  // Toggles the expanded state of the Projects or Contact section
  const toggleExpanded = (sectionId) => {
    setExpandedSections((prevExpandedSections) =>
      prevExpandedSections.includes(sectionId)
        ? prevExpandedSections.filter((id) => id !== sectionId)
        : [...prevExpandedSections, sectionId]
    );
  };

  // Create a list of projects for the "Projects" section
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

  // Create a list of sections for the main navigation bar
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
          {section.id === "contact" && <ContactList />}
        </ul>
      )}
    </li>
  ));

  // Create an array of `ActionButton` components for each project
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
