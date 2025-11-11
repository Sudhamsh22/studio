'use client';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm_postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm_postprocessing/ShaderPass.js';
import { CopyShader } from 'three/examples/jsm_postprocessing/CopyShader.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import './styles.css';

const Hyperspeed = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    let scene: THREE.Scene,
      camera: THREE.PerspectiveCamera,
      renderer: THREE.WebGLRenderer,
      composer: EffectComposer;
    let starGeo: THREE.BufferGeometry;
    let stars: THREE.Points;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      camera.position.z = 1;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current?.appendChild(renderer.domElement);

      const renderScene = new RenderPass(scene, camera);
      const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5,
        0.4,
        0.85
      );
      bloomPass.threshold = 0;
      bloomPass.strength = 0.6;
      bloomPass.radius = 0;

      composer = new EffectComposer(renderer);
      composer.setSize(window.innerWidth, window.innerHeight);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);
      const copyPass = new ShaderPass(CopyShader);
      copyPass.renderToScreen = true;

      const positions = new Float32Array(6000);
      const velocities = new Float32Array(6000);

      for (let i = 0; i < 6000; i++) {
        positions[i] = (Math.random() - 0.5) * 600;
        velocities[i] = 0;
      }

      starGeo = new THREE.BufferGeometry();
      starGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      starGeo.setAttribute('velocity', new THREE.BufferAttribute(velocities, 1));
      
      const sprite = new THREE.TextureLoader().load('/star.png');
      const starMaterial = new THREE.PointsMaterial({
        color: 0xaaaaaa,
        size: 0.7,
        map: sprite,
        transparent: true,
      });

      stars = new THREE.Points(starGeo, starMaterial);
      scene.add(stars);

      window.addEventListener('resize', onWindowResize, false);

      animate();
    };

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      const positions = starGeo.attributes.position.array as Float32Array;
      const velocities = starGeo.attributes.velocity.array as Float32Array;

      for (let i = 0; i < positions.length; i += 3) {
        velocities[i/3] += 0.005;
        positions[i + 2] += velocities[i/3];

        if (positions[i + 2] > 200) {
          positions[i + 2] = -200;
          velocities[i/3] = 0;
        }
      }

      starGeo.attributes.position.needsUpdate = true;
      stars.rotation.z += 0.002;

      requestAnimationFrame(animate);
      composer.render();
    };

    init();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="hyperspeed-canvas" />;
};

export default Hyperspeed;
