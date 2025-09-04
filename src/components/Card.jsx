import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  return image && !text ? (
    <motion.img
      src={image}
      alt="card"
      className="absolute w-12 cursor-grab md:scale-125"
      style={{ top: style.top, left: style.left }}
      initial={{ rotate: parseFloat(style.rotate) }}
      animate={{ rotate: parseFloat(style.rotate) }}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.p
      className="absolute px-1 py-4 text-sm md:text-lg text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={{ top: style.top, left: style.left }}
      initial={{ rotate: parseFloat(style.rotate) }}
      animate={{ rotate: parseFloat(style.rotate) }}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.p>
  );
};

export default Card;
