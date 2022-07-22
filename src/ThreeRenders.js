import { React, useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./Three.css";
import Laptop from "./Three/Laptop";
import Book from "./Three/Book";
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
  const myMesh = useRef();

  useFrame(({ clock }) => {});

  if (props.currentModel !== displayModel) {
    shrinking = true;
  }
  console.log(displayModel);
  if (displayModel === 0) {
    console.log("top");
    return <Laptop shrink={shrinking} callNextModel={setDisplayModel} />;
  }
  if (displayModel === 1) {
    console.log("book");
    return <Book shrink={shrinking} />;
  }
};
