import React from "react";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.4}>
        <pointLight position={[0, 50, 0]} intensity={2} />
      </ambientLight>
    </>
  );
};

export default Lights;
