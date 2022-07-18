import { React, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./Three.css";
import Model from "./Three/Laptop";
import Lights from "./Three/Lights";

export default function ThreeRenders() {
  function Box() {
    const myMesh = useRef();
    const [shrinkObject, setShrinkObject] = useState(false);
    const [growObject, setGrowObject] = useState(false);

    useFrame(({ clock }) => {
      myMesh.current.rotation.y = -clock.getElapsedTime();
      if (shrinkObject) {
        myMesh.current.scale.multiplyScalar(0.8);
        if (myMesh.current.scale.x <= 0.01) {
          setShrinkObject(false);
          setGrowObject(true);
        }
      }
      if (growObject) {
        myMesh.current.scale.multiplyScalar(1.2);
        if (myMesh.current.scale.x >= 1) {
          setGrowObject(false);
        }
      }
    });

    return (
      <mesh
        ref={myMesh}
        onClick={() => {
          setShrinkObject(true);
        }}
      >
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    );
  }

  return (
    <div className="container">
      <Canvas>
        {/* <directionalLight position={[0, 0, 5]} /> */}
        <Lights />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
