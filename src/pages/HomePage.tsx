import { motion } from 'framer-motion';
import { Plane, Map, Globe, Star, Sparkles, Award, Users } from 'lucide-react';
import { CountryCard } from '../components/CountryCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { FloatingElements } from '../components/FloatingElements';
import { ParallaxSection } from '../components/ParallaxSection';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { countries } from '../data/countries';



interface HomePageProps {
  onCountryClick: (countryId: string) => void;
}

export function HomePage({ onCountryClick }: HomePageProps) {


  const testimonials = [
    {
      name: 'Олена Коваленко',
      country: 'Україна',
      rating: 5,
      text: 'Неймовірна подорож до Італії! Всі рекомендації виявилися корисними, особливо про найкращий час для відвідування. Колізей вразив до глибини душі!',
      avatar: '👩'
    },
    {
      name: 'Дмитро Петренко',
      country: 'Україна',
      rating: 5,
      text: 'Токіо перевершив всі очікування. Завдяки детальним описам міста, змогли побачити все найцікавіше за 4 дні. Обов\'язково повернемося!',
      avatar: '👨'
    },
    {
      name: 'Марія Іваненко',
      country: 'Україна',
      rating: 5,
      text: 'Париж - місто мрії! Інформація про визначні місця допомогла спланувати ідеальний маршрут. Ейфелева вежа на заході сонця - незабутньо!',
      avatar: '👩‍🦰'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      <section id='main' className="relative pt-32 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <FloatingElements />

        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, -50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-md rounded-full mb-8 shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Відкрийте світ разом з нами
              </span>
              <Sparkles className="w-5 h-5 text-pink-500" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8"
            >
              <span className="block text-5xl sm:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-shift">
                Подорожуйте
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient-shift">
                Світом Мрії
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Відкрийте для себе найкрасивіші куточки нашої планети. 
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Від історичних пам'яток Європи до традицій Азії
              </span>
              {' '}- ваша подорож починається тут 🌍
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-6 mb-16"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full shadow-2xl relative overflow-hidden group"
    onClick={() => {
    const el = document.getElementById('country');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }}
              >
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  <Plane className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  <span>Почати подорож</span>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/90 backdrop-blur-md text-gray-800 rounded-full shadow-xl hover:shadow-2xl transition-all border-2 border-purple-200"
                  onClick={() => {
    const el = document.getElementById('about-us');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }}
              >
                <div className="flex items-center gap-3 text-lg">
                  <Sparkles className="w-6 h-6 text-purple-600" />
                  <span>Про нас</span>
                </div>
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-blue-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div className="text-5xl mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  <AnimatedCounter from={0} to={countries.length} suffix="+" />
                </div>
                <div className="text-gray-600">Країн для подорожей</div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-purple-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Map className="w-7 h-7 text-white" />
                </div>
                <div className="text-5xl mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  <AnimatedCounter from={0} to={countries.reduce((sum, c) => sum + c.cities.length, 0)} suffix="+" />
                </div>
                <div className="text-gray-600">Міст для відкриттів</div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-pink-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div className="text-5xl mb-2 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                  <AnimatedCounter from={0} to={150} suffix="+" />
                </div>
                <div className="text-gray-600">Визначних місць</div>
              </div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-xl border border-green-100 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div className="text-5xl mb-2 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  <AnimatedCounter from={0} to={10000} suffix="+" />
                </div>
                <div className="text-gray-600">Щасливих туристів</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

<section id='about-us' className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Чому обирають нас ? 
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Map,
                title: 'Детальні маршрути',
                description: 'Кожна подорож продумана до дрібниць з урахуванням всіх визначних місць'
              },
              {
                icon: Globe,
                title: 'Експертні поради',
                description: 'Рекомендації від досвідчених мандрівників про кращі місця та час для відвідування'
              },
              {
                icon: Star,
                title: 'Унікальні враження',
                description: 'Відкрийте приховані перлини та автентичну культуру кожної країни'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id='country' className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Популярні напрямки
              </h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Виберіть країну для детального ознайомлення з найкращими містами та маршрутами
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={country.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CountryCard 
                  country={country} 
                  onClick={() => onCountryClick(country.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ParallaxSection offset={80}>
        <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 opacity-50" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                className="inline-block mb-6"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-12 h-12 text-yellow-500 fill-yellow-500" />
              </motion.div>
              <h2 className="mb-6">
                <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Що кажуть наші мандрівники
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Тисячі задоволених туристів вже побували у подорожах мрії завдяки нашим рекомендаціям
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  {...testimonial}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1548932134-3d7d765bece2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmUlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzY1Mjg4OTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/90 to-pink-900/90" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <Plane className="w-20 h-20 text-white" />
            </motion.div>
            
            <h2 className="text-white mb-6">
              Готові до пригод?
            </h2>
            
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Почніть свою подорож мрії вже сьогодні! Обирайте напрямок, пакуйте валізи та вирушайте назустріч незабутнім враженням.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-gray-900 rounded-full shadow-2xl hover:shadow-white/50 transition-all"
              onClick={() => {
    const el = document.getElementById('country');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg">
                  Почати зараз
                </span>
              </motion.button>
              
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}