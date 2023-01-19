import React, { useContext, useState, useEffect } from "react";
import { ProjectContext } from "../hooks/context";
import Infos from "./Infos";
import "../styles/project.css";

const Project = ({
  project: { id, title, thumbnail, alt, description, stack, details },
}) => {
  const { isInfoOpen } = useContext(ProjectContext);
  const [src, setSrc] = useState(thumbnail.mobile);

  const handleResize = () => {
    window.innerWidth > 768
      ? setSrc(thumbnail.tablet)
      : window.innerWidth > 1024
      ? setSrc(thumbnail.desktop)
      : setSrc(thumbnail.mobile);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id={id} className="project">
      <h4>{title}</h4>
      <img src={src} alt={alt} />
      <p>{description}</p>
      {isInfoOpen[id] && <Infos stack={stack} details={details} />}
    </div>
  );
};

export default Project;
