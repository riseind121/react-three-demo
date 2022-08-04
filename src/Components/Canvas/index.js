import React from 'react'
import { Canvas } from '@react-three/fiber'
import Box from '../Box'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Plane from '../Plane'
import { Physics, usePlane, useBox } from '@react-three/cannon'
const CustomCanvas = (props)=>{

    return <Canvas  style={{height :'90vh'}} >      
    <Physics>
    <ambientLight />
     <PerspectiveCamera makeDefault position={[0,10,0]}/>
        <OrbitControls />
        <Box position={[0,200,0]} />
        <Box position={[0,100,0]} />
        <spotLight position={[0, 4, 10]} />
        <Plane />
        </Physics>
       
    </Canvas>
}
export default CustomCanvas