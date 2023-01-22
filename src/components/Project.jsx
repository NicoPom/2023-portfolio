import React, { useContext, useState, useEffect } from "react";
import { ProjectContext } from "../hooks/context";
import Infos from "./Infos";
import "../styles/project.css";

const Project = ({
  project: { id, title, thumbnail, alt, description, stack, details, liveSite },
}) => {
  const { isInfoOpen } = useContext(ProjectContext);
  const [src, setSrc] = useState(thumbnail.mobile);

  const handleResize = () => {
    // handle the image size depending on the screen size
    window.innerWidth > 1000
      ? setSrc(thumbnail.desktop)
      : window.innerWidth > 700
      ? setSrc(thumbnail.tablet)
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
      <a href={liveSite} target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} />
      </a>
      <p>{description}</p>
      {isInfoOpen[id] && <Infos stack={stack} details={details} />}
    </div>
  );
};

export default Project;
