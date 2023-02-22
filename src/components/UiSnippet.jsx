import React, { useContext } from "react";
import Infos from "./Infos";
import { ProjectContext } from "../hooks/context";

const UiSnippet = ({ data: { title, iframe, stack, details, id } }) => {
  // Get the "isInfoOpen" value from the context
  const { isInfoOpen } = useContext(ProjectContext);
  return (
    <div className="ui-snippet project" id={id}>
      <h4>{title}</h4>
      <iframe
        src={iframe}
        width="50%"
        frameBorder="0"
        title="ui-snippet"
      ></iframe>
      <Infos stack={stack} details={details} isInfoOpen={isInfoOpen[id]} />
    </div>
  );
};

export default UiSnippet;
