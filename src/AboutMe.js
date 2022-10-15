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
        <h1 className="amTitle">About Me</h1>
        <div className="amText">
          Hi, my name is Arsalaan and I'm{" "}
          <span className="highlightText">{age}</span> years old
        </div>
      </div>
    </div>
  );

  function getAge() {
    const bd = new Date("03/26/2003");
    const td = new Date();
    const diff = td - bd;
    var ageYears = diff / 31556952000;
    setAge(ageYears.toFixed(8));
  }
}
