
import React from 'react';
import sawar from '../public/assets/projects/sawar.png'
import ProjectDetails from '../components/ProjectDetails';

const Sawar:React.FC = () => {
  return (
    <ProjectDetails
    title="Sawar Digital"
    description=" I built this application in React JS and is hosted on GitHub pages.
            This app features user authentication with firebase as well as the
            firestore cloud storage database. This application is pulling movie
            data from an the IMDB movie API and displaying different categories.
            It features horizontal sliding and a featured selection. The
            useContext hook is also being implemented for app-wide state
            management."
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
