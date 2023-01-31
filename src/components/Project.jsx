import React, { useContext, useState, useEffect } from "react";
import { ProjectContext } from "../hooks/context";
import Infos from "./Infos";
import "../styles/project.css";

const Project = ({
  project: { id, title, thumbnail, alt, stack, details, liveSite },
}) => {
  const { isInfoOpen } = useContext(ProjectContext);
  const [src, setSrc] = useState(thumbnail.mobile);

  const handleResize = () => {
    // handle the image source depending on the screen size
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
        <img className="raise" src={src} alt={alt} />
      </a>

      <Infos stack={stack} details={details} isInfoOpen={isInfoOpen[id]} />
    </div>
  );
};

export default Project;
