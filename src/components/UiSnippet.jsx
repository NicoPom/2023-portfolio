import React, { useContext } from "react";
import Infos from "./Infos";
import { ProjectContext } from "../hooks/context";
import "../styles/uiSnippet.css";

const UiSnippet = ({ data: { title, iframe, stack, details, id } }) => {
  // Get the "isInfoOpen" value from the context
  const { isInfoOpen } = useContext(ProjectContext);
  return (
    <div className="ui-snippet project" id={id}>
      <h4>{title}</h4>
      <div className="iframe-container">
        <iframe src={iframe} frameBorder="0" title="ui-snippet"></iframe>
      </div>
      <Infos stack={stack} details={details} isInfoOpen={isInfoOpen[id]} />
    </div>
  );
};

export default UiSnippet;
