import { Plane, Menu, X } from 'lucide-react';
import { Link } from './Link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-3 rounded-2xl transform transition-all shadow-lg"
            >
              <Plane className="w-7 h-7 text-white" />
            </motion.div>
            <span className="text-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-pink-600 group-hover:to-blue-600 transition-all duration-300">
              TravelWorld
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="#main" 
              className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300"
            >
              Головна
            </Link>
            <Link 
              href="#country" 
              className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300"
            >
              Країни
            </Link>
            <Link 
              href="#about-us" 
              className="text-gray-700 hover:text-transparent hover:bg-gradient-to-r hover:from-pink-600 hover:to-orange-600 hover:bg-clip-text transition-all duration-300"
            >
              Про нас
            </Link>
          </nav>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="#main" 
                className="block text-gray-700 hover:text-purple-600 transition-colors py-2"
              >
                Головна
              </Link>
              <Link 
                href="#country" 
                className="block text-gray-700 hover:text-purple-600 transition-colors py-2"
              >
                Країни
              </Link>
              <Link 
                href="#about-us" 
                className="block text-gray-700 hover:text-purple-600 transition-colors py-2"
              >
                Про нас
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}