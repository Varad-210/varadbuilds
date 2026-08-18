import React, { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * AIBrainLaptop
 * A floating 3D laptop with a glowing AI "brain" hologram rising from the
 * open screen — built to sit inside a hero section in place of a static
 * blob/orb graphic. Transparent background, gentle auto-animation, no
 * user interaction required (OrbitControls intentionally omitted).
 */
export default function AIBrainLaptop() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ---------- Scene / Camera / Renderer ----------
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      40,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.1, 7);
    camera.lookAt(0, 0.4, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // ---------- Palette (matches brand blue / navy) ----------
    const NAVY = 0x0f1f3d;
    const NAVY_DARK = 0x0a1730;
    const ACCENT_BLUE = 0x4f7dff;
    const GLOW_BLUE = 0x7fb0ff;
    const BRIGHT_BLUE = 0xbfe0ff;

    // ---------- Lighting ----------
    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xffffff, 0.9);
    keyLight.position.set(3, 5, 4);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(ACCENT_BLUE, 2.2, 12);
    rimLight.position.set(-2, 1.5, 2);
    scene.add(rimLight);

    const brainLight = new THREE.PointLight(GLOW_BLUE, 3, 8);
    brainLight.position.set(0, 2.6, 0.5);
    scene.add(brainLight);

    // ---------- Root group (whole composition floats together) ----------
    const root = new THREE.Group();
    scene.add(root);

    // ---------- Laptop ----------
    const laptop = new THREE.Group();
    root.add(laptop);

    const bodyMat = new THREE.MeshStandardMaterial({
      color: NAVY,
      metalness: 0.6,
      roughness: 0.35,
    });
    const trimMat = new THREE.MeshStandardMaterial({
      color: NAVY_DARK,
      metalness: 0.7,
      roughness: 0.3,
    });

    // Base
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(3.1, 0.14, 2.05),
      bodyMat
    );
    base.position.set(0, 0, 0);
    laptop.add(base);

    // Keyboard deck (slightly inset, darker)
    const deck = new THREE.Mesh(
      new THREE.BoxGeometry(2.85, 0.03, 1.8),
      trimMat
    );
    deck.position.set(0, 0.09, -0.05);
    laptop.add(deck);

    // Screen hinge group (pivot at back edge of base)
    const hinge = new THREE.Group();
    hinge.position.set(0, 0.07, -1.0);
    laptop.add(hinge);

    const screenFrame = new THREE.Mesh(
      new THREE.BoxGeometry(3.1, 1.95, 0.09),
      bodyMat
    );
    // open the lid ~100 degrees, pivoted at hinge, screen extends "up" from hinge
    screenFrame.position.set(0, 0.95, 0);
    hinge.add(screenFrame);
    hinge.rotation.x = -1.72; // open angle

    // Glowing display panel (emissive plane) inset in the frame
    const displayMat = new THREE.MeshStandardMaterial({
      color: 0x08142b,
      emissive: ACCENT_BLUE,
      emissiveIntensity: 0.9,
      metalness: 0.1,
      roughness: 0.4,
    });
    const display = new THREE.Mesh(
      new THREE.PlaneGeometry(2.82, 1.72),
      displayMat
    );
    display.position.set(0, 0.95, 0.051);
    hinge.add(display);

    // Thin bright edge-light along top of screen for a premium look
    const edgeGlow = new THREE.Mesh(
      new THREE.BoxGeometry(2.9, 0.02, 0.02),
      new THREE.MeshBasicMaterial({ color: BRIGHT_BLUE })
    );
    edgeGlow.position.set(0, 1.83, 0.06);
    hinge.add(edgeGlow);

    laptop.position.set(0, -1.1, 0.3);
    laptop.rotation.y = -0.18;

    // ---------- AI Brain hologram ----------
    const brain = new THREE.Group();
    // positioned above the screen, in world space near the display
    brain.position.set(0, 1.55, 0.6);
    root.add(brain);

    // Wireframe icosahedron "neural core"
    const coreGeo = new THREE.IcosahedronGeometry(0.62, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: GLOW_BLUE,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    brain.add(core);

    // Soft inner glow sphere (additive blending fakes a bloom halo)
    const glowMat = new THREE.MeshBasicMaterial({
      color: ACCENT_BLUE,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glowSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.78, 24, 24),
      glowMat
    );
    brain.add(glowSphere);

    const glowMat2 = new THREE.MeshBasicMaterial({
      color: BRIGHT_BLUE,
      transparent: true,
      opacity: 0.12,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const glowSphere2 = new THREE.Mesh(
      new THREE.SphereGeometry(1.05, 24, 24),
      glowMat2
    );
    brain.add(glowSphere2);

    // "Neuron" nodes at icosahedron vertices
    const neuronGeo = new THREE.SphereGeometry(0.035, 8, 8);
    const neuronMat = new THREE.MeshBasicMaterial({ color: BRIGHT_BLUE });
    const neuronPositions = coreGeo.attributes.position;
    const seenVerts = new Set();
    const neurons = [];
    for (let i = 0; i < neuronPositions.count; i++) {
      const x = neuronPositions.getX(i).toFixed(3);
      const y = neuronPositions.getY(i).toFixed(3);
      const z = neuronPositions.getZ(i).toFixed(3);
      const key = `${x},${y},${z}`;
      if (seenVerts.has(key)) continue;
      seenVerts.add(key);
      const neuron = new THREE.Mesh(neuronGeo, neuronMat);
      neuron.position.set(parseFloat(x), parseFloat(y), parseFloat(z));
      brain.add(neuron);
      neurons.push(neuron);
    }

    // Vertical light beam connecting the brain down to the screen
    const beamMat = new THREE.MeshBasicMaterial({
      color: ACCENT_BLUE,
      transparent: true,
      opacity: 0.16,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const beamGeo = new THREE.CylinderGeometry(0.05, 0.5, 1.0, 24, 1, true);
    const beam = new THREE.Mesh(beamGeo, beamMat);
    beam.position.set(0, 1.05, 0.6);
    root.add(beam);

    // ---------- Ambient particles ----------
    const particleCount = 40;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 6;
      particlePositions[i * 3 + 1] = Math.random() * 4 - 0.5;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: GLOW_BLUE,
      size: 0.045,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // ---------- Resize handling ----------
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(mount);

    // ---------- Animation loop ----------
    const clock = new THREE.Clock();
    let rafId;

    const animate = () => {
      const t = clock.getElapsedTime();

      // gentle float + rotation for whole composition
      root.position.y = Math.sin(t * 0.7) * 0.12;
      root.rotation.y = Math.sin(t * 0.35) * 0.18 - 0.1;

      // brain spins slowly and pulses
      core.rotation.y = t * 0.35;
      core.rotation.x = Math.sin(t * 0.4) * 0.15;
      const pulse = 1 + Math.sin(t * 2.2) * 0.05;
      glowSphere.scale.setScalar(pulse);
      glowSphere2.scale.setScalar(1 + Math.sin(t * 1.6 + 1) * 0.06);
      brainLight.intensity = 2.6 + Math.sin(t * 2.2) * 0.6;

      // neurons twinkle
      neurons.forEach((n, i) => {
        const s = 1 + Math.sin(t * 3 + i) * 0.4;
        n.scale.setScalar(s);
      });

      // display flicker (very subtle, like an active screen)
      displayMat.emissiveIntensity = 0.85 + Math.sin(t * 5) * 0.08;

      // particles drift upward and wrap
      const pos = particleGeo.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        let y = pos.getY(i) + 0.003;
        if (y > 3.5) y = -0.5;
        pos.setY(i, y);
      }
      pos.needsUpdate = true;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(animate);
    };
    animate();

    // ---------- Cleanup ----------
    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      mount.removeChild(renderer.domElement);
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "420px",
        background: "transparent",
      }}
    />
  );
}
