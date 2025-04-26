// components/ProjectDetails.tsx
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import React from 'react';
import { FiExternalLink, FiArrowLeft } from 'react-icons/fi';
import { RiStackFill } from 'react-icons/ri';
import Link from 'next/link';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

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
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Animated Hero Section */}
      <div className="relative w-full h-screen max-h-[800px] overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect="fade"
          speed={1000}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="w-full h-full"
        >
          {coverImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={img}
                  alt={`Cover Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-90"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/80" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {title}
            </span>
          </h1>
          <p className="text-xl text-gray-100 max-w-2xl mb-8 leading-relaxed">
            {description.split('.').slice(0, 2).join('.')}...
          </p>
          <div className="flex gap-4">
            {LiveLink && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={LiveLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <FiExternalLink /> Live Demo
              </motion.a>
            )}
            <Link href="/#projects" passHref>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3 bg-white/10 text-white backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all"
              >
                <FiArrowLeft /> All Projects
              </motion.a>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-3 gap-12"
        >
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                Project Overview
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {description}
              </p>
            </div>

            {/* Gallery */}
            {extraImages && extraImages.length > 0 && (
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center gap-2">
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                  Project Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {extraImages.map((img, index) => (
                    <motion.div 
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      className="relative w-full h-80 rounded-xl overflow-hidden shadow-lg"
                    >
                      <Image
                        src={img}
                        alt={`Gallery image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="hover:scale-105 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <RiStackFill className="text-white" />
                Technology Stack
              </h3>
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                    <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                    <span className="font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {LiveLink && (
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Project Links</h3>
                <div className="space-y-3">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    href={LiveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    <FiExternalLink /> Visit Live Site
                  </motion.a>
                  <Link href="/#projects" passHref>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-all"
                    >
                      <FiArrowLeft /> All Projects
                    </motion.a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Full-width CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to build something amazing?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you need a stunning website, a powerful web app, or expert consulting, I can help bring your vision to life.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/#contact" passHref>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
              >
                Get In Touch
              </motion.a>
            </Link>
            <Link href="/#projects" passHref>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all"
              >
                View More Projects
              </motion.a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;