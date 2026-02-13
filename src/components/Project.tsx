import React from "react";

import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  project_name: string;
  project_skills: string[];
  project_description: string;
  project_image: string;
  project_link: string;
}

const Project = ({
  project_name,
  project_skills,
  project_description,
  project_image,
  project_link,
}: ProjectProps) => {
  return (
    <a
      href={project_link}
      target="_blank"
      rel="noreferrer noopener"
      className="block"
    >
      <div className="bg-tab-color border-none w-full h-[280px] sm:h-[320px] lg:h-[380px] flex flex-col overflow-hidden px-5 py-4 hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 rounded-lg cursor-pointer min-w-[220px]">
        <div className="flex flex-row items-start justify-between mb-3 flex-shrink-0">
          <div className="flex flex-col flex-1 pr-3 min-w-0">
            <h2 className="text-white font-bold text-lg sm:text-xl mb-3 leading-tight break-words">
              {project_name.split("").map((char, charIndex) => {
                return (
                  <span
                    key={charIndex}
                    className="hover:text-red-400 transition-all duration-200 cursor-default"
                  >
                    {char}
                  </span>
                );
              })}
            </h2>

            <div className="flex flex-col gap-1.5 mb-3">
              {project_skills.map((value, index) => {
                return (
                  <span
                    key={index}
                    className="text-[10px] tracking-[.2em] text-gray-300 bg-gray-800/60 px-2.5 py-1 rounded w-fit border border-gray-700/40"
                  >
                    {value.toUpperCase()}
                  </span>
                );
              })}
            </div>
          </div>

          {project_image && (
            <div className="right-side w-20 h-20 flex items-center justify-center flex-shrink-0">
              <div className="relative w-full h-full">
                <Image
                  alt={`${project_name}_media`}
                  src={project_image}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="project_description text-sm text-gray-300 leading-relaxed mt-auto pt-2 border-t border-gray-700/30 max-h-[60px] overflow-hidden">
          <p className="line-clamp-3">{project_description}</p>
        </div>
      </div>
    </a>
  );
};

export default Project;
