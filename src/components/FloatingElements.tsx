
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingElementsProps {
  mousePosition: { x: number; y: number };
}

export const FloatingElements = ({ mousePosition }: FloatingElementsProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.position.x = mousePosition.x * 0.1;
      groupRef.current.position.y = mousePosition.y * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Floating Balloons */}
      {[...Array(8)].map((_, i) => (
        <Float
          key={`balloon-${i}`}
          speed={1 + Math.random()}
          rotationIntensity={0.3}
          floatIntensity={1.5}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 15,
              (Math.random() - 0.5) * 10,
            ]}
          >
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? '#EC4899' : i % 3 === 1 ? '#6B46C1' : '#F59E0B'}
              metalness={0.2}
              roughness={0.3}
            />
          </mesh>
        </Float>
      ))}

      {/* Sparkle Particles */}
      {[...Array(20)].map((_, i) => (
        <Float
          key={`sparkle-${i}`}
          speed={2 + Math.random()}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 25,
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 15,
            ]}
          >
            <octahedronGeometry args={[0.1]} />
            <meshStandardMaterial
              color="#FFD700"
              emissive="#FFD700"
              emissiveIntensity={0.3}
            />
          </mesh>
        </Float>
      ))}

      {/* Heart Particles */}
      {[...Array(6)].map((_, i) => (
        <Float
          key={`heart-${i}`}
          speed={0.5 + Math.random()}
          rotationIntensity={0.5}
          floatIntensity={1}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 18,
              (Math.random() - 0.5) * 12,
              (Math.random() - 0.5) * 8,
            ]}
          >
            <boxGeometry args={[0.2, 0.2, 0.1]} />
            <meshStandardMaterial
              color="#FF69B4"
              emissive="#FF69B4"
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
};
