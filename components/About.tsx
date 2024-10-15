import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';
import ScrollReveal from './ScrollReveal';

const About: React.FC = () => {
  return (
    <div
      id="about"
      className="relative w-full min-h-screen bg-[#F5F5F5] flex items-center overflow-hidden"
    >
      {/* Diagonal Section Divider */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4A00E0] to-[#8E2DE2] transform -skew-y-6 origin-bottom-left w-[150%] h-[60%] md:h-[70%] top-[30%] md:top-[20%] z-0"></div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-6 md:px-8 lg:px-12 py-8 md:py-12 flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-16">
        {/* Left: Image with Overlay Effect */}
        <ScrollReveal className="w-full md:w-1/2 relative">
          <div className="relative group">
            <Image
              src={AboutImg}
              alt="About Me"
              className="rounded-lg transform transition-transform duration-500 group-hover:scale-105"
              layout="responsive"
              objectFit="cover"
              height={400}
              width={300}
            />
            {/* Overlay on Image */}
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg group-hover:opacity-10 transition-opacity duration-500"></div>
          </div>
        </ScrollReveal>

        {/* Right: Text Section */}
        <ScrollReveal className="w-full md:w-1/2 text-white space-y-6 md:space-y-8 relative z-20 bg-[#4A00E0] md:bg-transparent p-6 md:p-0 rounded-lg md:rounded-none">
          <p className="uppercase text-lg tracking-wider text-[#FFD700]">
            Let's Collaborate
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Crafting <span className="text-[#FFD700]">Unique</span> & Engaging Web Experiences
          </h2>
          <p className="text-lg">
            I specialize in building visually captivating front-end experiences that blend creativity with cutting-edge technology. From single-page apps to fully interactive websites, I focus on performance, responsiveness, and modern design.
          </p>
          <p className="text-lg">
            My journey began in 2013, working on multiple e-commerce platforms. Since then, I’ve mastered various tech stacks, and love creating digital products that delight users and clients alike.
          </p>

          <Link href="/#projects">
            <button className="mt-4 px-8 py-3 bg-[#FFD700] text-[#4A00E0] rounded-full font-semibold hover:bg-white hover:text-[#4A00E0] transition-all duration-300">
              Explore My Projects
            </button>
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
};


export default About;






