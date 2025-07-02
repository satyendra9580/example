
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Gift, Sparkles, Heart, Star } from 'lucide-react';
import { useState } from 'react';

const Surprise = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [flowersBloomed, setFlowersBloomed] = useState(false);

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    setTimeout(() => {
      setFlowersBloomed(true);
    }, 1000);
    // Reset after 5 seconds
    setTimeout(() => {
      setCandlesBlown(false);
      setFlowersBloomed(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900">
      <Navigation />
      
      <div className="pt-32 px-4 text-center">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-8"
        >
          Special Surprise for Vartika! 🎁
        </motion.h1>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-rose-300/20 mb-8"
        >
          <div className="text-6xl mb-6">🎂</div>
          <h2 className="text-3xl font-bold text-white mb-6">Virtual Birthday Cake for You!</h2>
          <p className="text-rose-200 text-lg mb-8">
            Beautiful Vartika, make a wish as sweet as you are and blow out these magical candles! ✨
          </p>
          
          <div className="flex justify-center space-x-4 mb-8">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                animate={candlesBlown ? {
                  scale: [1, 0.5, 0],
                  opacity: [1, 0.5, 0]
                } : {
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={candlesBlown ? {
                  duration: 0.8,
                  delay: i * 0.1
                } : {
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
                className="text-2xl"
              >
                {candlesBlown ? '💨' : '🕯️'}
              </motion.div>
            ))}
          </div>

          {candlesBlown && !flowersBloomed && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-6"
            >
              <div className="text-4xl mb-2">🎉</div>
              <p className="text-pink-300 font-bold text-xl">
                Your wish is floating to the stars! ✨
              </p>
            </motion.div>
          )}

          {flowersBloomed && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-6"
            >
              <div className="text-5xl mb-4">🌸🌹🌺🌻🌷</div>
              <p className="text-rose-300 font-bold text-xl mb-2">
                A bouquet of virtual flowers for the most beautiful Vartika! 💐
              </p>
              <p className="text-rose-200">
                May your life bloom with endless happiness! 🌸
              </p>
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBlowCandles}
            disabled={candlesBlown}
            className={`font-semibold py-3 px-8 rounded-full text-lg shadow-2xl transition-all duration-300 ${
              candlesBlown 
                ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700'
            }`}
          >
            {candlesBlown ? '✨ Wish Made!' : '🌬️ Blow the Candles'}
          </motion.button>
        </motion.div>

        {/* Love Messages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-6 border border-rose-300/30">
              <Heart className="w-8 h-8 text-rose-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Sweet Message</h3>
              <p className="text-rose-200 leading-relaxed">
                Vartika, you are like a beautiful melody that makes life more harmonious. Your presence is a gift to everyone who knows you.
              </p>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-lg rounded-2xl p-6 border border-pink-300/30">
              <Star className="w-8 h-8 text-pink-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Birthday Blessing</h3>
              <p className="text-pink-200 leading-relaxed">
                May this new year of your life be painted with colors of joy, love, and countless beautiful moments that make your heart sing.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Surprise;
