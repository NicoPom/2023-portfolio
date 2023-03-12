import React, { useContext, useState } from "react";
import { ProjectContext } from "../hooks/context";

import ActionButton from "./ActionButton";
import ContactList from "./ContactList";

import { projectsData } from "../data/projects";
import { sectionsData } from "../data/sections";
import { uiSnippetsData } from "../data/uiSnippet";

import "../styles/navbar.css";

const Navbar = ({ activeSection, setActiveSection }) => {
  const { isNavOpen, isInfoOpen, toggle, setIsNavOpen } =
    useContext(ProjectContext);

  const [expandedSections, setExpandedSections] = useState([]);

  const handleNavLinkClick = (section) => {
    // those are the sections that have a dropdown menu
    if (
      !["contact", "projects", "ui"].includes(section.id) &&
      activeSection !== section.id
    ) {
      setActiveSection(section.id);
    }
    if (["contact", "projects", "ui"].includes(section.id)) {
      toggleExpanded(section.id);
    }
  };

  // Toggles the expanded state of nav sections
  const toggleExpanded = (sectionId) => {
    setExpandedSections((prevExpandedSections) => {
      if (prevExpandedSections.includes(sectionId)) {
        // Collapse all sections
        return [];
      } else {
        // Expand only the current section
        return [sectionId];
      }
    });
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

  // Create a list of ui snippets
  const uiList = uiSnippetsData.map((snippet) => (
    <li key={snippet.id} className="navbar--sublist__item">
      <span
        className={`navbar--link ${
          snippet.id === activeSection ? "active" : ""
        }`}
        onClick={() => setActiveSection(snippet.id)}
      >
        {snippet.title}
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
        onClick={() => handleNavLinkClick(section)}
      >
        {section.id}
      </span>
      {(section.id === "projects" ||
        section.id === "contact" ||
        section.id === "ui") && (
        <ul
          className={`navbar--sublist ${
            expandedSections.includes(section.id) ? "expanded" : ""
          }`}
        >
          {section.id === "projects" && projectsList}
          {section.id === "ui" && uiList}
          {section.id === "contact" && <ContactList />}
        </ul>
      )}
    </li>
  ));

  // Create an array of `ActionButton` components for each project
  const actionButtonElement = [...projectsData, ...uiSnippetsData].map(
    (project) =>
      project.id === activeSection && (
        <ActionButton
          key={project.id}
          activeSection={activeSection}
          project={project}
        />
      )
  );

  return (
    <div
      // onMouseLeave={() => setIsNavOpen(false)}
      className={`navbar ${
        activeSection !== "home" ? "navbar__is--shown" : ""
      }`}
    >
      <div
        className={`navbar__top ${isNavOpen ? "navbar__top__is--open " : ""} `}
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
            <span className="navbar__display--text">
              {activeSection !== "home" && activeSection}
            </span>
            <img src="images/menu.svg" alt="menu_svg" />
          </div>
        )}

        {actionButtonElement}
      </div>
    </div>
  );
};

export default Navbar;
