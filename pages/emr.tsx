
import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import emr from '../public/assets/emr/emr.png'
import emr1 from '../public/assets/emr/emr2.png'
import emr2 from '../public/assets/emr/emr3.png'
import emr3 from '../public/assets/emr/emr4.png'
import emr4 from '../public/assets/emr/emr5.png'
import emr5 from '../public/assets/emr/emr6.png'
import emr6 from '../public/assets/emr/emr7.png'

const Emr: React.FC = () => {
  return (
    <ProjectDetails
      title="Electic Medical System"
      description=" I built this application in React JS and is hosted on GitHub pages.
          This app features user authentication with firebase as well as the
          firestore cloud storage database. This application is pulling movie
          data from an the IMDB movie API and displaying different categories.
          It features horizontal sliding and a featured selection. The
          useContext hook is also being implemented for app-wide state
          management."
      technologies={[
        'React',
        'Tailwind Css',
        'JavaScript',
        'Python',
        'Django',
      ]}
      coverImages={[emr]}
      extraImages={[emr, emr1, emr2, emr3, emr4, emr5, emr6]}
    />
  );
};

export default Emr;
