import "./App.css";
import { React, useRef } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  return (
    <div className="bg" ref={homeRef}>
      <Navbar homeRef={homeRef} projectsRef={projectsRef} />
      <div>
        <Home />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div>
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
