
import React from 'react';
import msstudio from '../public/assets/projects/ms.png'
import sawar from '../public/assets/projects/sawar.png'
import emr from '../public/assets/emr/emr.png'
import foodswap from '../public/assets/foodswap/home.png'
import ProjectItem from './ProjectItem';

const Projects: React.FC = () => {
  return (
    <div id='projects' className='w-full py-20 bg-[#f8f9fa]'>
      <div className='max-w-[1240px] mx-auto px-6'>
        {/* Header Section */}
        <p className='text-2xl tracking-widest uppercase text-[#709dff]'>
          Projects
        </p>
        <h2 className='py-6 text-4xl font-bold text-[#333]'>
          What I&apos;ve Built
        </h2>

        {/* Projects Grid */}
        <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
          <ProjectItem
            title='Malik Studio'
            backgroundImg={msstudio}
            projectUrl='/msstudio'
            tech='React JS'
          />
          <ProjectItem
            title='Sawar Digital'
            backgroundImg={sawar}
            projectUrl='/sawar'
            tech='React JS'
          />
          <ProjectItem
            title='Electric Medical Record'
            backgroundImg={emr}
            projectUrl='/netflix'
            tech='React JS'
          />
          <ProjectItem
            title='Food Swap'
            backgroundImg={foodswap}
            projectUrl='/foodswap'
            tech='React-Native JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;