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
  code,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        className="flex flex-col flex-wrap items-start justify-between p-6 gap-5 rounded-2xl bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <h2 className="text-xl">{title}</h2>
          <div className="flex flex-wrap gap-3 mt-2 text-sand">
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
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          href={href}
          image={image}
          tags={tags}
          code={code}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};
export default Project;
