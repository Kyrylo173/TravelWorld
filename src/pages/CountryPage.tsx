import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Globe, DollarSign } from 'lucide-react';
import { Country } from '../../types';
import { CityCard } from '../components/CityCard';

interface CountryPageProps {
  country: Country;
  onBack: () => void;
  onCityClick: (cityId: string) => void;
}

export function CountryPage({ country, onBack, onCityClick }: CountryPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20">                            
      <section id="country" className="relative h-[500px] overflow-hidden">
        <img 
          src={country.cities[0].image}
          alt={country.nameUa}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={onBack}
              className="flex items-center gap-2 text-white mb-6 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Назад до країн</span>
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-7xl">{country.flag}</span>
                <h1 className="text-white">{country.nameUa}</h1>
              </div>
              <p className="text-white/90 text-xl max-w-3xl">
                {country.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Country Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Столиця</div>
                  <div className="text-lg text-gray-900">{country.capital}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Офіційна мова</div>
                  <div className="text-lg text-gray-900">{country.language}</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-100 p-3 rounded-lg">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm text-gray-600">Валюта</div>
                  <div className="text-lg text-gray-900">{country.currency}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Міста для відвідування
            </h2>
            <p className="text-gray-600 text-lg">
              Оберіть місто, щоб дізнатися більше про визначні пам'ятки та рекомендації
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {country.cities.map((city, index) => (
              <motion.div
                key={city.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CityCard 
                  city={city} 
                  onClick={() => onCityClick(city.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Корисна інформація
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="mb-3">🌡️ Клімат</h3>
                <p className="text-gray-600">
                  Найкращий час для відвідування - весна та осінь, коли погода комфортна для прогулянок
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="mb-3">🍽️ Кухня</h3>
                <p className="text-gray-600">
                  Спробуйте місцеві страви в автентичних ресторанах та на продуктових ринках
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="mb-3">🚇 Транспорт</h3>
                <p className="text-gray-600">
                  Зручна транспортна система дозволяє легко переміщатися між містами
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}