import { motion } from 'framer-motion';
import { Plane, Compass, Globe, Map, Camera, Palmtree } from 'lucide-react';

const icons = [Plane, Compass, Globe, Map, Camera, Palmtree];

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: index * 0.5,
          }}
        >
          <Icon className="w-12 h-12 text-blue-500/20" />
        </motion.div>
      ))}
    </div>
  );
}
