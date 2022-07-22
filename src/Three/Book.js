import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Book({ position, color }) {
  const ref = useRef();
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01));

  return (
    <mesh position={position} ref={ref}>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshPhongMaterial color={color} attach="material" />
    </mesh>
  );
}
