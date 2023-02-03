import React from "react";

const ProjectsList = ({ projects, activeSection, setActiveSection }) => {
  const projectsList = projects.map((project) => (
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

  return <ul className="navbar--sublist">{projectsList}</ul>;
};

export default ProjectsList;
