import React, { useContext } from "react";
import "../styles/navbar.css";
import { InfoContext } from "../hooks/context";

const ActionButton = ({ activeSection, isOpened, project }) => {
  if (
    !isOpened &&
    activeSection !== "home" &&
    activeSection !== "contacts" &&
    activeSection !== "about" &&
    activeSection !== "projects"
  ) {
    const { isInfoOpen, toggleInfo } = useContext(InfoContext);

    return (
      <div className="navbar__actions">
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
      </div>
    );
  }
};

export default ActionButton;
// <div className="navbar__actions">
//   <img src="src/assets/images/close.svg" alt="close_svg" />
// </div>
