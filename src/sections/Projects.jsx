"use client";

import { projects, projectsTitle } from "../constants/index.js";
import Project from "../components/Project.jsx";
import SeparatorLine from "../components/SeparatorLine.jsx";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading">{projectsTitle}</h2>
      <div className="mt-12 w-full">
        <SeparatorLine />
        {projects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
        {preview && (
          <motion.img
            src={preview}
            className="fixed top-0 left-0 z-30 object-cover rounded-lg shadow-lg pointer-events-none w-80"
            style={{ x: springX, y: springY }}
          />
        )}
      </div>
    </section>
  );
};
export default Projects;
