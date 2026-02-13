"use client";

import React, { useRef } from "react";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import Ball from "./Ball";

import { skills } from "../constants";

import { useEffect, useState } from "react";

const Skills = () => {
  const totalRows = Math.ceil(skills.length / 4);
  const centerOffset = ((totalRows - 1) * 1.5) / 2;

  const [webglAvailable, setWebglAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    // Detect WebGL availability on the client
    try {
      const canvas = document.createElement("canvas");
      const gl =
        (canvas.getContext("webgl2") as WebGL2RenderingContext | null) ||
        (canvas.getContext("webgl") as WebGLRenderingContext | null) ||
        (canvas.getContext(
          "experimental-webgl",
        ) as WebGLRenderingContext | null);
      setWebglAvailable(!!gl);
      if (!gl) {
        console.warn("WebGL not available in this browser/environment.");
      }
    } catch (err) {
      console.warn("Error while checking WebGL support:", err);
      setWebglAvailable(false);
    }
  }, []);

  // While we don't yet know if WebGL is available, render nothing to avoid
  // creating a Canvas during SSR/initial paint.
  if (webglAvailable === null) {
    return <div className="h-[100vh]" />;
  }

  // Fallback UI when WebGL is not available (prevent runtime error)
  if (!webglAvailable) {
    return (
      <div className="h-[100vh] flex flex-col items-center justify-center text-center text-gray-300">
        <p className="mb-4">
          WebGL is not available in your browser or environment.
        </p>
        <div className="grid grid-cols-4 gap-4 max-w-3xl w-full px-4">
          {skills.map((skill, idx) => (
            <div key={idx} className="p-3 bg-tab-color rounded">
              <img
                src={skill.image}
                alt={skill.name}
                className="mx-auto h-12 object-contain"
              />
              <div className="text-xs mt-2 text-white text-center">
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <Canvas className="w-full h-full">
        {/* <OrbitControls enableZoom={false} enablePan={false}/> */}
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <group position={[-2, 0, 0]}>
          {skills.map((skill, index) => {
            const x = (index % 4) * 1.2;
            const row = Math.floor(index / 4);
            const y = -row * 1.5 + centerOffset;
            return (
              <Ball
                key={index}
                textureUrl={skill["image"]}
                position={[x, y, 0]}
                label={skill["name"]}
                index={index}
              />
            );
          })}
        </group>
      </Canvas>
    </div>
  );
};

export default Skills;
