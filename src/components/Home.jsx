import React from "react";
import "../styles/home.css";
function Home() {
  return (
    <section className="home--section">
      <div className="central--text">
        <h3>Nicolas Pomares</h3>
        <h1>Portfolio</h1>
        <h2>Frontend Dev</h2>
      </div>
      <footer>
        <a href="#projects--section">
          <span>See my work</span>
          <img src="src/assets/images/arrow_down.svg" alt="arrow_down_svg" />
        </a>
      </footer>
    </section>
  );
}

export default Home;
