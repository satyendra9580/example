
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, ArrowDown, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/Navigation';
import { FloatingElements } from '@/components/FloatingElements';
import { ConfettiExplosion } from '@/components/ConfettiExplosion';
import { LetterBox } from '@/components/LetterBox';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showLetterBox, setShowLetterBox] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSurpriseClick = () => {
    setConfettiActive(true);
    setShowLetterBox(true);
    setTimeout(() => setConfettiActive(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 overflow-hidden relative">
      <Navigation />
      
      {/* Enhanced 3D Background with Romantic Elements */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#EC4899" />
          <pointLight position={[-10, -10, -10]} intensity={0.6} color="#BE185D" />
          <pointLight position={[0, 15, 5]} intensity={0.5} color="#F472B6" />
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.3}
          />
          
          <FloatingElements mousePosition={mousePosition} />
          
          {/* Romantic Floating Hearts */}
          <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
            <group position={[0, -1, 0]}>
              {/* Large central heart */}
              <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.8, 16, 16]} />
                <meshStandardMaterial color="#EC4899" metalness={0.5} roughness={0.2} />
              </mesh>
              {/* Smaller hearts around */}
              {[...Array(8)].map((_, i) => (
                <mesh
                  key={i}
                  position={[
                    Math.cos((i / 8) * Math.PI * 2) * 2,
                    Math.sin((i / 8) * Math.PI * 2) * 1.5,
                    Math.sin((i / 8) * Math.PI * 2) * 0.5
                  ]}
                  scale={0.3}
                >
                  <sphereGeometry args={[0.5, 8, 8]} />
                  <meshStandardMaterial color="#F472B6" metalness={0.3} roughness={0.4} />
                </mesh>
              ))}
            </group>
          </Float>
        </Canvas>
      </div>

      {/* Confetti Explosion */}
      <AnimatePresence>
        {confettiActive && <ConfettiExplosion />}
      </AnimatePresence>

      {/* Letter Box Modal */}
      <AnimatePresence>
        <LetterBox isOpen={showLetterBox} onClose={() => setShowLetterBox(false)} />
      </AnimatePresence>

      {/* Enhanced Main Content */}
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-6"
            >
              Happy Birthday
            </motion.h1>
            
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2, type: "spring", bounce: 0.4 }}
              className="text-4xl md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-pink-200 via-rose-200 to-purple-200 bg-clip-text text-transparent mb-8"
            >
              Bachha 💖
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="text-xl md:text-2xl text-rose-200 max-w-3xl mx-auto leading-relaxed"
            >
              Happy Birthday to the one and only legend who's aging like fine Maggi — fast, reliable, and My favorite. 🌹
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            >
              <Button
                onClick={handleSurpriseClick}
                className="bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-full text-lg shadow-2xl hover:shadow-rose-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Heart className="mr-2" size={24} />
                Open Your Love Letter
                <Sparkles className="ml-2" size={24} />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-rose-300"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </section>

        {/* Romantic About Section */}
        <section className="min-h-screen flex items-center justify-center px-4 bg-black/20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent mb-8">
              You Are Simply Amazing 💕
            </h3>
            <p className="text-xl text-rose-200 leading-relaxed mb-12">
              Vartika, your name means "present" and that's exactly what you are - a beautiful gift to this world. 
              Your smile can brighten the darkest days, your laugh is music to my hearts, and your presence makes everything magical.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { emoji: '🌹', title: 'Graceful Beauty', desc: 'Like a rose in full bloom, elegant and enchanting' },
                { emoji: '💖', title: 'Pure Heart', desc: 'Your kindness touches every soul you meet' },
                { emoji: '✨', title: 'Radiant Spirit', desc: 'You illuminate the world with your inner light' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-rose-300/20 hover:border-rose-300/40 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-rose-200">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Love Quotes Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent mb-12">
              Sweet Words for You 💌
            </h3>
            <div className="space-y-12">
              {[
                {
                  quote: "You’re someone who carries a rare mix of kindness, calmness, and quiet strength — and it honestly makes you stand out.",
                  author: "From your admirers"
                },
                {
                  quote: "Keep growing, keep glowing, and may this year bring you more peace, clarity, and reasons to smile.",
                  author: "With love"
                },
                {
                  quote: "Toh bas, ye message padhke smile kar lena — Nahi toh fir mujhe serious wali shayari likhni pad jayegi 😅",
                  author: "Birthday wishes"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.3 }}
                  className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 backdrop-blur-lg rounded-2xl p-8 border border-rose-300/30"
                >
                  <p className="text-xl md:text-2xl text-rose-100 italic leading-relaxed mb-4">
                    "{item.quote}"
                  </p>
                  <p className="text-rose-300 font-medium">- {item.author}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center py-12 px-4"
        >
          <p className="text-rose-200 font-medium text-lg">
            Made with love and endless admiration for the wonderful Vartika 💕
          </p>
        </motion.footer>
      </div>

      {/* Floating Romantic Elements */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              opacity: 0.7,
            }}
            animate={{
              y: -50,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              delay: Math.random() * 15,
            }}
          >
            {i % 6 === 0 ? '💖' : i % 6 === 1 ? '🌹' : i % 6 === 2 ? '💕' : i % 6 === 3 ? '✨' : i % 6 === 4 ? '🦋' : '💫'}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Index;
