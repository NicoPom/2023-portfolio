import React from "react";
import ActionButton from "./ActionButton";

import "../styles/navbar.css";

const Navbar = ({ projects, activeSection, setActiveSection }) => {
  const sections = ["home", "about", "projects", "contacts"];
  const [isOpened, setIsOpened] = React.useState(false);

  const projectsList = projects.map((project) => {
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

  const sectionElements = sections.map((section) => {
    return (
      <li key={section} className="navbar--section__item">
        <span
          className={section === activeSection ? "active" : ""}
          onClick={() => setActiveSection(section)}
        >
          {section}
        </span>
        {section === "projects" && (
          <ul className="navbar--projects__list">{projectsList}</ul>
        )}
      </li>
    );
  });

  const actionButtonElement = projects.map((project) => {
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
            <ul className="navbar__list">{sectionElements}</ul>
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
