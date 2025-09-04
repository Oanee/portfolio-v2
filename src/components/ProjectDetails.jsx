import { motion } from "motion/react";
const ProjectDetails = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  closeModal,
  code,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm"
      onClick={closeModal}
    >
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-3xl top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <img src="/assets/close.svg" alt="close" className="w-6 h-6" />
        </button>
        <img src={image} alt={title} className="w-full rounded-t-2xl" />
        <div className="p-6 flex flex-col gap-4">
          <h5 className="text-2xl font-bold text-white">{title}</h5>
          <p className="font-normal text-neutral-400 text-base">
            {description}
          </p>
          <div className="flex flex-col gap-2 text-sm font-normal text-neutral-400">
            {subDescription.map((subDesc, index) => (
              <p key={index}>• {subDesc}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {tags.map(({ id, path, name }) => (
              <img
                key={id}
                src={path}
                alt={name}
                className="size-7 md:size-10 hover-animation"
              />
            ))}
          </div>
          <div className="flex gap-3 justify-between">
            <a
              href={code}
              target="_blank"
              className="inline-flex items-center gap-1 font-medium hover-animation cursor-pointer"
            >
              View Code{" "}
              <img
                src="/assets/arrow-up.svg"
                alt="Arrow Up"
                className="size-4"
              />
            </a>
            <a
              href={href}
              target="_blank"
              className="inline-flex items-center gap-1 font-medium hover-animation cursor-pointer"
            >
              View Project{" "}
              <img
                src="/assets/arrow-up.svg"
                alt="Arrow Up"
                className="size-4"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default ProjectDetails;
