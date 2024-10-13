// components/ProjectDetails.tsx
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

interface ProjectDetailsProps {
  title: string;
  description: string;
  technologies: string[];
  image: StaticImageData; // Cover image (optional)
  extraImages?: StaticImageData[]; // Additional images (optional)
  LiveLink: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  technologies,
  image,
  extraImages,
  LiveLink,
}) => {
  return (
    <div className='w-full'>
      {/* Cover Image Section */}
      
        <div className='w-screen h-[50vh] relative'>
          <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
          <Image
            className='absolute z-1'
            layout='fill'
            objectFit='cover'
            src={image}
            alt={title}
          />
          <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>{title}</h2>
            
          </div>
        </div>
      

      {/* Project Overview Section */}
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>{description}</p>
          <a href={LiveLink} target='_blank' rel='noreferrer'>
            <button className='px-8 py-2 mt-4'>Live</button>
          </a>
        </div>

        {/* Technologies Section */}
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              {technologies.map((tech, index) => (
                <p key={index} className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> {tech}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Extra Images Section */}
      {extraImages && extraImages.length > 0 && (
        <div className='max-w-[1240px] mx-auto py-8'>
          <h2 className='text-2xl font-bold mb-4'>Project Images</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {extraImages.map((img, index) => (
              <div key={index} className='relative w-full h-64'>
                <Image
                  src={img}
                  alt={`Project image ${index + 1}`}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-lg'
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Back Link */}
      <Link href='/#projects'>
        <p className='underline cursor-pointer text-center py-4'>Back</p>
      </Link>
    </div>
  );
};

export default ProjectDetails;

