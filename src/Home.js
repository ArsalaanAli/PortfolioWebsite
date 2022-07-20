import { React, useRef, useState } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import ThreeRenders from "./ThreeRenders";
export default function Home() {
  const [currentModel, setCurrentModel] = useState(0);

  return (
    <div>
      <ThreeRenders currentModel={currentModel} />
      <div className="title-holder">
        <p className="hi name">Hi, I'm </p>
        {/* <p className="name"></p> */}
        <TypeText setCurrentModel={setCurrentModel} />
      </div>
    </div>
  );
}

const TypeText = (props) => {
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
          .callFunction(() => {
            props.setCurrentModel(1);
          })
          .deleteAll()
          .typeString("Student.")
          .pauseFor(4000)
          .callFunction(() => {
            props.setCurrentModel(2);
          })
          .deleteAll()
          .typeString("Musician.")
          .pauseFor(4000)
          .callFunction(() => {
            props.setCurrentModel(0);
          })
          .start();
      }}
    />
  );
};
