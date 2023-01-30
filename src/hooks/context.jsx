import React, { createContext, useState, useEffect } from "react";

export const ProjectContext = createContext();

const ProjectContextProvider = (props) => {
  const [isInfoOpen, setIsInfoOpen] = useState({});
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggle = (type, id) => {
    if (type === "info") {
      setIsInfoOpen({ ...isInfoOpen, [id]: !isInfoOpen[id] });
    } else if (type === "nav") {
      setIsNavOpen(!isNavOpen);
    }
  };

  useEffect(() => {
    if (Object.values(isInfoOpen).some((val) => val === true)) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isInfoOpen]);

  return (
    <ProjectContext.Provider
      value={{ isInfoOpen, isNavOpen, toggle, setIsNavOpen }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
