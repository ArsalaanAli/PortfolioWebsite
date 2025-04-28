import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div>
      <div className="flexContainer">
        <h1 className="expMainTitle">Experience</h1>
      </div>
      <div>
        {experiences.map((exp) => (
          <div className="expHolder" key={exp.name}>
            <h1 className="expTitle">{exp.name}</h1>
            <div className="expName">{exp.title}</div>
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
    name: "Twilio",
    title: "Software Engineer Intern (Incoming)",
    date: "May. 2025 - Aug. 2025",
    achievements: ["Joining as an engineer on the Twilio Messaging team"],
  },
  {
    name: "J.D. Power",
    title: "Software Development Intern",
    date: "May. 2024 - April. 2025",
    achievements: [
      "Optimized database validation ETLs using Java to reduce network load and validation time",
      "Designed API endpoints using Java, Spring, and SQL to efficiently handle high-volume HTTP requests",
      "Used Ansible to automate server deployments. Created custom Docker containers for internal testing of alerts",
    ],
  },
  {
    name: "Hack Western",
    title: "Lead Software Developer",
    date: "May. 2023 - Dec. 2024",
    achievements: [
      "Led team to build all of the software required to run a Hackathon",
      "Built a backend to serve 1000s of users with TypeScript, Express, and PostgreSQL",
      " Translated Figma mockups and designs into high-quality responsive webapps using React and Tailwind",
    ],
  },
  {
    name: "RBC Design Thinking Program",
    title: "2022 Cohort Member",
    date: "Oct. 2022 - Dec. 2022",
    achievements: [
      "Built an app that provides volunteers to organizations",
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
