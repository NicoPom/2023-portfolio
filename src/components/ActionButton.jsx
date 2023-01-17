import React, { useContext } from "react";
import "../styles/navbar.css";
import { InfoContext } from "../hooks/context";

const ActionButton = ({ activeSection, navIsOpen, project }) => {
  const { isInfoOpen, toggleInfo } = useContext(InfoContext);
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
            src="src/assets/images/close.svg"
            alt="close_svg"
            onClick={() => toggleInfo(activeSection)}
          />
        )}
        {!isInfoOpen[activeSection] && (
          <>
            <img
              src="src/assets/images/infos.svg"
              alt="infos_svg"
              onClick={() => toggleInfo(activeSection)}
            />
            <a href={project.github}>
              <img src="src/assets/images/github.svg" alt="github_svg" />
            </a>
            <a href={project.liveSite}>
              <img src="src/assets/images/external.svg" alt="external_svg" />
            </a>
          </>
        )}
      </div>
    );
  }
  return null;
};

export default ActionButton;
