"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      
      {/* Stylized Computer Placeholder using primitives */}
      <group position={[0, -3, 0]}>
        {/* Table top */}
        <mesh position={[0, -0.1, 0]}>
          <boxGeometry args={[10, 0.2, 5]} />
          <meshStandardMaterial color='#1d1836' />
        </mesh>
        
        {/* Monitor Stand */}
        <mesh position={[0, 0.5, -1]}>
          <boxGeometry args={[0.5, 1, 0.5]} />
          <meshStandardMaterial color='#aaa6c3' />
        </mesh>
        
        {/* Monitor Screen */}
        <mesh position={[0, 2, -1]}>
          <boxGeometry args={[4, 2.5, 0.1]} />
          <meshStandardMaterial color='#100d25' emissive='#1d1836' />
        </mesh>

        {/* Keyboard */}
        <mesh position={[0, 0.1, 1]}>
          <boxGeometry args={[2, 0.1, 0.8]} />
          <meshStandardMaterial color='#383e56' />
        </mesh>
      </group>
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
