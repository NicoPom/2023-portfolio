import React from "react";

const UiSnippet = ({ iframe }) => {
  return (
    <div className="ui-snippet project" id="uisnippet">
      <iframe src={iframe} frameBorder="0" title="ui-snippet"></iframe>
    </div>
  );
};

export default UiSnippet;
