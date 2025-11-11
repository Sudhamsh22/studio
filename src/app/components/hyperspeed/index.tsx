'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Scene() {
  const starsRef = useRef<THREE.Points>(null!);

  useFrame((_, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={50}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

export default function Hyperspeed() {
  return (
    <div className="hyperspeed-canvas">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['hsl(var(--background))']} />
        <Scene />
        <Sparkles count={100} scale={20} size={6} speed={0.4} color="hsl(var(--primary))" />
      </Canvas>
    </div>
  );
}
