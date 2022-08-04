import React, { useEffect, useRef, useState } from "react";
import { Canvas, events } from "@react-three/fiber";
import Box from "../Box";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Plane from "../Plane";
import { Physics } from "@react-three/cannon";
import CustomCamera from "../Camera";

const CustomCanvas = () => {

  
  return (
    
      <Canvas style={{ height: "90vh" }}>
        <Physics>
          <ambientLight />
          <CustomCamera />
          <OrbitControls />
          <Plane position={[0, 0, 0]} />
          <Box position={[0,1,0]} />
          <Box position={[0, 100, 10]} />
          <spotLight position={[0, 4, 10]} />
        </Physics>
      </Canvas>
    
  );
};
export default CustomCanvas;
