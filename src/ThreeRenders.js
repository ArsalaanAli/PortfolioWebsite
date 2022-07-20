import { React, useRef, useState, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./Three.css";
import Laptop from "./Three/Laptop";
import Lights from "./Three/Lights";

export default function ThreeRenders(props) {
  return (
    <div className="container">
      <Canvas>
        <Lights />
        <Suspense fallback={null}>
          <Models currentMode={props.currentModel} />
        </Suspense>
      </Canvas>
    </div>
  );
}

const Models = (props) => {
  var displayModel = 0;
  var scale = [1, 1, 1];
  var shrinking = false;

  if (props.currentModel !== displayModel) {
    displayModel = props.currentModel;
  }

  return <Laptop shrink={shrinking} />;
};
