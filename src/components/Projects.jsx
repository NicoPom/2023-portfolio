import React from "react";
import { projectsData } from "../assets/projectsData";
import "../styles/projects.css";

function Projects() {
  const projectsElements = projectsData.map((project) => {
    return (
      <div className="project" key={project.id}>
        <h4>{project.title}</h4>
        <img src={project.thumbnail} alt={project.alt} />
      </div>
    );
  });

  return (
    <section id="projects--section" className="projects--section">
      {projectsElements}
    </section>
  );
}

export default Projects;
