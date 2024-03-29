export const Shrink = (meshRef) => {
  meshRef.current.scale.multiplyScalar(0.7);
  if (meshRef.current.scale.x <= 0.01) {
    return true;
  }
  return false;
};

export const Grow = (meshRef) => {
  meshRef.current.scale.multiplyScalar(1.2);
  if (meshRef.current.scale.x >= 1) {
    meshRef.current.scale.x = 1;
    meshRef.current.scale.y = 1;
    meshRef.current.scale.z = 1;
    return true;
  }
  return false;
};

export const SetStartingSize = (meshRef) => {
  meshRef.current.scale.x = 0.01;
  meshRef.current.scale.y = 0.01;
  meshRef.current.scale.z = 0.01;
};
