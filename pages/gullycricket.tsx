import Image from 'next/image';
import React from 'react';
import gully from '../public/assets/gully/gullycricket .png'
import ProjectDetails from '../components/ProjectDetails';

const Malikstudio:React.FC = () => {
  return (
    <ProjectDetails
      title="Gully Premier League"
      description="Cricket Gully is a dedicated website built for Ramadan Gully Cricket tournaments. It provides players and teams with match schedules, live scores, and tournament updates. Developed using React and Tailwind CSS for a fast and responsive frontend, with MySQL and PHP scripts powering the backend for smooth data management and real-time updates."
      technologies={[
        'React',
        'Tailwind',
        'JavaScript',
        'PhP Scripts Backend',
      ]}
      coverImages={[gully]}
      LiveLink="https://gullycricket.malikstudio.com/home"
    />
  );
};
export default Malikstudio;
