// src/components/Projects.tsx 

import React from 'react';
import { motion, Variants } from 'framer-motion';
import apexMockup from '../assets/sshotApex.jpg';
import biteMockup from '../assets/sshotBite.jpg';

const Projects: React.FC = () => {
  // Animation variants for the background color
  const backgroundVariants: Variants = {
    initial: {
      backgroundColor: '#FFFFFF', // White background
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
    inView: {
      backgroundColor: '#1e40af', // Black background
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  // Animation variants for the gradient overlay
  const gradientVariants: Variants = {
    initial: {
      opacity: 0, // Fully transparent
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    inView: {
      opacity: 1, // Fully visible
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  // Animation variants for the text color
  const textVariants: Variants = {
    initial: {
      color: '#1F2937', // Tailwind's gray-800 (dark gray)
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    inView: {
      color: '#FFFFFF', // White text
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  // Animation variants for the project images
  const imageVariants: Variants = {
    initial: {
      opacity: 0,
      y: 100, // Slight downward position
      transition: {
        duration: 0.6,
        ease: 'easeIn',
      },
    },
    inView: {
      opacity: 1,
      y: 0, // Move to original position
      transition: {
        duration: 0.6,
        ease: 'easeIn',
      },
    },
  };

  return (
    <motion.div
      id='projects'
      className=' min-h-screen flex flex-col justify-center items-center py-6 px-5 md:px-20 relative overflow-hidden antialiased transform-gpu'
      variants={backgroundVariants}
      initial='initial'
      whileInView='inView'
      viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the component is in view
    >
      {/* Solid White Background Layer */}
      <motion.div
        className='absolute top-0 left-0 w-full h-full bg-white z-0'
        variants={backgroundVariants}
      />

      {/* Gradient Overlay Layer */}
      <motion.div
        className='absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none'
        variants={gradientVariants}
      />

      {/* Main Heading */}
      <motion.h1
        className='text-6xl md:text-7xl font-semibold mt-12 mb-24 z-20'
        variants={textVariants}
      >
        Projects
      </motion.h1>

      {/* Projects Container */}
      <div className='flex flex-col md:flex-row justify-between items-center w-full md:w-screen gap-8 z-20'>
        {/* Project 1 */}
        <div className='flex flex-col items-center justify-center w-full md:w-1/2 gap-6'>
          <motion.img
            className='mb-10 object-cover w-full md:w-[35vw] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
            src={apexMockup}
            alt='Apex Project Mockup'
            variants={imageVariants}
            initial='initial'
            whileInView='inView'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            loading='lazy'
          />
          <div className='flex flex-col  items-center w-full md:w-1/2'>
            <motion.h2
              className='text-2xl text-center font-semibold mb-4'
              variants={textVariants}
            >
              Apex Pulse - Boxing Gym Landing Page
            </motion.h2>
            <div className='flex gap-4'>
              <a
                href='https://github.com/stefandm/apexPulse' // Replace with actual GitHub link
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600 transition-colors duration-300'
              >
                GitHub
              </a>
              <a
                href='https://stefandm.github.io/apexPulse/' // Replace with actual live site link
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300'
              >
                Live Site
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className='flex flex-col items-center w-full md:w-1/2 gap-6'>
          <motion.img
            className='mb-10 object-cover w-full  md:w-[35vw] rounded-lg shadow-lg  transition-transform duration-300 transform '
            src={biteMockup}
            alt='Bite Project Mockup'
            variants={imageVariants}
            initial='initial'
            whileInView='inView'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            loading='lazy'
          />
          <div className='flex flex-col  items-center  w-full md:w-1/2'>
            <motion.h2
              className='text-2xl  text-center font-semibold mb-4'
              variants={textVariants}
            >
              Bite Buddy - Recipe Search Engine
            </motion.h2>
            <div className='flex gap-4'>
              <a
                href='https://github.com/stefandm/biteBuddy' // Replace with actual GitHub link
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-600 transition-colors duration-300'
              >
                GitHub
              </a>
              <a
                href='https://stefandm.github.io/biteBuddy/' // Replace with actual live site link
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-300'
              >
                Live Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
