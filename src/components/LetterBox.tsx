import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface LetterBoxProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LetterBox = ({ isOpen, onClose }: LetterBoxProps) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-2 bg-black/80 backdrop-blur-lg"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.3, rotateY: -180, opacity: 0 }}
        animate={{ scale: 1, rotateY: 0, opacity: 1 }}
        exit={{ scale: 0.3, rotateY: 180, opacity: 0 }}
        transition={{ 
          type: "spring", 
          bounce: 0.4, 
          duration: 1.2
        }}
        className="relative w-full max-w-4xl h-[90vh] max-h-[600px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Fixed at top right outside the envelope */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 z-50 w-10 h-10 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-colors border-2 border-white"
        >
          <X size={20} />
        </button>

        {/* Letter Envelope */}
        <div className="relative w-full h-full">
          {/* Envelope Back */}
          <div className="bg-gradient-to-br from-amber-100 to-yellow-50 rounded-lg shadow-2xl border-4 border-amber-200 p-3 relative overflow-hidden h-full">
            
            {/* Envelope Flap - Triangular */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={{ rotateX: -25 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -top-2 left-0 right-0 h-16 bg-gradient-to-b from-amber-200 to-amber-100 border-l-4 border-r-4 border-t-4 border-amber-300"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                transformOrigin: 'top center',
                transformStyle: 'preserve-3d'
              }}
            />
            
            {/* Wax Seal */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.8, type: "spring", bounce: 0.6 }}
              className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center text-xl shadow-lg z-10"
            >
              💌
            </motion.div>

            {/* Letter Paper sliding out */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
              className="bg-white rounded-lg shadow-xl p-4 mt-12 border-2 border-amber-200 relative h-[calc(100%-3rem)] overflow-y-auto"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, #f8fafc 21px, transparent 1%) center,
                  linear-gradient(#e2e8f0 1px, transparent 1%) center,
                  #ffffff
                `,
                backgroundSize: '22px 22px'
              }}
            >
              {/* Letter Content */}
              <div className="space-y-4">
                {/* Photo Section */}
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                  className="flex flex-col items-center space-y-4"
                >
                  {/* Polaroid Style Photo */}
                  <div className="bg-white p-2 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="w-40 h-48 bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-200 rounded-sm overflow-hidden flex items-center justify-center relative">
                      {/* Replace placeholder with your personal photo */}
                      <img
                        src="/vartika.jpeg" // Ensure your photo is placed in the public folder and named 'your-photo.jpg'
                        alt="Personal Photo"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 left-2 right-2 text-center">
                        <div className="bg-white/80 rounded px-1 py-1 text-xs text-gray-700 font-medium">
                          Our Birthday Princess
                        </div>
                      </div>
                    </div>
                    <div className="text-center mt-2 font-handwriting text-gray-600 text-sm">
                      Beautiful memories ✨
                    </div>
                  </div>
                </motion.div>

                {/* Letter Content */}
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  className="space-y-4"
                >
                  <div className="space-y-3 text-gray-800 font-serif">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 1.7 }}
                    >
                      <h3 className="text-xl font-bold text-pink-600 mb-4 text-center">
                        Dearest Vartika 💫
                      </h3>
                    </motion.div>
                    
                    <div className="space-y-3 text-sm leading-relaxed">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.9 }}
                        className="text-purple-700"
                      >
                        🌸 PS: I was going to gift you something amazing… then I remembered, I AM the gift. 😌
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.1 }}
                        className="text-purple-700"
                      >
                        A soul so beautiful, so kind, so true! ✨
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.3 }}
                        className="text-purple-700"
                      >
                        🎈 May your dreams take flight like balloons in the sky,
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                        className="text-purple-700"
                      >
                        And happiness dance in your heart, soaring high! 💖
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.7 }}
                        className="text-purple-700"
                      >
                        🌟 Stay awesome, and keep making this world better with that Vartika-level energy 💫
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.9 }}
                        className="text-purple-700"
                      >
                        Waise toh main time kaafi kharab karta hoon,
                        But today, I spent some quality minutes writing this…
                        Aap appreciate kar sakti ho 😌
                      </motion.p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 3.1 }}
                      className="text-center mt-6 pt-4 border-t-2 border-pink-200"
                    >
                      <p className="text-lg font-bold text-pink-600 mb-2">
                        Happy Birthday, Beautiful! 🎉
                      </p>
                      <p className="text-sm text-purple-600 italic">
                        With endless love and warmest wishes 💫
                      </p>
                      <div className="mt-4 text-2xl">
                        🎂🎈🎊💖🌟
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-2 left-2 text-lg opacity-40">🎂</div>
              <div className="absolute top-2 right-2 text-lg opacity-40">🎈</div>
              <div className="absolute bottom-2 left-2 text-lg opacity-40">🎊</div>
              <div className="absolute bottom-2 right-2 text-lg opacity-40">💖</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};