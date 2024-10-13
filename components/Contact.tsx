import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import ContactImg from '../public/assets/contact.jpg';

const Contact: React.FC = () => {
  return (
    <div id='contact' className='w-full py-8'>
      <div className='max-w-[900px] mx-auto px-2 py-8'>
        <p className='text-sm tracking-wider uppercase text-[#5651e5] text-center'>
          Contact
        </p>
        <h2 className='py-1 text-center text-lg'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-4'>
          {/* Left Section */}
          <div className='col-span-3 lg:col-span-2 shadow-md rounded-lg p-2'>
            <div className='h-full'>
              <div className='flex justify-center'>
                <Image
                  className='rounded-lg hover:scale-105 ease-in duration-300'
                  src={ContactImg}
                  alt='/'
                  width={240}
                  height={240}
                />
              </div>
              <h2 className='py-2 text-center text-sm'>Clint Briley</h2>
              <p className='text-center text-xs'>Front-End Developer</p>
              <p className='py-2 text-center text-xs'>
                I am available for freelance or full-time positions. Contact me
                and let&apos;s talk.
              </p>
              <div className='text-center'>
                <p className='uppercase pt-2 text-xs'>Connect With Me</p>
                <div className='flex items-center justify-center space-x-2 py-2'>
                  <a
                    href='https://www.linkedin.com/in/clint-briley-50056920a/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-md p-2 hover:scale-105 ease-in duration-300'>
                      <FaLinkedinIn size={16} />
                    </div>
                  </a>
                  <a
                    href='https://github.com/fireclint'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-md p-2 hover:scale-105 ease-in duration-300'>
                      <FaGithub size={16} />
                    </div>
                  </a>
                  <div className='rounded-full shadow-md p-2 hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail size={16} />
                  </div>
                  <Link href='/resume'>
                    <a>
                      <div className='rounded-full shadow-md p-2 hover:scale-105 ease-in duration-300'>
                        <BsFillPersonLinesFill size={16} />
                      </div>
                    </a>
                  </Link>
                </div>
                {/* CV Download Button */}
                <div className='py-4'>
                  <a
                    href='/assets/Muhammad Muzamil06.pdf'
                    download
                    className='inline-block bg-[#5651e5] text-white p-2 px-4 rounded-md text-xs hover:bg-[#4340d0] transition ease-in-out duration-300'
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section (Contact Form) */}
          <div className='col-span-3 shadow-md rounded-lg p-2'>
            <form
              action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
              method='POST'
              encType='multipart/form-data'
            >
              <div className='grid grid-cols-1 gap-2'>
                <div className='flex flex-col'>
                  <label className='uppercase text-xs py-1'>Name</label>
                  <input
                    className='border rounded-md p-1 text-xs border-gray-300'
                    type='text'
                    name='name'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-xs py-1'>Phone Number</label>
                  <input
                    className='border rounded-md p-1 text-xs border-gray-300'
                    type='text'
                    name='phone'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-xs py-1'>Email</label>
                  <input
                    className='border rounded-md p-1 text-xs border-gray-300'
                    type='email'
                    name='email'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-xs py-1'>Subject</label>
                  <input
                    className='border rounded-md p-1 text-xs border-gray-300'
                    type='text'
                    name='subject'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='uppercase text-xs py-1'>Message</label>
                  <textarea
                    className='border rounded-md p-1 text-xs border-gray-300'
                    rows={4}
                    name='message'
                  ></textarea>
                </div>
              </div>
              <button className='w-full bg-[#5651e5] text-white p-2 mt-3 rounded-md text-sm'>
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className='flex justify-center py-6'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-md p-2 cursor-pointer hover:scale-105 ease-in duration-300'>
                <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={20} />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;


