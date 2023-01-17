import React from "react";
import "../styles/infos.css";

const Infos = ({ stack, details }) => {
  const paragraphs = details.split("\n").map((paragraph, key) => {
    return <p key={key}>{paragraph}</p>;
  });

  return (
    <section className="project--infos">
      <h5>Stack</h5>
      <p className="stack--paragraph">{stack}</p>
      <h5>Details</h5>
      <div className="paragraph--container">{paragraphs}</div>
    </section>
  );
};

export default Infos;
