

import { usePlane } from "@react-three/cannon";
const Plane = (props)=>{
    const [ref]=usePlane(()=>({position:[0,0,0],rotation:[-( (Math.PI / 2)), 0, 0] }))
    
    
    return <mesh ref={ref}>
        <planeGeometry args={[10,200]}/>
        <meshBasicMaterial color="yellow"/>
    </mesh>
}
export default Plane