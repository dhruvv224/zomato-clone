import { motion } from 'framer-motion';
import img from '../Components/assets/images/Iphone.png';

const PopupImage = ({ src, alt }) => {
  return (
    <div className='max-w-[200px]'>

    <motion.img
      src={img}
      alt={alt}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ amount: 0.2 }} // Trigger animation every time it enters the viewport
      style={{ width: '100%', height: 'auto' }}
    />
        </div>

  );
};

export default PopupImage;
