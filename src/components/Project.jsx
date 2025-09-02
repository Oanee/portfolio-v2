"use client";

import SeparatorLine from "./SeparatorLine.jsx";
import ProjectDetails from "./ProjectDetails.jsx";
import { useState } from "react";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex flex-wrap gap-5 mt-2 text-sand">
            {tags.map(({ id, name }) => (
              <span key={id}>{name}</span>
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img
            src="/assets/arrow-right.svg"
            alt="Arrow right"
            className="w-5"
          />
        </button>
      </div>
      <SeparatorLine />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          href={href}
          image={image}
          tags={tags}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};
export default Project;
