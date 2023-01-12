import React from "react";
import "./styles/app.css";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Infos from "./components/Infos";

function App() {
  return (
    <div className="app">
      <Home />
      <Projects />
      <Infos />
      <About />
      <Navbar />
    </div>
  );
}

export default App;
