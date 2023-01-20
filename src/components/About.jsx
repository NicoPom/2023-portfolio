import React from "react";
import "../styles/about.css";

const About = ({ setActiveSection }) => {
  return (
    <section id="about" className="about">
      <div className="back--scroll--container">
        <a onClick={() => setActiveSection("projects")}>
          <img src="assets/images/arrow_up.svg" alt="arrow_up_svg" />
          <span>Back to my work</span>
        </a>
      </div>

      <div className="paragraph--container">
        <p>
          Hi, I'm Nicolas and I am a Frontend Developer who creates beautiful,
          user-friendly websites.
        </p>
        <p>
          My analytical mind and keen problem solving skill allows me to create
          intuitive and engaging user experiences.
        </p>
        <p>
          I am always looking for opportunities to work with talented designers
          to create stunning, intuitive designs that provide a great user
          experience.
        </p>
        <p>
          I am excited to connect with other professionals in the industry and
          explore collaboration opportunities on various projects.
        </p>
      </div>
    </section>
  );
};

export default About;
