import React from "react";
import { projectsData } from "../assets/projectsData";
import Project from "./Project";
import "../styles/projects.css";

function Projects() {
  const projectsElements = projectsData.map((project) => {
    return <Project key={project.id} project={project} />;
  });

  return (
    <section id="projects--section" className="projects--section">
      {projectsElements}
    </section>
  );
}

export default Projects;
