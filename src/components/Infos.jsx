import React from "react";
import { projectsData } from "../assets/projectsData";

function Infos() {
  const infosElements = projectsData.map((project) => {
    return (
      <div className="project--infos" key={project.id}>
        <h5>Stack</h5>
        <p>{project.stack}</p>
        <h5>Details</h5>
        <p>{project.details}</p>
      </div>
    );
  });

  return <section className="infos">{infosElements}</section>;
}

export default Infos;
