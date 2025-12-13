import { motion } from 'framer-motion';
import { Clock, Calendar } from 'lucide-react';
import { City } from '../../types';

interface CityCardProps {
  city: City;
  onClick: () => void;
}

export function CityCard({ city, onClick }: CityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer group"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={city.image} 
          alt={city.nameUa}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white">{city.nameUa}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-3">{city.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-500" />
            <span>{city.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-purple-500" />
            <span className="text-xs">Кращий час</span>
          </div>
        </div>
        
        <button className="w-full mt-4 px-4 py-2 border-2 border-blue-500 text-blue-600 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
          Детальніше
        </button>
      </div>
    </motion.div>
  );
}
