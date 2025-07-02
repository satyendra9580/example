
import { motion } from 'framer-motion';
import { Home, Heart, Gift, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/wishes', icon: Heart, label: 'Wishes' },
    { path: '/surprise', icon: Gift, label: 'Surprise' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-white/10 backdrop-blur-lg rounded-full border border-rose-300/20 px-1 py-1"
    >
      <div className="flex items-center justify-center space-x-1">
        {navItems.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center justify-center px-3 py-2 rounded-full transition-all duration-300 text-center min-w-[60px] ${
              location.pathname === path
                ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-lg'
                : 'text-white/80 hover:text-white hover:bg-white/10'
            }`}
          >
            <Icon size={16} />
            <span className="text-[9px] font-medium mt-1 whitespace-nowrap leading-tight">{label}</span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};
