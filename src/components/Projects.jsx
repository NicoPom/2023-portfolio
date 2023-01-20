import React from "react";
import Project from "./Project";
import "../styles/projects.css";
import { projectsData } from "../data/projects";

const Projects = () => (
  <section id="projects" className="projects--section">
    {projectsData.map((project) => (
      <Project key={project.id} project={project} />
    ))}
  </section>
);

export default Projects;
