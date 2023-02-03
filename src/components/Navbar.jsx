import React, { useContext, useState } from "react";
import { ProjectContext } from "../hooks/context";

import ActionButton from "./ActionButton";
import ProjectsList from "./ProjectsList";
import ContactList from "./ContactList";

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
          {section.id === "projects" && (
            <ProjectsList
              projects={projectsData}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          )}
          {section.id === "contact" && <ContactList />}
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
