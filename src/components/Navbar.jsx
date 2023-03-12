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
  // Only one section can be expanded at a time.
  const toggleExpanded = (sectionId) => {
    setExpandedSections((prevExpandedSections) =>
      prevExpandedSections.includes(sectionId) ? [] : [sectionId]
    );
  };

  const createNavLink = (id, title) => (
    <span
      key={id}
      className={`navbar--link ${id === activeSection ? "active" : ""}`}
      onClick={() => handleNavLinkClick({ id })}
    >
      {title}
    </span>
  );

  // Creates the dropdown menu for the sections that have one
  const createSubList = (sectionId) => {
    const data =
      sectionId === "projects"
        ? projectsData
        : sectionId === "ui"
        ? uiSnippetsData
        : [];
    return (
      <ul
        className={`navbar--sublist ${
          expandedSections.includes(sectionId) ? "expanded" : ""
        }`}
      >
        {data.map(({ id, title }) => (
          <li key={id} className="navbar--sublist__item">
            {createNavLink(id, title)}
          </li>
        ))}
        {sectionId === "contact" && <ContactList />}
      </ul>
    );
  };

  const sectionList = sectionsData.map(({ id }) => (
    <li key={id} className="navbar--section__item">
      {createNavLink(id, id)}
      {["projects", "contact", "ui"].includes(id) && createSubList(id)}
    </li>
  ));

  const actionButtonElements = [...projectsData, ...uiSnippetsData]
    .filter((project) => project.id === activeSection)
    .map(({ id, ...rest }) => (
      <ActionButton
        key={id}
        activeSection={activeSection}
        project={{ id, ...rest }}
      />
    ));

  return (
    <div
      className={`navbar ${
        activeSection !== "home" ? "navbar__is--shown" : ""
      }`}
    >
      <div
        className={`navbar__top ${isNavOpen ? "navbar__top__is--open " : ""}`}
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

        {actionButtonElements}
      </div>
    </div>
  );
};

export default Navbar;
