import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Shrink, Grow, SetStartingSize } from "./MorphFunctions";

export default function Laptop(props) {
  const { viewport } = useThree();
  const myMesh = useRef();
  const { nodes, materials } = useGLTF("../../laptop.glb");
  var stillShrink = true;
  var grow = true;

  useEffect(() => {
    grow = true;
    SetStartingSize(myMesh);
  }, []);

  useFrame(({ clock }) => {
    if (props.shrink && stillShrink) {
      if (Shrink(myMesh)) {
        stillShrink = false;
        props.callNextModel(1);
      }
    }
    if (!props.shrink && grow) {
      grow = !Grow(myMesh);
    }
    myMesh.current.rotation.y = -clock.getElapsedTime();
  });

  return (
    <group ref={myMesh} {...props} dispose={null} position={[0, 0, -2]}>
      <group
        position={[0, 0, 0]}
        rotation={[Math.PI / 16, -Math.PI / 2, -Math.PI / 2]}
        scale={[1.48, 0.2, 2.02].map((x) => x * (viewport.width / 10))}
      >
        <mesh geometry={nodes.Cube002.geometry} material={materials.Material} />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={materials["Material.019"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("../../laptop.glb");

// <group ref={myMesh} {...props} dispose={null} position={[0, -2, -4]}>
//   <group
//     position={[0, 0, 0]}
//     rotation={[Math.PI / 16, -Math.PI / 2, -Math.PI / 2]}
//     scale={[1.48, 0.2, 2.02]}
