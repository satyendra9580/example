import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Heart, Star, Sparkles, Flower2, Crown, Gift } from 'lucide-react';

const Wishes = () => {
  const wishes = [
    {
      title: "Endless Love & Joy",
      content: "May your heart always be filled with the love you so generously give to others, multiplied infinitely.",
      icon: Heart,
      color: "from-pink-400 to-purple-500"
    },
    {
      title: "Crown of Happiness",
      content: "You deserve to wear a crown of happiness every day - may this year bring you countless reasons to smile.",
      icon: Crown,
      color: "from-purple-400 to-indigo-500"
    },
    {
      title: "Shining Like a Star",
      content: "Continue to shine your beautiful light on the world - you are a star that brightens everyone's sky.",
      icon: Star,
      color: "from-indigo-400 to-pink-500"
    },
    {
      title: "Life's Beautiful Gifts",
      content: "May each day bring you precious gifts of love, laughter, and all the wonderful things you deserve.",
      icon: Gift,
      color: "from-rose-400 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900">
      <Navigation />
      
      <div className="pt-32 px-4 max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300 bg-clip-text text-transparent mb-8"
        >
          Birthday Wishes for Vartika 💖
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center text-rose-200 text-xl mb-16 max-w-3xl mx-auto leading-relaxed"
        >
          Sweet Vartika, these heartfelt wishes are crafted especially for you on your special day
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.15 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-rose-300/20 hover:border-rose-300/40 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${wish.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                <wish.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">{wish.title}</h3>
              <p className="text-rose-200 text-center leading-relaxed">{wish.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 border border-rose-300/30 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl text-rose-300 font-semibold mb-4">
              Happy Birthday, Beautiful Vartika! 🎉
            </p>
            <p className="text-xl text-rose-200 leading-relaxed">
              May this special day mark the beginning of the most wonderful year of your life, filled with love, laughter, and all your heart desires. You are truly special! 💕
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Wishes;
