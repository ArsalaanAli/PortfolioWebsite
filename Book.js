/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Book.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0.17, 0.61, 0]} scale={[0.72, 1.81, 1.41]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials.Material} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.019']} />
      </group>
    </group>
  )
}

useGLTF.preload('/Book.glb')