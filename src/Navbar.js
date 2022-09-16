import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <div className="nav">
      <ul>
        <li>
          <p
            onClick={() => {
              props.homeRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </p>
        </li>
        <li>
          <p
            onClick={() => {
              props.projectsRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Projects
          </p>
        </li>
        <li>
          <p
            onClick={() => {
              props.homeRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About Me
          </p>
        </li>
        <li>
          <p
            onClick={() => {
              props.homeRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </p>
        </li>
      </ul>
    </div>
  );
}
