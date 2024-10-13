import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png';

const Skills: React.FC = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-4 bg-[#1b1f23]'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#FFD700] text-center mb-6 animate-fade-in'>
          Skills & Expertise
        </p>
        <h2 className='text-4xl font-bold text-white text-center py-4 animate-slide-left'>
          What I Excel At
        </h2>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-8'>
          {skills.map(({ img, label }, index) => (
            <div
              key={index}
              className='p-6 shadow-xl rounded-xl bg-[#2b2f35] hover:bg-[#33373d] transform hover:scale-105 transition-transform duration-300 ease-in-out text-center text-white animate-fade-in'
            >
              <div className='m-auto'>
                <Image src={img} width={64} height={64} alt={label} className='rounded-full' />
              </div>
              <h3 className='text-lg font-semibold mt-4'>{label}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const skills = [
  { img: Html, label: 'HTML' },
  { img: Css, label: 'CSS' },
  { img: Javascript, label: 'JavaScript' },
  { img: ReactImg, label: 'React' },
  { img: Tailwind, label: 'Tailwind' },
  { img: Firebase, label: 'Firebase' },
  { img: Github, label: 'GitHub' },
  { img: NextJS, label: 'Next.js' },
];

export default Skills;


