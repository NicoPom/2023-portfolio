import React, { useContext } from "react";
import "../styles/actionButton.css";
import { ProjectContext } from "../hooks/context";

const ActionButton = ({ activeSection, navIsOpen, project }) => {
  const { isInfoOpen, toggle } = useContext(ProjectContext);
  if (
    !navIsOpen &&
    activeSection !== "home" &&
    activeSection !== "contacts" &&
    activeSection !== "about" &&
    activeSection !== "projects"
  ) {
    return (
      <div className="navbar__actions">
        {isInfoOpen[activeSection] && (
          <img
            className="clickable"
            src="assets/images/close.svg"
            alt="close_svg"
            onClick={() => toggle("info", activeSection)}
          />
        )}
        {!isInfoOpen[activeSection] && (
          <>
            <img
              className="clickable"
              src="assets/images/infos.svg"
              alt="infos_svg"
              onClick={() => toggle("info", activeSection)}
            />
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img src="assets/images/github.svg" alt="github_svg" />
            </a>
            <a
              href={project.liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/images/external.svg" alt="external_svg" />
            </a>
          </>
        )}
      </div>
    );
  }
  return null;
};

export default ActionButton;
