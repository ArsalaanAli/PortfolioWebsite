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
          <div className="expHolder" key={exp.name}>
            <h1 className="expTitle">{exp.title}</h1>
            <div className="expName">{exp.name}</div>
            <div className="expDate">{exp.date}</div>
            <div className="expList">
              {exp.achievements.map((point, ind) => (
                <li className="expLi" key={ind}>
                  {point}
                </li>
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
      "Created weekly lessons about Data structures and Algorithms",
      "Led a team of 4 instructors to plan an exciting and educational classroom experience",
    ],
  },
  {
    name: "MasseyHacks",
    title: "Python Workshop Host",
    date: "2020",
    achievements: [
      "Taught a workshop about the fundamentals of Python to a live class at a hackathon",
      "Worked with coordinators to execute and live stream the workshop",
    ],
  },
  {
    name: "VMSS Debate",
    title: "Software Developer",
    date: "Feb. 2020 - Sep. 2021",
    achievements: [
      "Used Google Cloud Platform, Flask, and Python to implement a Python backend and create a digital database",
      "Used Python to build a matchmaking system and user interface to facilitate club activities",
      "Established a 100% automated system for record keeping and managing the club's data",
    ],
  },
  {
    name: "University of Windsor Programming Competition",
    title: "Competitive Programmer",
    date: "2019",
    achievements: [
      "Won 1st place out of 30+ teams",
      "Used knowledge of data structures and algorithms to code solutions to complex problems in Python and C++",
    ],
  },
  {
    name: "ECOO Programming Competition",
    title: "Competitive Programmer",
    date: "2019",
    achievements: [
      "Won 2nd place",
      "Used knowledge of data structures and algorithms to code solutions to complex problems in Python and C++",
      "Qualified to Regional Competition",
    ],
  },
];

export default Experience;
