import React from "react";

const UiSnippet = ({ data }) => {
  return (
    <div className="ui-snippet project projects" id="uisnippet">
      <h4>{data.title}</h4>
      <iframe
        src={data.iframe}
        width="50%"
        frameBorder="0"
        title="ui-snippet"
      ></iframe>
    </div>
  );
};

export default UiSnippet;
