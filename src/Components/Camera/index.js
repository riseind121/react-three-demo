import { PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const CustomCamera = ()=>{
    const ref = useRef(null)
   
    return <PerspectiveCamera ref={ref} makeDefault position={[0,20,50]}/>
}
export default CustomCamera