import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Grow, SetStartingSize, Shrink } from "./MorphFunctions";

export default function Guitar(props) {
  const { viewport } = useThree();
  const ref = useRef();
  const { nodes, materials } = useGLTF("../../Guitar.glb");
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
        props.callNextModel(0);
      }
    }
    if (!props.shrink && grow) {
      grow = !Grow(ref);
    }
    ref.current.rotation.y = -clock.getElapsedTime();
  });

  return (
    <group ref={ref} {...props} dispose={null} position={[0, 0, 0]}>
      <group
        position={[0, viewport.width / 10, 0]}
        rotation={[-Math.PI / 8, -Math.PI / 2, -Math.PI / 2]}
        scale={[1, 1, 1].map((x) => x * (viewport.width / 9))}
      >
        <mesh
          geometry={nodes.Plane.geometry}
          material={materials["Material.002"]}
        />
        <mesh geometry={nodes.Plane_1.geometry} material={materials.Material} />
        <mesh
          geometry={nodes.Plane_2.geometry}
          material={materials["Material.017"]}
        />
        <mesh
          geometry={nodes.Plane_3.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Plane_4.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Plane_5.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Plane_6.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Plane_7.geometry}
          material={materials["Material.009"]}
        />
        <mesh
          geometry={nodes.Plane_8.geometry}
          material={materials["Material.010"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("../../Guitar.glb");
