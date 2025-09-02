import HeroText from "../components/HeroText.jsx";
import ParallaxBackground from "../components/ParallaxBackground.jsx";
import { Canvas } from "@react-three/fiber";
import { Astronaut } from "../components/Astronaut.jsx";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";
import Loader from "../components/Loader.jsx";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const astronautScale = isMobile ? 0.2 : 0.25;
  const astronautPosition = isMobile ? [0, -1.5, 0] : [1.3, -1, 0];

  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure className="absolute inset-0 w-[100vw] h-[100vh]">
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Suspense fallback={<Loader />}>
            <Astronaut scale={astronautScale} position={astronautPosition} />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};
export default Hero;
