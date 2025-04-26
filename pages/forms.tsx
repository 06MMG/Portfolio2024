
import React from 'react';
import ProjectDetails from '../components/ProjectDetails';
import forms6 from '../public/assets/forms/forms6.png'

const Forms: React.FC = () => {
  return (
    <ProjectDetails
      title="Financial Forms"
      description="Financial Forms is a user-friendly platform designed to simplify the process of collecting, organizing, and managing financial data. It features dynamic form creation, real-time validation, and secure data storage, making it ideal for businesses and individuals to handle financial records efficiently."
      technologies={[
        'React',
        'Tailwind Css',
        'JavaScript',
        'Firebase',
      ]}
      coverImages={[forms6]}
       LiveLink="https://financial.mywealthwisdom.com"
    />
  );
};

export default Forms;
