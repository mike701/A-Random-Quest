import React from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { FirstPersonControls, OrbitControls, PerspectiveCamera, PointerLockControls, Sky, useCamera } from "@react-three/drei";
import { usePlane } from "@react-three/cannon";
import { Suspense} from 'react'
import { TextureLoader } from 'three'
import { Physics } from '@react-three/cannon';
import * as THREE from "three";
import {UserControl} from './UserControl.jsx'
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
    <Canvas style={{position:"relative", height: "100vh", width: "80vw"}} shadows gl={{alpha:false}} camera={{fov:45}}>
    <Sky sunPosition={[100, 20, 100]} ></Sky>
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100,100,100]}></pointLight>
          <Physics gravity={[0,-30,0]}>
          <Plane args={[1000, 1000]} rotation={[-Math.PI / 2, 0, 0]} map-repeat={[240, 240]} color="brown" />
          <UserControl></UserControl>
        </Physics>
        <PointerLockControls></PointerLockControls>
    </Canvas> 
  )
}
