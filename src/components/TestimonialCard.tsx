import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  country: string;
  rating: number;
  text: string;
  avatar: string;
  delay?: number;
}

export function TestimonialCard({ name, country, rating, text, avatar, delay = 0 }: TestimonialProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />
      
      <div className="relative z-10">
        <Quote className="w-12 h-12 text-blue-500/20 mb-4" />
        
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        
        <p className="text-gray-700 mb-6 italic leading-relaxed">
          "{text}"
        </p>
        
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl">
            {avatar}
          </div>
          <div>
            <div className="text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{country}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}