import React, { useContext } from "react";
import "../styles/actionButton.css";
import { ProjectContext } from "../hooks/context";

const ActionButton = ({ activeSection, navIsOpen, project }) => {
  const { isInfoOpen, isNavOpen, toggle } = useContext(ProjectContext);

  return (
    <div
      className={`navbar__actions ${
        isNavOpen ? "" : "navbar__actions__is--open"
      }`}
    >
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
            className="clickable action--button"
            src="assets/images/infos.svg"
            alt="infos_svg"
            onClick={() => toggle("info", activeSection)}
          />
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <img
              className="action--button"
              src="assets/images/github.svg"
              alt="github_svg"
            />
          </a>
          <a href={project.liveSite} target="_blank" rel="noopener noreferrer">
            <img
              className="action--button"
              src="assets/images/external.svg"
              alt="external_svg"
            />
          </a>
        </>
      )}
    </div>
  );
};

export default ActionButton;
