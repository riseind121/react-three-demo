import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { useBox } from "@react-three/cannon";
const Box = (props) => {
    const [ref] = useBox(() => ({ mass: 0.00000001, position: [0, 5, 0], ...props }))
    useFrame(()=>{
        
    })
    return (
      <mesh ref={ref}>
        <boxGeometry  args={[1,1,1]}/>
        <meshBasicMaterial color='pink'/>
        
      </mesh>
    )
};
export default Box;
