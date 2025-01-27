import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import avatar from '../public/assets/avatar.png';
import ScrollReveal from './ScrollReveal';


const Main: React.FC = () => {

  return (
    <div
      id="home"
      className="w-full h-screen bg-gradient-to-b from-[#F5F5F5] to-[#e3e7f0] flex items-center justify-center text-center overflow-hidden relative"
    >
      <div className="max-w-[1240px] mx-auto px-4 py-8 flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">

        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left pt-16 md:pt-24">
          <ScrollReveal>
            <p className="hidden sm:block uppercase text-xs sm:text-sm tracking-[0.15em] text-[#6A1B9A]">
              Let's Build Something Amazing Together
            </p>
            <h1 className="py-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2937]">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A1B9A] to-[#4B6CC1]">
                Muzamil
              </span>
            </h1>
            <h2 className="py-2 text-xl sm:text-2xl md:text-3xl font-light text-[#374151]">
              A Passionate Front-End Web Developer
            </h2>
            <p className="py-4 text-gray-600 max-w-[90%] mx-auto text-base md:mx-0">
              Focused on building responsive, user-friendly web applications with a flair for integrating back-end technologies.
            </p>
          </ScrollReveal>
          <button className="mt-6 px-5 py-3 rounded-full bg-[#5651e5] text-white hover:bg-[#4340d0] transition duration-300 ease-in-out">
            Contact Me
          </button>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center md:justify-start space-x-4 mt-6">
            <Link href="https://www.linkedin.com/in/muzamil-mmg-a1422726a/" target="_blank" rel="noreferrer">
              <div className="rounded-full bg-white shadow-lg p-4 hover:bg-[#4B6CC1] group-hover:scale-110 group-hover:rotate-12 ease-in-out duration-300">
                <FaLinkedinIn className="text-[#4B6CC1] group-hover:text-white" />
              </div>
            </Link>
            <Link href="https://github.com/06MMG" target="_blank" rel="noreferrer">
              <div className="rounded-full bg-white shadow-lg p-4 hover:bg-[#4B6CC1] group-hover:scale-110 group-hover:rotate-12 ease-in-out duration-300">
                <FaGithub className="text-[#4B6CC1] group-hover:text-white" />
              </div>
            </Link>
            <Link href="/#contact">
              <div className="rounded-full bg-white shadow-lg p-4 hover:bg-[#4B6CC1] group-hover:scale-110 group-hover:rotate-12 ease-in-out duration-300">
                <AiOutlineMail className="text-[#4B6CC1] group-hover:text-white" />
              </div>
            </Link>
          </div>
        </div>


        {/* Right Column: Profile Avatar */}
        <ScrollReveal className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-[#6A1B9A] to-[#4B6CC1] rounded-full overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={avatar}
                alt="Developer Avatar"
                className="w-[90%] h-[90%] object-contain"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};


export default Main;
