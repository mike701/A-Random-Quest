import { useSphere } from '@react-three/cannon'
import React, { useEffect,useRef, useState } from 'react'
import { useThree, useFrame } from "@react-three/fiber"
import * as THREE from "three"


const SPEED = 15
const keys={KeyW: "forward", KeyS: "backward", KeyA:"left", KeyD:"right", Space:"jump"}
const moveFieldByKey=(key)=>keys[key]
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const speed=new THREE.Vector3()


function PlayerControls() {
  const [move, setMove] = useState({ forward: false, backward: false, right: false, left: false, jump: false })
  useEffect(() => {
    const handleKeyDown=(e)=>setMove((m) => ({ ...m, [moveFieldByKey(e.code)]: true }))
    const handleKeyUp = (e) => setMove((m) => ({ ...m, [moveFieldByKey(e.code)]: false }))
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    }
  }, [])
  return move
}

export function UserControl(props) {
  const [ref, api] = useSphere(() => ({ mass: 1, type: "Dynamic", position: [0, 10, 0] }))
  const { forward, backward, right, left, jump } = PlayerControls()
  const { camera } = useThree()
  const velocity = useRef([0, 0, 0])
  useEffect(()=>api.velocity.subscribe((v)=>(velocity.current=v)),[])
  useFrame((state) => {
    ref.current.getWorldPosition(camera.position)
    frontVector.set(0, 0, Number(backward) - Number(forward))
    sideVector.set(Number(left) - Number(right), 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation)
    speed.fromArray(velocity.current)
  })

  api.velocity.set(direction.x, velocity.current[1], direction.z)
  if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
    api.velocity.set(velocity.current[0],10,velocity.current[2])
  }
  return (<>
    <mesh ref={ref}>
    </mesh>
  </>
  )
}
