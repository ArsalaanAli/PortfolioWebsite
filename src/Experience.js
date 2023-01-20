import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div>
      <div className="flexContainer">
        <h1 className="amTitle">Experience</h1>
      </div>
      <div>
        {experiences.map((exp) => (
          <div className="expHolder">
            <h1 className="expTitle">{exp.title}</h1>
            <div className="expName">{exp.name}</div>
            <div className="expDate">{exp.date}</div>
            <div className="expList">
              {exp.achievements.map((point) => (
                <li className="expLi">{point}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const experiences = [
  {
    name: "RBC Design Thinking Program",
    title: "Software Intern",
    date: "Oct. 2022 - Dec. 2022",
    achievements: [
      "Build an app that provides volunteers to organizations",
      "Used Figma to design prototypes for app frontend",
      "Presented app to RBC Exectutives",
    ],
  },
  {
    name: "Code Reach",
    title: "Programming Teacher",
    date: "Nov. 2020 - May. 2021",
    achievements: [
      "Taught Programming fundamentals in Python to a live class",
      " Created weekly lessons about Data structures and Algorithms",
      "Led a team of 4 instructors to plan an exciting and educational classroom experience",
    ],
  },
  {
    name: "MasseyHacks",
    title: "Python Workshop Host",
    date: "2020",
    achievements: [
      "Taught Programming fundamentals in Python to a live class",
      " Created weekly lessons about Data structures and Algorithms",
      "Led a team of 4 instructors to plan an exciting and educational classroom experience",
    ],
  },
];

export default Experience;
