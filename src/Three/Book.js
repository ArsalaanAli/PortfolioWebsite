import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Grow, SetStartingSize, Shrink } from "./MorphFunctions";

export default function Book(props) {
  const ref = useRef();
  var grow = true;
  var stillShrink = true;

  useEffect(() => {
    SetStartingSize(ref);
    grow = true;
  }, []);

  useFrame(() => {
    if (props.shrink && stillShrink) {
      if (Shrink(ref)) {
        stillShrink = false;
        props.callNextModel(2);
      }
    }
    if (!props.shrink && grow) {
      grow = !Grow(ref);
    }
    ref.current.rotation.x = ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshPhongMaterial attach="material" />
    </mesh>
  );
}