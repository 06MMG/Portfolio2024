import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { StaticImageData } from 'next/image'

interface ProjectItemProps {
  title: string;
  backgroundImg: StaticImageData;
  tech: string;
  projectUrl: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, backgroundImg, tech, projectUrl }) => {
  return (
   <div className="relative flex items-center justify-center w-full max-w-[320px] sm:max-w-none h-[260px] sm:h-[380px] shadow-lg rounded-lg overflow-hidden group bg-gray-100 transition-all duration-500 hover:shadow-xl mx-auto">
      {/* Background Image */}
      <Image
        className="absolute w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-[1.03]"
        src={backgroundImg}
        alt={title}
        priority
      />

      {/* Overlay */}
      <div className="relative z-10 flex flex-col justify-end w-full h-full bg-gradient-to-t from-black/85 to-transparent p-3 sm:p-6 transition-all duration-500 ease-in-out group-hover:bg-black/60">
        <h3 className="text-lg sm:text-2xl font-semibold text-white mb-1 sm:mb-3 transition-opacity duration-300 group-hover:opacity-90">
          {title}
        </h3>
        <p className="text-xs sm:text-base text-gray-300 mb-2 sm:mb-4 transition-opacity duration-300 group-hover:opacity-90">
          {tech}
        </p>
        <Link href={projectUrl}>
          <span className="inline-block bg-white text-gray-900 font-semibold text-center py-2 px-3 sm:py-3 sm:px-5 rounded-md shadow-md transition-transform duration-300 hover:-translate-y-1 hover:bg-gray-300 text-xs sm:text-sm">
            View Project
          </span>
        </Link>
      </div>
    </div>
  );
};
export default ProjectItem;