import { motion } from "motion/react";

const Card = ({ style, text, image, containerRef }) => {
  const maxRotate = 3 + Math.random() * 8;
  const swayDuration = 1.5 + Math.random();

  const animateProps = {
    rotate: [-maxRotate, maxRotate, -maxRotate],
    transition: {
      repeat: Infinity,
      duration: swayDuration,
      ease: "easeInOut",
    },
  };

  return image && !text ? (
    <motion.img
      src={image}
      alt="card"
      className="absolute w-12 cursor-grab md:scale-125"
      style={style}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      animate={animateProps}
    />
  ) : (
    <motion.p
      className="absolute px-1 py-4 text-sm md:text-lg text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
      animate={animateProps}
    >
      {text}
    </motion.p>
  );
};

export default Card;
