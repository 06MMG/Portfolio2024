import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import avatar from '../public/assets/avatar.png';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const [navBg, setNavBg] = useState<string>('#ecf0f3');
  const [linkColor, setLinkColor] = useState<string>('#1f2937');

  const handleNav = (): void => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = (): void => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => {
      window.removeEventListener('scroll', handleShadow);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: navBg }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      
    <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
      <Link href='/'>
        <a>
          {/* Avatar Image */}
          <Image
            src={avatar} // Path to your avatar image
            alt='avatar'
            width={50}
            height={50}
            className='rounded-full cursor-pointer hover:scale-110 transition-transform duration-300'
          />
        </a>
      </Link>
      <div>
        <ul style={{ color: linkColor }} className='hidden md:flex'>
          {/* Navigation Links with animation */}
          {navLinks.map((link, index) => (
            <li key={index} className='ml-10 text-sm uppercase relative'>
              <Link href={link.href}>
                <a className='hover:text-yellow-500 transition-all duration-300'>
                  {link.name}
                  <span className='absolute left-0 bottom-[-2px] h-[2px] w-0 bg-yellow-500 transition-all duration-300 hover:w-full'></span>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div style={{ color: linkColor }} onClick={handleNav} className='md:hidden cursor-pointer'>
          <AiOutlineMenu size={25} />
        </div>
      </div>
    </div>

      {/* Mobile Menu */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                <a>
                <Image
            src={avatar} // Path to your avatar image
            alt='avatar'
            width={50}
            height={50}
            className='rounded-full cursor-pointer hover:scale-110 transition-transform duration-300'
          />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>Let&#39;s build something legendary together</p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>Let&#39;s Connect</p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a href='https://www.linkedin.com/in/clint-briley-50056920a/' target='_blank' rel='noreferrer'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href='https://github.com/fireclint' target='_blank' rel='noreferrer'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

export default Navbar;
