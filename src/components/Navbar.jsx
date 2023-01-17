import React from "react";
import ActionButton from "./ActionButton";
import { projectsData } from "../assets/projects";
import { sectionsData } from "../assets/sections";

import "../styles/navbar.css";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpened, setIsOpened] = React.useState(false);

  const projectsList = projectsData.map((project) => {
    return (
      <li key={project.id} className="navbar--project__item">
        <span
          className={project.id === activeSection ? "active" : ""}
          onClick={() => setActiveSection(project.id)}
        >
          {project.title}
        </span>
      </li>
    );
  });

  const sectionList = sectionsData.map((section) => {
    return (
      <li className="navbar--section__item" key={section.id}>
        <span
          className={section.id === activeSection ? "active" : ""}
          onClick={
            section.id !== "contact" ? () => setActiveSection(section.id) : null
          }
        >
          {section.id}
        </span>
        {section.id === "projects" && (
          <ul className="navbar--projects__list">{projectsList}</ul>
        )}
      </li>
    );
  });

  const actionButtonElement = projectsData.map((project) => {
    if (project.id === activeSection) {
      return (
        <ActionButton
          key={project.id}
          activeSection={activeSection}
          isOpened={isOpened}
          project={project}
        />
      );
    }
    return null;
  });

  return (
    <div className={`navbar ${isOpened ? "navbar--opened" : ""}`}>
      {isOpened && (
        <div className="navbar__top">
          <nav>
            <ul className="navbar__list">{sectionList}</ul>
          </nav>
        </div>
      )}

      <div className="navbar__bottom">
        <div className="navbar__display" onClick={() => setIsOpened(!isOpened)}>
          <span className="navbar__display--text">{activeSection}</span>
          <img src="src/assets/images/menu.svg" alt="menu_svg" />
        </div>
        {actionButtonElement}
      </div>
    </div>
  );
};

export default Navbar;
