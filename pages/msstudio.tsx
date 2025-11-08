import Image from 'next/image';
import React from 'react';
import ms from '../public/assets/projects/ms.png'
import ProjectDetails from '../components/ProjectDetails';

const Malikstudio:React.FC = () => {
  return (
    <ProjectDetails
      title="Malik Studio"
      description="This website was built using React JS and its Backend in Firebase is hosted on Hostinger. It serves as the online platform for my video editing company, offering a range of services including long-form video editing, YouTube shorts, cinematic trailers, and more. Users can explore Company portfolio, view detailed service packages, and easily integrated contact forms. The site also features seamless navigation with a responsive design, ensuring a smooth experience across all devices."
      technologies={[
        'React',
        'Tailwind',
        'JavaScript',
        'Firebase',
      ]}
      coverImages={[ms]}
    />
  );
};
export default Malikstudio;
