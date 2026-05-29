"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} position={[0, 0, 0]} color="#915eff" />
      
      {/* Stylized Computer Workspace */}
      <group position={[0, -3.5, 0]}>
        {/* Table top */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[12, 0.4, 6]} />
          <meshStandardMaterial color='#100d25' roughness={0.1} metalness={0.8} />
        </mesh>
        
        {/* Computer Case (Gamer PC vibe) */}
        <group position={[-4, 1.5, -1]}>
          <mesh>
            <boxGeometry args={[1.5, 2.5, 3]} />
            <meshStandardMaterial color='#050816' roughness={0} metalness={1} />
          </mesh>
          {/* PC Glass side */}
          <mesh position={[0.76, 0, 0]}>
            <boxGeometry args={[0.01, 2.3, 2.8]} />
            <meshStandardMaterial color='#915eff' transparent opacity={0.3} emissive='#915eff' emissiveIntensity={0.5} />
          </mesh>
        </group>

        {/* Dual Monitors Setup */}
        <group position={[0, 2.2, -1.5]}>
          {/* Main Monitor */}
          <mesh>
            <boxGeometry args={[5, 3, 0.2]} />
            <meshStandardMaterial color='#050816' />
          </mesh>
          <mesh position={[0, 0, 0.11]}>
            <planeGeometry args={[4.8, 2.8]} />
            <meshStandardMaterial color='#915eff' emissive='#915eff' emissiveIntensity={0.2} />
          </mesh>
          {/* Stand */}
          <mesh position={[0, -1.5, 0]}>
            <boxGeometry args={[0.4, 1.5, 0.4]} />
            <meshStandardMaterial color='#aaa6c3' />
          </mesh>
        </group>

        {/* Keyboard & Mouse */}
        <mesh position={[0, 0.3, 1.5]}>
          <boxGeometry args={[3, 0.1, 1]} />
          <meshStandardMaterial color='#1d1836' />
        </mesh>
        <mesh position={[2.5, 0.25, 1.5]}>
          <boxGeometry args={[0.4, 0.2, 0.6]} />
          <meshStandardMaterial color='#915eff' emissive='#915eff' emissiveIntensity={0.5} />
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
