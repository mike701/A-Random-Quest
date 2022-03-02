import React, { useLayoutEffect, useRef } from 'react'
import { Canvas, useLoader,useFrame } from '@react-three/fiber'
import { PointerLockControls, Sky, Text, useAnimations, useFBX, useGLTF, useNormalTexture} from "@react-three/drei";
import { usePlane } from "@react-three/cannon";
import { Physics } from '@react-three/cannon';
import * as THREE from "three";
import { UserControl } from './UserControl.jsx'



export default function Environment() {
  const woodMap = useLoader(THREE.TextureLoader, '/pexels-fwstudio-129731.jpg');
  const boardMap = useLoader(THREE.TextureLoader, '/pexels-cottonbro-3826435.jpg');

  // const [normalMap] = useNormalTexture(
  //   0, // index of the normal texture - https://github.com/emmelleppi/normal-maps/blob/master/normals.json
  //   // second argument is texture attributes
  //   {
  //     offset: [0, 0],
  //     repeat: [1.5, 1.5],
  //     anisotropy: 8
  //   }
  // )
  function Avatar(props) {
    const { nodes, scene } = useGLTF("/scene.gltf");
    console.log(nodes, scene)    
    // const { actions } = useAnimations(animations, group)
    useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
    return   <group ref={group} rotation={[0, 0, 0]} scale={[1, 1, 1]} position={props.position}>
      <primitive object={scene} />
      <primitive 
            object={model.scene}
            scale={[1,1,1]}
        />
    </group>
  }
  function Plane(props) {
    const roughnessMap = useNormalTexture('/pexels-jonathan-borba-3601244',{offset:[0,0],repeat:[1.2,1.3],anisotropy:10});
    const [ref] = usePlane(() => ({ rotation: props.rotation, position: props.position }));
    woodMap.wrapS=woodMap.wrapT=THREE.RepeatWrapping
    return (
      <mesh ref={ref} position={props.position} rotation={props.rotation}>
        <planeBufferGeometry args={props.args} attach='geometry' />
        <meshStandardMaterial attach='material'  map={woodMap} >
          <mesh normalMap={roughnessMap}></mesh>
          </meshStandardMaterial>
      </mesh>)
  }

  function QuestBoard(props) {
    const [ref] = usePlane(() => ({ rotation: props.rotation, position: props.position }));
    woodMap.wrapS=woodMap.wrapT=THREE.RepeatWrapping
    return (
      <mesh ref={ref} position={props.position} rotation={props.rotation}>
        <planeBufferGeometry args={props.args} attach='geometry' />
        <meshStandardMaterial attach='material'  map={boardMap} />
        <Text fontSize={1.25} lineHeight={1} letterSpacing={0.05} color={'#EC2D2D'} position={[0, 0, 0.5]} maxWidth={20} textAlign={"center"}>
          Hello, if this is not your first foray into the A-Random-Quest three-D environment Welcome back!
          Otherwise welcome here are some instructions. Use WASD for direction controls and space to hop. 
          If you have clicked the screen and want to leave press esc key. There is a pointer lock that follows your cursor
          so you can rotate your view.
        </Text>
      </mesh>)
  }

  return ( 
    <Canvas style={{position:"relative", height: "100vh", width: "80vw"}} shadows gl={{alpha:false}} camera={{fov:45}}>
    <Sky sunPosition={[100, 20, 100]} ></Sky>
        <ambientLight intensity={0.3} />
        <pointLight castShadow intensity={0.8} position={[100,100,100]}></pointLight>
          <Physics gravity={[0,-30,0]}>
        <Plane args={[1000, 1000]} rotation={[-Math.PI / 2, 0, 0]} map-repeat={[240, 240]} color="brown" />
        <QuestBoard args={[20, 20]} rotation={[0, -Math.PI / 2, 0]} position={[10,10,10]}/>
        <UserControl></UserControl>
        <Avatar position={[0,10,0]}></Avatar>
        </Physics>
        <PointerLockControls></PointerLockControls>
    </Canvas> 
  )
}

useGLTF.preload("/scene.gltf")
useFBX.preload("/HipHopDancing(1).fbx")
