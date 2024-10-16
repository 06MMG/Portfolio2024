
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
      description=" Our EMR (Electronic Medical Record) web app is a comprehensive healthcare management system designed for hospitals. It streamlines workflows by providing a centralized platform for all staff, including doctors, nurses, lab technicians, radiologists, pharmacists, and medical assistants. The system enables seamless access to patient records, lab results, prescriptions, and imaging reports, ensuring real-time collaboration and improved patient care. With features like appointment scheduling, medication tracking, and automated reporting, our EMR app enhances efficiency, reduces errors, and supports better decision-making across the entire hospital ecosystem."
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
