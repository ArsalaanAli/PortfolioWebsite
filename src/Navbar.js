import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="/#">Projects</a>
        </li>
        <li>
          <a href="/#">About Me</a>
        </li>
        <li>
          <a href="/#">Contact Me</a>
        </li>
      </ul>
    </div>
  );
}
