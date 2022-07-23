import { React, useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./Three.css";
import Laptop from "./Three/Laptop";
import Book from "./Three/Book";
import Guitar from "./Three/Guitar";
import Lights from "./Three/Lights";

export default function ThreeRenders(props) {
  return (
    <div className="container">
      <Canvas>
        <Lights />
        <Suspense fallback={null}>
          <Models currentModel={props.currentModel} />
        </Suspense>
      </Canvas>
    </div>
  );
}

const Models = (props) => {
  const [displayModel, setDisplayModel] = useState(0);
  var shrinking = false;
  useFrame(({ clock }) => {});

  if (shrinking === true) {
    shrinking = false;
  }
  if (props.currentModel !== displayModel) {
    shrinking = true;
  }
  console.log(displayModel);
  if (displayModel === 0) {
    console.log("laptop");
    return <Laptop shrink={shrinking} callNextModel={setDisplayModel} />;
  }
  if (displayModel === 1) {
    console.log("book");

    return <Book shrink={shrinking} callNextModel={setDisplayModel} />;
  }
  if (displayModel === 2) {
    console.log("other");

    return <Guitar shrink={shrinking} callNextModel={setDisplayModel} />;
  }
};
