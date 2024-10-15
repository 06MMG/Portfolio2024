// components/ProjectDetails.tsx
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProjectDetailsProps {
  title: string;
  description: string;
  technologies: string[];
  coverImages: StaticImageData[];
  extraImages?: StaticImageData[];
  LiveLink?: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  technologies,
  coverImages,
  extraImages,
  LiveLink,
}) => {
  return (
    <div className="w-full">
      {/* Hero Section with Swiper Carousel */}
      <div className="relative w-full h-[80vh]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="w-full h-full"
        >
          {coverImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={img}
                  alt={`Cover Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Gradient Overlay with Title and CTA */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70 z-10"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wider drop-shadow-md">
            {title}
          </h1>
          <p className="text-lg md:text-xl max-w-lg mb-6">
            Explore our cutting-edge projects and immerse yourself in the journey.
          </p>
          {LiveLink && (
            <a href={LiveLink} target="_blank" rel="noreferrer">
              <button className="px-8 py-3 bg-white text-black rounded-full shadow-md hover:bg-gray-300 transition">
                View Live
              </button>
            </a>
          )}
        </div>
      </div>

      {/* Project Overview Section */}
      <div className="max-w-[1240px] mx-auto py-16 px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Overview Content */}
          <div className="md:col-span-3">
            <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
            <p className="text-lg text-gray-700 mb-6">{description}</p>
            {LiveLink && (
              <a href={LiveLink} target="_blank" rel="noreferrer">
                <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  Visit Project
                </button>
              </a>
            )}
          </div>

          {/* Technologies Used */}
          <div className="shadow-lg p-6 rounded-xl bg-white">
            <h3 className="text-xl font-semibold mb-4 text-center">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 md:flex-col md:gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 w-full md:w-auto break-words"
                >
                  <RiRadioButtonFill className="text-blue-600 min-w-[20px]" />
                  <span className="text-gray-600 text-sm md:text-base break-words">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Extra Project Images Section */}
      {extraImages && extraImages.length > 0 && (
        <div className="max-w-[1240px] mx-auto py-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Additional Project Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {extraImages.map((img, index) => (
              <div key={index} className="relative w-full h-[300px]">
                <Image
                  src={img}
                  alt={`Project image ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Back to Projects Link */}

      <div className="text-center py-8">
        <Link href="/#projects">
          <a className="text-blue-600 underline hover:text-blue-800 transition">Back to Projects</a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;

