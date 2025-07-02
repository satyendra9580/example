
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const ConfettiExplosion = () => {
  const [confettiPieces] = useState(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      color: ['#EC4899', '#6B46C1', '#F59E0B', '#10B981', '#F97316'][Math.floor(Math.random() * 5)],
      size: Math.random() * 10 + 5,
      rotation: Math.random() * 360,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
          }}
          initial={{
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            opacity: 1,
            scale: 0,
            rotate: 0,
          }}
          animate={{
            x: piece.x,
            y: piece.y,
            opacity: 0,
            scale: 1,
            rotate: piece.rotation,
          }}
          transition={{
            duration: 3,
            ease: "easeOut",
          }}
        />
      ))}
      
      {/* Emoji burst */}
      {['🎉', '🎊', '✨', '🌟', '💫', '🎂', '🎈'].map((emoji, i) => (
        <motion.div
          key={`emoji-${i}`}
          className="absolute text-4xl"
          initial={{
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            opacity: 1,
            scale: 0,
          }}
          animate={{
            x: window.innerWidth / 2 + (Math.random() - 0.5) * 600,
            y: window.innerHeight / 2 + (Math.random() - 0.5) * 400,
            opacity: 0,
            scale: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: Math.random() * 0.5,
          }}
        >
          {emoji}
        </motion.div>
      ))}
    </div>
  );
};
