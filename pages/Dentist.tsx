import Image from 'next/image';
import React from 'react';
import dentist from '../public/assets/dentist/dentist.png'
import ProjectDetails from '../components/ProjectDetails';

const Dentist:React.FC = () => {
  return (
    <ProjectDetails
      title="Dentist Website"
      description="A modern and responsive dentist website designed to showcase dental services, appointment booking, and patient information. Built using React and Tailwind CSS for a clean and user-friendly interface."
      technologies={[
        'React',
        'Tailwind',
        'Typescript',
      ]}
      coverImages={[dentist]}
      LiveLink="https://dentist-web-nine.vercel.app"
    />
  );
};
export default Dentist;
