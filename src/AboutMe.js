import "./AboutMe.css";
import { useEffect, useState } from "react";
export default function AboutMe() {
  var [age, setAge] = useState(0);

  useEffect(() => {
    setInterval(getAge, 100);
  });

  return (
    <div className="amContainer">
      <div>
        <div className="flexContainer">
          <h1 className="amTitle">About Me</h1>
        </div>
        <div className="amText">
          Hi, my name is Arsalaan and I'm{" "}
          <span className="highlightText">{age}</span> years old
        </div>
      </div>
      <div>
        <Experience />
      </div>
    </div>
  );

  function getAge() {
    const bd = new Date("03/26/2003");
    const td = new Date();
    const diff = td - bd;
    const ageYears = diff / 31556952000;
    setAge(ageYears.toFixed(8));
  }

  function Experience() {
    return (
      <div>
        <div></div>
      </div>
    );
  }
}
