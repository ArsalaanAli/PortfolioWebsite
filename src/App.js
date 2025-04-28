import "./App.css";
import { React, useRef } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import ContactMe from "./ContactMe";

function App() {
  const projectsRef = useRef(null);
  const expRef = useRef(null);
  const abRef = useRef(null);
  const contRef = useRef(null);

  return (
    <div className="bg">
      <Navbar
        projectsRef={projectsRef}
        expRef={expRef}
        abRef={abRef}
        contRef={contRef}
      />
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
      <div ref={contRef}>
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
