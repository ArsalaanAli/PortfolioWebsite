import "./Project.css";
import visualg from "./Project Pictures/visualg.png";
import squadify from "./Project Pictures/squadify.png";
import fmd from "./Project Pictures/findmyduo.png";
import heatseek from "./Project Pictures/heatseek.png";
export default function Projects() {
  return (
    <div className="overallContainer">
      <div className="project">
        <h1 className="projectTitle">Projects</h1>
      </div>
      <div className="tempProj">
        <Project
          name="Visu-Alg"
          image={visualg}
          desc="An interactive website for visualizing graph traversal algorithms built with React."
          link="https://www.visu-alg.com"
        />
        <Project
          name="Find My Duo"
          image={fmd}
          desc="A social network app to help Valorant Players find new teammates. Built with React (Frontend), Firebase (Database), and the Discord Api (User Authentication)."
          link="https://github.com/ArsalaanAli/findmyduo"
        />
        <Project
          name="Squadify"
          image={squadify}
          desc="A Web App built to help users compare their spotify stats with their friends. Built with React (Frontend), Flask (Backend), and Firebase (Database)."
          link="https://github.com/ArsalaanAli/squadify"
        />
        <Project
          name="Heat-Seek"
          image={heatseek}
          desc="A 3D Mobile plane fighting game built with Unity, C#, and Cinema4D."
          link="https://github.com/ArsalaanAli/squadify"
        />
      </div>
    </div>
  );
}

function Project(props) {
  return (
    <div className="projectContainer">
      <img className="projectImage" src={props.image} alt="waterfall" />
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
