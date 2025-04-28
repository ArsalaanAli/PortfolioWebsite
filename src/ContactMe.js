import React from "react";
import "./ContactMe.css";

export default function ContactMe() {
  return (
    <div className="contactContainer">
      <h1 className="contactTitle">Contact Me</h1>
      <p className="contactText">
        Feel free to reach out to me via email or connect with me on LinkedIn!
      </p>
      <div className="contactLinks">
        <a
          href="mailto:arsalaanali2@gmail.com"
          className="contactLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/arsalaanalics"
          className="contactLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
