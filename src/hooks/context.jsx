import React, { createContext, useState, useContext } from "react";

export const InfoContext = createContext();

const InfoContextProvider = (props) => {
  const [isInfoOpen, setIsInfoOpen] = useState({});

  const toggleInfo = (id) => {
    setIsInfoOpen({ ...isInfoOpen, [id]: !isInfoOpen[id] });
  };

  return (
    <InfoContext.Provider value={{ isInfoOpen, toggleInfo }}>
      {props.children}
    </InfoContext.Provider>
  );
};

export default InfoContextProvider;
