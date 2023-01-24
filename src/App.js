import "./App.css";
import { React, useRef } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import AboutMe from "./AboutMe"; //ABOUT BUTTON DOESNT SCROLL PROPERLY
import Experience from "./Experience";

function App() {
  const projectsRef = useRef(null);
  const expRef = useRef(null);
  const abRef = useRef(null);
  return (
    <div className="bg">
      <Navbar projectsRef={projectsRef} expRef={expRef} abRef={abRef} />
      <div>
        <Home />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={expRef}>
        <Experience />
      </div>
      <div ref={abRef}>
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
