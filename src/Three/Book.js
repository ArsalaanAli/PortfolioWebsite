import React, { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Grow, SetStartingSize, Shrink } from "./MorphFunctions";
import { useGLTF } from "@react-three/drei";

export default function Book(props) {
  const ref = useRef();
  const { viewport } = useThree();
  const { nodes, materials } = useGLTF("../../Book.glb");
  var grow = true;
  var stillShrink = true;

  useEffect(() => {
    SetStartingSize(ref);
    grow = true;
  }, []);

  useFrame(({ clock }) => {
    if (props.shrink && stillShrink) {
      if (Shrink(ref)) {
        stillShrink = false;
        props.callNextModel(2);
      }
    }
    if (!props.shrink && grow) {
      grow = !Grow(ref);
    }
    ref.current.rotation.y = -clock.getElapsedTime();
  });

  return (
    <group ref={ref} {...props} dispose={null} position={[0, 0, -2]}>
      <group
        position={[0, -0.5, 0]}
        scale={[0.72, 1.81, 1.41].map((x) => x * (viewport.width / 10))}
        rotation={[Math.PI / 4, -Math.PI / 2, -Math.PI / 2]}
      >
        <mesh geometry={nodes.Cube001.geometry} material={materials.Material} />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.019"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("../../Book.glb");
