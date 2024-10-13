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
    <div className="relative flex items-center justify-center w-full h-[300px] sm:h-[400px] shadow-lg rounded-lg overflow-hidden group bg-gray-100 transition-all duration-500 hover:shadow-xl">
      {/* Background Image */}
      <Image
        className="absolute w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        src={backgroundImg}
        alt={title}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col justify-end w-full h-full bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 transition-all duration-500 ease-in-out group-hover:bg-black/60">
        <h3 className="text-xl sm:text-3xl font-semibold text-white mb-2 sm:mb-4 transition-opacity duration-300 group-hover:opacity-90">
          {title}
        </h3>
        <p className="text-sm sm:text-lg text-gray-300 mb-3 sm:mb-4 transition-opacity duration-300 group-hover:opacity-90">
          {tech}
        </p>
        <Link href={projectUrl}>
          <a className="self-start bg-white text-gray-900 font-semibold text-center py-2 px-4 sm:py-3 sm:px-6 rounded-lg shadow-md transition-transform duration-300 transform hover:translate-y-[-4px] hover:bg-gray-300">
            View Project
          </a>
        </Link>
      </div>
    </div>
  );
};
export default ProjectItem;