import React, { useContext } from "react";
import { InfoContext } from "../hooks/context";
import Infos from "./Infos";
import "../styles/project.css";

const Project = ({
  project: { id, title, thumbnail, alt, description, stack, details },
}) => {
  const { isInfoOpen, toggleInfo } = useContext(InfoContext);

  return (
    <div id={id} className="project">
      <h4>{title}</h4>
      <img src={thumbnail} alt={alt} />
      <p>{description}</p>
      {isInfoOpen[id] && <Infos stack={stack} details={details} />}
    </div>
  );
};

export default Project;
