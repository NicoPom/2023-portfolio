import React from "react";
import "../styles/navbar.css";

const Navbar = ({ projects, activeSection, setActiveSection }) => {
  const sections = ["home", "about", "projects", "contacts"];

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

  return (
    <div className="navbar navbar--opened">
      <div className="navbar__top">
        <nav>
          <ul className="navbar__list">{sectionElements}</ul>
        </nav>
      </div>

      <div className="navbar__bottom">
        <div className="navbar__display">
          <span className="navbar__display--text">{activeSection}</span>
          <img src="src/assets/images/menu.svg" alt="menu_svg" />
        </div>
        <div className="navbar__actions">
          <img src="src/assets/images/close.svg" alt="close_svg" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
