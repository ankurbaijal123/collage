import { motion } from 'framer-motion';

interface BalloonProps {
  color: string;
  delay: number;
  left: string;
}

export const Balloon = ({ color, delay, left }: BalloonProps) => {
  return (
    <motion.div
      className={`absolute ${left} -bottom-20`}
      animate={{
        y: [-20, -40, -20],
        x: [-5, 5, -5],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <div className={`w-16 h-20 ${color} rounded-t-full relative shadow-lg`}>
        <div className="absolute w-0.5 h-24 bg-gray-400 bottom-0 left-1/2 transform -translate-x-1/2 origin-bottom animate-float"></div>
      </div>
    </motion.div>
  );
}