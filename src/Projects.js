import "./Project.css";
export default function Projects() {
  return (
    <div>
      <div className="project">
        <h1 className="projectTitle">Projects</h1>
      </div>
      <div>
        <Project />
      </div>
    </div>
  );
}

function Project(name, image, desc, link) {
  return (
    <div className="projectContainer">
      <img
        className="projectImage"
        src="https://i.pinimg.com/originals/ef/8e/3f/ef8e3f91866671588015bf50a7b4cffc.png"
        alt="waterfall"
      />
      <div className="projectText">
        <h1>Project Name</h1>
        <p>This is a description of the project found above. wOW WTF?</p>
      </div>
    </div>
  );
}
