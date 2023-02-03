import React from "react";

const ContactList = () => (
  <ul className="navbar--contact__list">
    <li className="navbar--sublist__item">
      <a
        className="navbar--link hover-underline-animation"
        href="https://github.com/NicoPom"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </li>
    <li className="navbar--sublist__item">
      <a
        className="navbar--link hover-underline-animation"
        href="https://www.linkedin.com/in/nicolas-pomares-4a8535197/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </li>
    <li className="navbar--sublist__item">
      <a
        className="navbar--link hover-underline-animation"
        href="mailto: nicolaspomaresdev@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        nicolaspomaresdev@gmail.com
      </a>
    </li>
  </ul>
);

export default ContactList;
