import React from "react";
import { projectsData } from "../assets/projectsData";

import "../styles/navbar.css";

function Navbar() {
  const projectsElements = projectsData.map((project) => {
    return (
      <li key={project.id}>
        <a href={`#project${project.id}`}>{project.title}</a>
      </li>
    );
  });

  return (
    <div className="navbar--section">
      <div className="navigation--container">
        <nav>
          <ul className="nav--main--list">
            <li>
              <a href="#about--section">about</a>
            </li>
            <li>
              <a href="#projects--section">Projects</a>
              <ul className="nav--sub--list">{projectsElements}</ul>
            </li>
            <li>
              Contacts
              <ul className="nav--sub--list">
                <li>LinkedIn</li>
                <li>GitHub</li>
                <li>nicolaspomaresdev@gmail.com</li>
              </ul>
            </li>
          </ul>
        </nav>
        <img src="src/assets/images/menu.svg" alt="menu_svg" />
      </div>
      <div className="actions--container">
        <img src="src/assets/images/close.svg" alt="close_svg" />
      </div>
    </div>
  );
}

export default Navbar;
