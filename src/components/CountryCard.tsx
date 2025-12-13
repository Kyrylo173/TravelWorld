import { motion } from 'framer-motion';
import { MapPin, Globe, DollarSign } from 'lucide-react';
import { Country } from '../../types';

interface CountryCardProps {
  country: Country;
  onClick: () => void;
}

export function CountryCard({ country, onClick }: CountryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer group"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={country.cities[0].image} 
          alt={country.nameUa}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute top-4 right-4 text-5xl">{country.flag}</div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white mb-1">{country.nameUa}</h3>
          <p className="text-white/80 text-sm">{country.cities.length} міст для відвідування</p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4 line-clamp-2">{country.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span>Столиця: {country.capital}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Globe className="w-4 h-4 text-purple-500" />
            <span>Мова: {country.language}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <DollarSign className="w-4 h-4 text-green-500" />
            <span>Валюта: {country.currency}</span>
          </div>
        </div>
        
        <button className="w-full mt-6 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all">
          Дивитися міста
        </button>
      </div>
    </motion.div>
  );
}