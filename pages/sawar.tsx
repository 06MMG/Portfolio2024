
import React from 'react';
import sawar from '../public/assets/projects/sawar.png'
import ProjectDetails from '../components/ProjectDetails';

const Sawar:React.FC = () => {
  return (
    <ProjectDetails
    title="Sawar Digital"
    description=" SawarDigital is a dynamic website offering a wide range of digital services, including SEO optimization, data strategy development, data analytics solutions, and custom software development. Our goal is to empower businesses with innovative digital tools and insights, helping them grow, streamline operations, and make data-driven decisions. With a focus on cutting-edge technology and tailored solutions, we deliver exceptional results to meet the unique needs of every client."
    technologies={[
      'React',
      'Tailwind',
      'JavaScript',
      'Firebase',
    ]}
    coverImages={[sawar]}
    LiveLink="https://www.sawardigital.com/"
  />
);
};
    

export default Sawar;
