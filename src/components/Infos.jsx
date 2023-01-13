import React from "react";
import { projectsData } from "../assets/projectsData";
import "../styles/infos.css";

function Infos() {
  const infosElements = projectsData.map((project) => {
    const paragraphs = project.details.split("\n").map((paragraph, key) => {
      return <p key={key}>{paragraph}</p>;
    });

    return (
      <div className="project--infos" key={project.id}>
        <h5>Stack</h5>
        <p className="stack--paragraph">{project.stack}</p>
        <h5>Details</h5>
        <div className="paragraph--container">{paragraphs}</div>
      </div>
    );
  });

  return <section className="infos">{infosElements}</section>;
}

export default Infos;
