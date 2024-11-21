import { motion } from 'framer-motion';
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';
import img11 from '../assets/images/11.jpg';
import img12 from '../assets/images/12.jpg';
import img13 from '../assets/images/13.jpg';
import img14 from '../assets/images/14.jpg';
import img15 from '../assets/images/15.jpg';
import img16 from '../assets/images/16.jpg';
import img17 from '../assets/images/17.jpg';
import img18 from '../assets/images/18.jpg';
import img19 from '../assets/images/19.jpg';
import img20 from '../assets/images/20.jpg';
import img21 from '../assets/images/21.jpg';

const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,img11, img12, img13, img14, img15, img16,  img17, img18, img19, img20, img21];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export const PhotoCollage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto p-4"
    >
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="relative overflow-hidden rounded-lg shadow-md transform hover:scale-105 hover:shadow-[0_4px_20px_rgba(255,255,255,0.6)] transition-transform duration-300"
        >
          <img
            src={photo}
            alt={`Memory ${index + 1}`}
            className="w-full h-56 object-cover"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
