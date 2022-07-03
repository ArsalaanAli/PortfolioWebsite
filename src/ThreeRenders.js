import { React, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export default function ThreeRenders() {
  function Box() {
    const myMesh = useRef();

    useFrame(({ clock }) => {
      myMesh.current.rotation.y = clock.getElapsedTime();
    });

    return (
      <mesh ref={myMesh}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    );
  }

  return (
    <div className="canvasContainer">
      <Canvas>
        <directionalLight position={[0, 0, 5]} />
        <Box />
      </Canvas>
    </div>
  );
}
