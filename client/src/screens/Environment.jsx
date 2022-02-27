import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { FirstPersonControls, OrbitControls, PerspectiveCamera, PointerLockControls, Sky, useCamera } from "@react-three/drei";
import { usePlane } from "@react-three/cannon";
import { Suspense} from 'react'
import { TextureLoader } from 'three'
import { Physics } from '@react-three/cannon';
import * as THREE from "three";
export default function Environment() {
  const woodMap = useLoader(THREE.TextureLoader,'/pexels-fwstudio-129731.jpg');

  function Plane(props) {
    const [ref] = usePlane(() => ({ rotation: props.rotation, position: props.position }));
    woodMap.wrapS=woodMap.wrapT=THREE.RepeatWrapping
    return (
      <mesh ref={ref} position={props.position} rotation={props.rotation}>
        <planeBufferGeometry args={props.args} attach='geometry' />
        <meshStandardMaterial attach='material'  map={woodMap} />
      </mesh>)
  }
  return ( 
    <Canvas style={{ height: "60vh", width: "80vw",left:"20vw" }} shadows gl={{alpha:false}} camera={{fov:45}}>
    <Suspense fallback={null}>
    <Sky sunPosition={[100, 20, 100]} ></Sky>
    <ambientLight intensity={0.3} />
        <FirstPersonControls movementSpeed={100} />
          <Physics gravity={[0,-30,0]}>
            <OrbitControls></OrbitControls>
          <Plane args={[1000, 1000]} rotation={[-Math.PI/2,0,0]}  map-repeat={[240, 240]} color="brown"/>
        </Physics>
        <PointerLockControls></PointerLockControls>
      </Suspense>
    </Canvas> 
  )
}
