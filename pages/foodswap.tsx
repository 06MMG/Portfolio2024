
import React from 'react';
import foodswap from '../public/assets/foodswap/home.png'
import foodswap1 from '../public/assets/foodswap/leaderboard.png'
import foodswap2 from '../public/assets/foodswap/sidebar.png'
import ProjectDetails from '../components/ProjectDetails';

const Foodswap: React.FC = () => {
  return (
    <ProjectDetails
      title="Food Swap"
      description=" Our app is a fun and engaging platform designed for sharing and donating food. Whether you want to share meals with friends or help those in need, the app makes it easy and rewarding. Through gamification, users can earn Foodiez points every time they donate or share food, which can unlock badges and rewards. The app fosters a sense of community by encouraging generosity while making food-sharing a social and enjoyable experience. Join us to make a positive impact, reduce waste, and spread happiness—one meal at a time!"
      technologies={[
        'React-Native',
        'CSS-StyleSheets',
        'JavaScript',
        'Python',
        'Django',
      ]}
      coverImages={[foodswap]}
      extraImages={[foodswap, foodswap1, foodswap2]}
    />
  );
};

export default Foodswap;
