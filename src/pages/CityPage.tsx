import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, MapPin, CheckCircle, Camera, Heart, Share2 } from 'lucide-react';
import { City, Country } from '../../types';
import { useState } from 'react';

interface CityPageProps {
  city: City;
  country: Country;
  onBack: () => void;
}

export function CityPage({ city, country, onBack }: CityPageProps) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20">
      <section className="relative h-[700px] overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={city.image}
          alt={city.nameUa}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        <div className="absolute top-24 right-4 sm:right-8 flex flex-col gap-3 z-20">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setLiked(!liked)}
            className={`w-14 h-14 rounded-full backdrop-blur-md flex items-center justify-center transition-colors ${
              liked ? 'bg-red-500 text-white' : 'bg-white/90 text-gray-700'
            }`}
          >
            <Heart className={`w-6 h-6 ${liked ? 'fill-current' : ''}`} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-700"
          >
            <Share2 className="w-6 h-6" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-700"
          >
            <Camera className="w-6 h-6" />
          </motion.button>
        </div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ x: -5 }}
              onClick={onBack}
              className="flex items-center gap-2 text-white mb-8 hover:text-blue-300 transition-colors backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Назад до {country.nameUa}</span>
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4 text-white/80">
                <span className="text-3xl">{country.flag}</span>
                <span className="text-xl">{country.nameUa}</span>
              </div>
              <h1 className="text-white mb-6 text-5xl sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  {city.nameUa}
                </span>
              </h1>
              <p className="text-white/95 text-xl sm:text-2xl max-w-4xl leading-relaxed">
                {city.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-4 rounded-xl">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="mb-2">Рекомендована тривалість</h3>
                  <p className="text-gray-600 text-lg">{city.duration}</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Цього часу достатньо, щоб оглянути основні визначні місця
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-4 rounded-xl">
                  <Calendar className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-2">Найкращий час для візиту</h3>
                  <p className="text-gray-600 text-lg">{city.bestTime}</p>
                  <p className="text-gray-500 text-sm mt-2">
                    Оптимальна погода та менше туристів
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <MapPin className="w-8 h-8 text-blue-600" />
              <h2 className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Головні визначні місця
              </h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                {city.attractions.map((attraction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 text-lg">{attraction}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
              Поради мандрівникам
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-3">📸</div>
                <h3 className="mb-2 text-white">Фотографія</h3>
                <p className="text-white/90">
                  Найкращі фото можна зробити на світанку або під час заходу сонця
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-3">🎫</div>
                <h3 className="mb-2 text-white">Квитки</h3>
                <p className="text-white/90">
                  Купуйте квитки онлайн заздалегідь, щоб уникнути черг
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-3">🗺️</div>
                <h3 className="mb-2 text-white">Маршрут</h3>
                <p className="text-white/90">
                  Плануйте маршрут заздалегідь, щоб встигнути відвідати більше місць
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-3">🍽️</div>
                <h3 className="mb-2 text-white">Їжа</h3>
                <p className="text-white/90">
                  Спробуйте місцеву кухню в невеликих ресторанах та кафе
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="mb-2 text-white">Мова</h3>
                <p className="text-white/90">
                  Вивчіть кілька базових фраз місцевою мовою
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl mb-3">👟</div>
                <h3 className="mb-2 text-white">Взуття</h3>
                <p className="text-white/90">
                  Беріть зручне взуття - доведеться багато ходити
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}