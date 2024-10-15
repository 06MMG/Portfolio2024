
import React from 'react';
import foodswap from '../public/assets/foodswap/home.png'
import foodswap1 from '../public/assets/foodswap/leaderboard.png'
import foodswap2 from '../public/assets/foodswap/sidebar.png'
import ProjectDetails from '../components/ProjectDetails';

const Foodswap: React.FC = () => {
  return (
    <ProjectDetails
      title="Food Swap"
      description=" I built this application in React JS and is hosted on GitHub pages.
            This app features user authentication with firebase as well as the
            firestore cloud storage database. This application is pulling movie
            data from an the IMDB movie API and displaying different categories.
            It features horizontal sliding and a featured selection. The
            useContext hook is also being implemented for app-wide state
            management."
      technologies={[
        'React-Native',
        'CSS-StyleSheets',
        'JavaScript',
        'Python',
        'Django',
      ]}
      coverImages={[foodswap,foodswap2,foodswap1]}
      extraImages={[foodswap, foodswap1, foodswap2]}
    />
  );
};

export default Foodswap;
