import "./Project.css";
import visualg from "./Project Pictures/visualg.png";
export default function Projects() {
  return (
    <div>
      <div className="project">
        <h1 className="projectTitle">Projects</h1>
      </div>
      <div>
        <Project
          name="Visu-Alg"
          image={visualg}
          desc="An interactive website for visualizing graph traversal algorithms built with React."
          link="www.visu-alg.com"
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
