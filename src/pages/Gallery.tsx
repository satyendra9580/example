import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';

const PhotoFrame = ({ position, imageUrl, index }: { position: [number, number, number]; imageUrl: string; index: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  // Load texture when component mounts
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    console.log(`Loading photo ${index + 1} from ${imageUrl}`);
    
    const loadedTexture = loader.load(
      imageUrl,
      // onLoad callback
      (tex) => {
        console.log(`Photo ${index + 1} loaded successfully!`);
        tex.wrapS = THREE.ClampToEdgeWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        tex.minFilter = THREE.LinearFilter;
        tex.magFilter = THREE.LinearFilter;
        setTexture(tex);
      },
      // onProgress callback
      undefined,
      // onError callback
      (error) => {
        console.error(`Error loading photo ${index + 1}:`, error);
        // Create fallback gradient texture
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d')!;
        
        const gradient = ctx.createLinearGradient(0, 0, 512, 512);
        const colors = ['#EC4899', '#6B46C1', '#F59E0B', '#10B981', '#F97316'];
        gradient.addColorStop(0, colors[index % colors.length]);
        gradient.addColorStop(1, colors[(index + 1) % colors.length]);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 512, 512);
        
        const fallbackTexture = new THREE.CanvasTexture(canvas);
        setTexture(fallbackTexture);
      }
    );
  }, [imageUrl, index]);

  return (
    <Float speed={1 + Math.random()} rotationIntensity={0.3} floatIntensity={0.8}>
      <group>
        {/* Frame */}
        <mesh position={[position[0], position[1], position[2] - 0.01]}>
          <planeGeometry args={[2.2, 2.8]} />
          <meshStandardMaterial color="#8B4513" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Photo */}
        <mesh
          ref={meshRef}
          position={position}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <planeGeometry args={[2, 2.6]} />
          <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
        </mesh>
        {/* Inner frame */}
        <mesh position={[position[0], position[1], position[2] + 0.01]}>
          <ringGeometry args={[0.95, 1.05]} />
          <meshStandardMaterial color="#CD853F" metalness={0.6} roughness={0.3} />
        </mesh>
      </group>
    </Float>
  );
};

const Gallery = () => {
  const photos = [
    '/photos/photo1.jpg',
    '/photos/photo2.jpg', 
    '/photos/photo3.jpg',
    '/photos/photo4.jpg',
    '/photos/photo5.jpg',
    '/photos/photo6.jpg',
    '/photos/photo1.jpg',
    '/photos/photo2.jpg',
    '/photos/photo3.jpg',
    '/photos/photo4.jpg',
    '/photos/photo5.jpg',
    '/photos/photo6.jpg'
  ];

  const positions: [number, number, number][] = [
    [-4, 2, 0], [0, 2.5, -1], [4, 1.5, 0],
    [-3, 0, -2], [3, -0.5, -1], [0, -1, -3],
    [-5, -2, 1], [2, -2.5, 2], [-1, 1, 3],
    [5, 0.5, -2], [-2, -3, 0], [1, 3, -4]
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900 overflow-hidden">
      <Navigation />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="pt-24 px-4"
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 bg-clip-text text-transparent mb-8"
        >
          Beautiful Memories ✨
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-purple-200 text-lg mb-8 max-w-2xl mx-auto"
        >
          A collection of precious moments captured in time, floating in a magical 3D gallery
        </motion.p>
      </motion.div>

      <div className="h-[70vh] mt-8">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#EC4899" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#6B46C1" />
          <pointLight position={[0, 10, -10]} intensity={0.7} color="#F59E0B" />
          
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            autoRotate
            autoRotateSpeed={0.5}
            maxDistance={15}
            minDistance={5}
          />
          
          {photos.map((photo, index) => (
            <PhotoFrame
              key={index}
              position={positions[index]}
              imageUrl={photo}
              index={index}
            />
          ))}
          
          {/* Floating particles */}
          {[...Array(50)].map((_, i) => (
            <mesh
              key={i}
              position={[
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 15,
              ]}
            >
              <sphereGeometry args={[0.03]} />
              <meshBasicMaterial color="#FFD700" opacity={0.6} transparent />
            </mesh>
          ))}
        </Canvas>
      </div>
    </div>
  );
};

export default Gallery;
