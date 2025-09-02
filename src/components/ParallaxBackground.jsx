import { motion, useScroll, useSpring, useTransform } from "motion/react";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]);

  return (
    <section className="absolute inset-0 brightness-60">
      <div className="parallax">
        <motion.div className="sky" />
        <motion.div
          className="mountain-3"
          style={{ y: mountain3Y, willChange: "transform" }}
        />
        <motion.div
          className="planets"
          style={{ x: planetsX, willChange: "transform" }}
        />
        <motion.div
          className="mountain-2"
          style={{ y: mountain2Y, willChange: "transform" }}
        />
        <motion.div
          className="mountain-1"
          style={{ y: mountain1Y, willChange: "transform" }}
        />
      </div>
    </section>
  );
};
export default ParallaxBackground;
