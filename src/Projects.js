import "./Project.css";
export default function Projects() {
  return (
    <div>
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
      </div>
    </div>
  );
}
