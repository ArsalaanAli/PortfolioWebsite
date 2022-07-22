export const Shrink = (meshRef) => {
  meshRef.current.scale.multiplyScalar(0.8);
  if (meshRef.current.scale.x <= 0.01) {
    return true;
  }
  return false;
};

export const Grow = (meshRef) => {
  meshRef.current.scale.multiplyScalar(1.2);
  console.log(meshRef.current.scale);
  if (meshRef.current.scale.x >= 1) {
    meshRef.current.scale.x = 1;
    meshRef.current.scale.y = 1;
    meshRef.current.scale.z = 1;
    return true;
  }
  return false;
};
