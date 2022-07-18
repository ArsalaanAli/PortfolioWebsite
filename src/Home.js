import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import ThreeRenders from "./ThreeRenders";
export default function Home() {
  return (
    <div>
      <ThreeRenders />
      <div className="title-holder">
        <p className="hi name">Hi, I'm </p>
        {/* <p className="name"></p> */}
        <TypeText />
      </div>
    </div>
  );
}

const TypeText = () => {
  return (
    <Typewriter
      options={{
        loop: true,
        wrapperClassName: "typewriter",
        cursorClassName: "cursor",
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Web Developer.")
          .pauseFor(4000)
          .deleteAll()
          .typeString("Student.")
          .pauseFor(4000)
          .deleteAll()
          .typeString("Musician.")
          .pauseFor(4000)
          .start();
      }}
    />
  );
};

const onNode = () => {
  console.log("hello");
};
