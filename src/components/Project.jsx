import React from "react";
import Infos from "./Infos";
import "../styles/project.css";

function Project(props) {
  const { id, title, thumbnail, alt, description, stack, details } =
    props.project;
  return (
    <div id={id} className="project">
      <h4>{title}</h4>
      <img src={thumbnail} alt={alt} />
      <p>{description}</p>
      <Infos stack={stack} details={details} />
    </div>
  );
}

export default Project;
