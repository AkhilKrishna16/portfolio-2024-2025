import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { OrbitControls, Html } from '@react-three/drei'
import * as THREE from 'three'

interface BallProps {
  textureUrl: string,
  position: [number, number, number],
  label: string,
  index: number,
}

const Ball = ({ textureUrl, position, label, index}: BallProps) => {
  const mesh = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [emissiveColor, setEmissiveColor] = useState(new THREE.Color('red'))

  useFrame((_, delta) => {
    if(mesh.current) {
      if(index % 2 === 0) {
        mesh.current.rotation.y += delta * Math.random()
        mesh.current.rotation.x += delta * Math.random()
        mesh.current.rotation.z += delta * Math.random()
      } else {
        mesh.current.rotation.y -= delta * Math.random()
        mesh.current.rotation.x -= delta * Math.random()
        mesh.current.rotation.z -= delta * Math.random()
      }
      
      // Lerp the emissive color
      const targetColor = hovered ? new THREE.Color('white') : new THREE.Color('black')
      emissiveColor.lerp(targetColor, 0.05) // Adjust this value to change the speed of the transition
      setEmissiveColor(emissiveColor.clone())
    }
  })

  const texture = useLoader(TextureLoader, textureUrl)

  return (
    <group>
      <mesh ref={mesh} position={position} onPointerOver={() => {setHovered(true)}} onPointerOut={() => {setHovered(false)}}> 
        <boxGeometry args={[.4, .4, .4]}/>
        <meshStandardMaterial
          map={texture}
          emissive={emissiveColor}
          emissiveIntensity={emissiveColor.equals(new THREE.Color('black')) ? 0 : 0.2}
        />
      </mesh>
      <Html position={[position[0], position[1] - 0.6, position[2]]} center distanceFactor={10}>
        <p className='text-white text-center text-sm w-full font-semibold tracking-[.15em]'>{label.toUpperCase().split('').map((char, charIndex) => {
              return <span key={charIndex} className='hover:text-red-400 transition-all duration-200 cursor-default'>
                {char}
              </span>
        })}</p>
      </Html>
    </group>
  )
}

export default Ball