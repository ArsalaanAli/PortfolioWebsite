import "./App.css";
import { React } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Divider from "./Divider";
import Projects from "./Projects";

function App() {
  return (
    <div className="bg">
      <Navbar />
      <Home />
      <Divider />
      <Projects />
    </div>
  );
}

export default App;
