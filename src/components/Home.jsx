import React from "react";
import "../styles/home.css";

const Home = ({ setActiveSection }) => (
  <section id="home" className="home--section">
    <div className="central--text">
      <h3>Nicolas Pomares</h3>
      <h1>Portfolio</h1>
      <h2>Frontend Dev</h2>
    </div>
    <div className="continue--scroll--container ">
      <a onClick={() => setActiveSection("projects")}>
        <span className="scroll--span hover-underline-animation">
          See my work
        </span>
        <img src="images/arrow_down.svg" alt="arrow_down_svg" />
      </a>
    </div>
  </section>
);

export default Home;
