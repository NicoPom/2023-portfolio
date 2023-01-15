import React from "react";
import Project from "./Project";
import "../styles/projects.css";

const Projects = ({ projects }) => (
  <section id="projects" className="projects--section">
    {projects.map((project) => (
      <Project key={project.id} project={project} />
    ))}
  </section>
);

export default Projects;
