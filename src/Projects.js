import "./Project.css";
import visualg from "./Project Pictures/visualg.png";
import squadify from "./Project Pictures/squadify.png";
export default function Projects() {
  return (
    <div>
      <div className="project">
        <h1 className="projectTitle">Projects</h1>
      </div>
      <div className="tempProj">
        <Project
          name="Visu-Alg"
          image={visualg}
          desc="An interactive website for visualizing graph traversal algorithms built with React."
          link="www.visu-alg.com"
        />
        <Project
          name="Squadify"
          image={squadify}
          desc="A Web App built to help users compare their spotify stats with their friends. Built with React, Flask, and Firebase."
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
        <p className="projectDesc">{props.desc}</p>
        <button
          className="projectButton"
          onClick={() => {
            window.location.replace(props.link);
          }}
        >
          Visit
        </button>
      </div>
    </div>
  );
}
