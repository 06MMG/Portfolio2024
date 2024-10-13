import Image from 'next/image';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import ProjectDetails from '../components/ProjectDetails';

const property:React.FC = () => {
  return (
    <ProjectDetails
      title="Property Finders"
      description="This app was built using React JS and is hosted on Firebase. Users
        are able to search properties based on an Address, City, or ZIP code
        to retrieve a list of active properties currently for sale. You will
        be able to view property information as well as the specific
        location of the property integrated with the Google Maps API. User
        authentication is available so you can signup and signin to your
        account with an email address in order to save your favorite
        properties. This is made possible with Zillow API."
      technologies={[
        'React',
        'Tailwind',
        'JavaScript',
        'Firebase',
        'Google API',
        'Zillow API',
      ]}
      image={propertyImg}
      codeLink="https://github.com/fireclint/property-finder"
      demoLink="https://property-finder-development.web.app/"
    />
  );
};
export default property;
