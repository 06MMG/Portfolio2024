import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main: React.FC = () => {
  return (
    <div
      id="home"
      className="w-full h-screen bg-gradient-to-b from-[#F5F5F5] to-[#e3e7f0] flex items-center justify-center text-center overflow-hidden relative"
    >
      <div className="max-w-[1240px] mx-auto px-4 py-8 flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:space-x-12">
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="uppercase text-xs sm:text-sm tracking-[0.15em] text-[#6A1B9A] animate-fade-in mt-12 sm:mt-16">
            Let's Build Something Amazing Together
          </p>
          <h1 className="py-4 text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F2937] animate-slide-left">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6A1B9A] to-[#4B6CC1]">Clint</span>
          </h1>
          <h2 className="py-2 text-xl sm:text-2xl md:text-3xl font-light text-[#374151] animate-slide-left delay-75">
            A Passionate Front-End Web Developer
          </h2>
          <p className="py-4 text-gray-600 max-w-[90%] mx-auto text-base md:mx-0 animate-fade-in delay-150">
            Focused on building responsive, user-friendly web applications with a flair for integrating back-end technologies.
          </p>
          <button className="mt-6 px-5 py-3 rounded-full text-white bg-gradient-to-r from-[#6A1B9A] to-[#4B6CC1] hover:from-[#4B6CC1] hover:to-[#6A1B9A] transition duration-300 ease-in-out animate-fade-in delay-300">
            Contact Me
          </button>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center md:justify-start space-x-4 mt-6 animate-fade-in delay-400">
            <a
              href="https://www.linkedin.com/in/clint-briley-50056920a/"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div className="rounded-full bg-white shadow-lg shadow-gray-300 p-4 hover:bg-[#4B6CC1] group-hover:scale-110 group-hover:rotate-12 ease-in-out duration-300">
                <FaLinkedinIn className="text-[#4B6CC1] group-hover:text-white" />
              </div>
            </a>
            <a
              href="https://github.com/fireclint"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <div className="rounded-full bg-white shadow-lg shadow-gray-300 p-4 hover:bg-[#4B6CC1] group-hover:scale-110 group-hover:rotate-12 ease-in-out duration-300">
                <FaGithub className="text-[#4B6CC1] group-hover:text-white" />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full bg-white shadow-lg shadow-gray-300 p-4 hover:bg-[#4B6CC1] group-hover:scale-110 group-hover:rotate-12 ease-in-out duration-300">
                <AiOutlineMail className="text-[#4B6CC1] group-hover:text-white" />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full bg-white shadow-lg shadow-gray-300 p-4 hover:bg-[#4B6CC1] group-hover:scale-110 group-hover:rotate-12 ease-in-out duration-300">
                <BsFillPersonLinesFill className="text-[#4B6CC1] group-hover:text-white" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column: Profile Avatar */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-r from-[#6A1B9A] to-[#4B6CC1] rounded-full animate-float overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/developer-avatar.svg"
                alt="Developer Avatar"
                className="w-[90%] h-[90%] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;


