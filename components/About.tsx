import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About: React.FC = () => {
  return (
    <div id="about" className="relative w-full h-screen bg-[#F5F5F5] flex items-center overflow-hidden">
      {/* Diagonal Section Divider */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4A00E0] to-[#8E2DE2] transform -skew-y-6 origin-bottom-left w-[150%] h-[60%] md:h-[70%] top-[30%] md:top-[20%] z-0"></div>

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-16">

        {/* Left: Image with Overlay Effect */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative group">
            <Image
              src={AboutImg}
              alt="About Me"
              className="rounded-lg transform transition-transform duration-500 group-hover:scale-105"
              layout="intrinsic"
              objectFit="cover"
              height={600}
              width={450}
            />
            {/* Overlay on Image */}
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg group-hover:opacity-10 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Right: Text Section */}
        <div className="w-full md:w-1/2 text-white space-y-6 md:space-y-8">
          <p className="uppercase text-lg tracking-wider text-[#FFD700] animate-fade-in">
            Let's Collaborate
          </p>
          <h2 className="text-4xl font-bold animate-slide-left leading-tight">
            Crafting <span className="text-[#FFD700]">Unique</span> & Engaging Web Experiences
          </h2>
          <p className="text-lg animate-fade-in delay-100">
            I specialize in building visually captivating front-end experiences that blend creativity with cutting-edge technology. From single-page apps to fully interactive websites, I focus on performance, responsiveness, and modern design.
          </p>
          <p className="text-lg animate-fade-in delay-200">
            My journey began in 2013, working on multiple e-commerce platforms. Since then, I’ve mastered various tech stacks, and love creating digital products that delight users and clients alike.
          </p>
          <Link href="/#projects">
            <button className="mt-4 px-8 py-3 bg-[#FFD700] text-[#4A00E0] rounded-full font-semibold hover:bg-white hover:text-[#4A00E0] transition-all duration-300 animate-fade-in delay-300">
              Explore My Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;





