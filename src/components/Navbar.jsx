import React from "react";

import "../styles/navbar.css";

function Navbar(props) {
  const { projects, activeSection, setActiveSection } = props;
  const sections = ["home", "about", "projects", "contacts"];

  function handleClick(id) {
    setActiveSection(id);
  }

  const projectsList = projects.map((project) => {
    return (
      <li key={project.id}>
        <a
          className={project.id === activeSection ? "active" : ""}
          onClick={() => handleClick(project.id)}
        >
          {project.title}
        </a>
      </li>
    );
  });

  const sectionElements = sections.map((section) => {
    return (
      <li key={section}>
        <a
          className={section === activeSection ? "active" : ""}
          onClick={() => handleClick(section)}
        >
          {section}
        </a>
        {section === "projects" && (
          <ul className="nav--projects--list">{projectsList}</ul>
        )}
      </li>
    );
  });

  return (
    <div className="navbar--section">
      <div className="navigation--container">
        <nav>
          <ul className="nav--main--list">{sectionElements}</ul>
        </nav>
        <img src="src/assets/images/menu.svg" alt="menu_svg" />
      </div>
      <div className="actions--container">
        <img src="src/assets/images/close.svg" alt="close_svg" />
      </div>
    </div>
  );
}

export default Navbar;
