'use client'

import React, { useRef } from 'react'

import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

import Ball from './Ball'

import { skills } from '../constants'

const Skills = () => {
  const totalRows = Math.ceil(skills.length / 4)
  const centerOffset = ((totalRows - 1) * 1.5) / 2

  return (
    <div className='h-[100vh] flex flex-col items-center justify-center'>
      
      <Canvas>
        {/* <OrbitControls enableZoom={false} enablePan={false}/> */}
        <ambientLight intensity={2}/>
        <directionalLight position={[2, 1, 1]}/>
        <group position={[-2, 0, 0]}>
          {skills.map((skill, index) => {
            const x = (index % 4) * 1.2
            const row = Math.floor(index / 4)
            const y = -row * 1.5 + centerOffset
            return <Ball key={index} textureUrl={skill['image']} position={[x, y, 0]} label={skill['name']} index={index}/>
          })}
        </group>
      </Canvas>
    </div>
  )
}

export default Skills