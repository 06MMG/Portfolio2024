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
    <div className='relative flex items-center justify-center h-auto w-full shadow-lg rounded-xl overflow-hidden group transform hover:scale-[1.02] transition-transform duration-500'>
      <Image 
        className='w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:rotate-2 group-hover:scale-110' 
        src={backgroundImg} 
        alt='/' 
      />
      <div className='absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
        <h3 className='text-3xl font-bold text-white tracking-wide'>{title}</h3>
        <p className='text-lg text-gray-300 mt-2'>{tech}</p>
        <Link href={projectUrl}>
          <p className='mt-4 px-6 py-3 rounded-full bg-white text-gray-800 font-semibold text-center cursor-pointer shadow-lg hover:bg-gray-300'>
            View Project
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;