import React from "react";
import ReactDOM from "react-dom/client";
import InfoContextProvider from "./hooks/context";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InfoContextProvider>
      <App />
    </InfoContextProvider>
  </React.StrictMode>
);
