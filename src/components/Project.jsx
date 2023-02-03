import React, { useContext, useState, useEffect } from "react";
import { ProjectContext } from "../hooks/context";
import Infos from "./Infos";
import "../styles/project.css";

const Project = ({
  project: { id, title, thumbnail, alt, stack, details, liveSite },
}) => {
  // Get the "isInfoOpen" value from the context
  const { isInfoOpen } = useContext(ProjectContext);

  // State to store the appropriate image source
  const [src, setSrc] = useState(thumbnail.mobile);

  // Update the image source based on the screen size
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth > 1000
        ? setSrc(thumbnail.desktop)
        : window.innerWidth > 700
        ? setSrc(thumbnail.tablet)
        : setSrc(thumbnail.mobile);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Clean up the event listener
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
