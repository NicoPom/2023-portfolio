import React from "react";

import Project from "./Project";
import "../styles/projects.css";

function Projects(props) {
  const { projects } = props;
  const projectsElements = projects.map((project) => {
    return <Project key={project.id} project={project} />;
  });

  return (
    <section id="projects" className="projects--section">
      {projectsElements}
    </section>
  );
}

export default Projects;
