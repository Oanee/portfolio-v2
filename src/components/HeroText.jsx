import { FlipWords } from "./FlipWords.jsx";
import {
  heroTextMotionVariants,
  heroTitle,
  heroDescription,
  flipWords,
  flipWordsDescription,
} from "../constants/index.js";
import { motion } from "motion/react";

const HeroText = () => {
  return (
    <div className="z-10 mt-20 md:mt-40 text-center md:text-left flex flex-col">
      <motion.h1
        className="text-4xl font-medium"
        {...heroTextMotionVariants(1)}
      >
        {heroTitle}
      </motion.h1>
      <motion.p
        className="text-5xl font-medium text-neutral-300 md:w-[35rem]"
        {...heroTextMotionVariants(1.2)}
      >
        {heroDescription}
      </motion.p>
      <motion.div {...heroTextMotionVariants(1.5)}>
        <FlipWords
          words={flipWords}
          className="font-bold text-white text-7xl md:text-8xl"
        />
      </motion.div>
      <motion.p
        className="text-4xl font-medium text-neutral-300"
        {...heroTextMotionVariants(1.8)}
      >
        {flipWordsDescription}
      </motion.p>
    </div>
  );
};
export default HeroText;
