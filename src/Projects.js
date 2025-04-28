import "./Project.css";
import westernrank from "./Project Pictures/westernrank.png";
import squadify from "./Project Pictures/squadify.png";
import genesys from "./Project Pictures/genesys.png";
import heatseek from "./Project Pictures/heatseek.png";
import acutally from "./Project Pictures/actually.png";
import { useState } from "react";

const ProjectList = [
  {
    name: "Western Rank",
    image: westernrank,
    desc: "An open source course review platform for Western University and affiliate colleges.",
    link: "https://www.westernrank.com/",
  },
  {
    name: "Actually.Ai",
    image: acutally,
    desc: "Real-time AI factchecker. Provides a live transcription and fact-checking of any video stream using Azure AI and LLMs.",
    link: "https://github.com/ArsalaanAli/Actually",
  },
  {
    name: "Genesys AI Training Bot",
    image: genesys,
    desc: "Won 1st place at Hack The North (Genesys API). Combines the Genesys platform with LLMs to create a training bot for customer service agents.",
    link: "https://github.com/ArsalaanAli/HackTheNorth2023",
  },
  {
    name: "Squadify",
    image: squadify,
    desc: "A Web App built to help users compare their spotify stats with their friends. Built with React (Frontend), Flask (Backend), and Firebase (Database).",
    link: "https://github.com/ArsalaanAli/squadify",
  },
  {
    name: "Heat-Seek",
    image: heatseek,
    desc: "A 3D Mobile plane fighting game built with Unity, C#, and Cinema4D.",
    link: "https://github.com/ArsalaanAli/HEAT-SEEK",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(ProjectList[0]);

  return (
    <div className="overallContainer">
      <div className="project">
        <h1 className="projectTitle">Projects</h1>
      </div>
      <div className="projects-layout">
        {/* Top Bar */}
        <div className="projects-topbar">
          {ProjectList.map((proj) => (
            <div
              key={proj.name}
              className={`topbar-project ${
                selectedProject?.name === proj.name ? "selected" : ""
              }`}
              onClick={() => setSelectedProject(proj)}
            >
              <h3>{proj.name}</h3>
            </div>
          ))}
        </div>

        {/* Main Display */}
        <div className="project-display">
          <Project
            name={selectedProject.name}
            image={selectedProject.image}
            desc={selectedProject.desc}
            link={selectedProject.link}
          />
        </div>
      </div>
    </div>
  );
}

function Project(props) {
  return (
    <div className="projectContainer">
      <img className="projectImage" src={props.image} alt={props.name} />
      <div className="projectText">
        <h1>{props.name}</h1>
        <div className="projectDesc">{props.desc}</div>
        <button
          className="projectButton"
          onClick={() => {
            window.open(props.link, "_blank", "noopener,noreferrer");
          }}
        >
          Visit
        </button>
      </div>
    </div>
  );
}
