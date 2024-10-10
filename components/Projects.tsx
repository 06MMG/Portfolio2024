import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import ProjectItem from './ProjectItem';

const Projects: React.FC = () => {
  return (
    <div id='projects' className='w-full py-20 bg-[#f8f9fa]'>
      <div className='max-w-[1240px] mx-auto px-6'>
        <p className='text-2xl tracking-widest uppercase text-[#709dff]'>
          Projects
        </p>
        <h2 className='py-6 text-4xl font-bold text-[#333]'>
          What I&apos;ve Built
        </h2>
        <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='row-span-2'>
            <ProjectItem
              title='Property Finder'
              backgroundImg={propertyImg}
              projectUrl='/property'
              tech='React JS'
            />
          </div>
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'
          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'
          />
          <div className='col-span-2'>
            <ProjectItem
              title='Twitch UI'
              backgroundImg={twitchImg}
              projectUrl='/twitch'
              tech='Next JS'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;