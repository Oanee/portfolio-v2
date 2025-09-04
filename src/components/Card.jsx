import { motion } from "motion/react";
import { useState } from "react";

const Card = ({ style, text, image, containerRef }) => {
  const [isPressed, setIsPressed] = useState(false);
  const rotate = `rotate-${style.rotate}`;
  console.log(containerRef);

  return image && !text ? (
    <motion.img
      onDrag={() => setIsPressed(true)}
      src={image}
      alt="card"
      className={`absolute w-12 cursor-grab md:scale-125 ${!isPressed && rotate}`}
      style={style}
      whileHover={{ scale: 1.1 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    />
  ) : (
    <motion.p
      onDrag={() => setIsPressed(true)}
      className={`absolute px-1 py-4 text-sm md:text-lg text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab ${!isPressed && rotate}`}
      style={style}
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
