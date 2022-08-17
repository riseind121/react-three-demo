
import React from "react";
import { useBox } from "@react-three/cannon";
const Box = (props) => {
  
    const [ref] =useBox(()=>({mass:0.00001,...props}))
    

    return (
      <mesh ref={ref} {...props}>
        <boxGeometry  args={[1,1,1]}/>
        <meshBasicMaterial color='blue'/>
        
      </mesh>
    )
};
export default Box;
