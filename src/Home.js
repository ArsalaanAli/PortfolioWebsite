import { React, useState } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import ThreeRenders from "./ThreeRenders";

import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";

export default function Home() {
  const [currentModel, setCurrentModel] = useState(0);

  return (
    <div className="homeContainer">
      <ThreeRenders currentModel={currentModel} />
      <div className="title-holder">
        <Sidebar />
        <div className="hi name">Hi, I'm </div>
        {/* <p className="name"></p> */}
        <TypeText setCurrentModel={setCurrentModel} />
      </div>
    </div>
  );
}
const Sidebar = () => {
  return (
    <div className="sidebarContainer">
      <div className="githubIcon">
        <VscGithub
          onClick={() => {
            window.open(
              "https://github.com/ArsalaanAli",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        />
      </div>
      <div className="linkedinIcon">
        <FaLinkedinIn
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/arsalaan-ali-9681131a7/",
              "_blank",
              "noopener,noreferrer"
            );
          }}
        />
      </div>
    </div>
  );
};

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
          .typeString("Developer.")
          .pauseFor(2000)
          .callFunction(() => {
            props.setCurrentModel(1);
          })
          .deleteAll()
          .typeString("Student.")
          .pauseFor(2000)
          .callFunction(() => {
            props.setCurrentModel(2);
          })
          .deleteAll()
          .typeString("Musician.")
          .pauseFor(2000)
          .callFunction(() => {
            props.setCurrentModel(0);
          })
          .start();
      }}
    />
  );
};
