
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, useTexture } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PhotoFrame = ({ position, imageUrl, index }: { position: [number, number, number]; imageUrl: string; index: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  // Create a placeholder texture with gradient
  const createPlaceholderTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    
    const gradient = ctx.createLinearGradient(0, 0, 256, 256);
    const colors = ['#EC4899', '#6B46C1', '#F59E0B', '#10B981', '#F97316'];
    gradient.addColorStop(0, colors[index % colors.length]);
    gradient.addColorStop(1, colors[(index + 1) % colors.length]);
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);
    
    // Add some decorative elements
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.beginPath();
    ctx.arc(128, 128, 50, 0, Math.PI * 2);
    ctx.fill();
    
    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  };

  const texture = createPlaceholderTexture();

  return (
    <Float speed={1 + Math.random()} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[1.5, 1]} />
        <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
      {/* Frame */}
      <mesh position={position}>
        <planeGeometry args={[1.7, 1.2]} />
        <meshStandardMaterial color="#8B4513" side={THREE.DoubleSide} />
      </mesh>
    </Float>
  );
};

export const PhotoGallery3D = () => {
  const photos = [
    'photo-1649972904349-6e44c42644a7',
    'photo-1488590528505-98d2b5aba04b',
    'photo-1581091226825-a6a2a5aee158',
    'photo-1531297484001-80022131f5a1',
    'photo-1486312338219-ce68d2c6f44d',
    'photo-1470813740244-df37b8c1edcb',
  ];

  const positions: [number, number, number][] = [
    [-3, 1, 0],
    [0, 1.5, -1],
    [3, 0.5, 0],
    [-2, -1, -2],
    [2, -0.5, -1],
    [0, -1.5, -3],
  ];

  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#EC4899" />
      <pointLight position={[-10, -10, -10]} intensity={0.6} color="#6B46C1" />
      
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        autoRotate
        autoRotateSpeed={1}
        maxDistance={10}
        minDistance={3}
      />
      
      {photos.map((photo, index) => (
        <PhotoFrame
          key={index}
          position={positions[index]}
          imageUrl={photo}
          index={index}
        />
      ))}
      
      {/* Background particles */}
      {[...Array(30)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 10,
          ]}
        >
          <sphereGeometry args={[0.02]} />
          <meshBasicMaterial color="#FFD700" />
        </mesh>
      ))}
    </Canvas>
  );
};
