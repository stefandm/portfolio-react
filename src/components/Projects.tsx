
import React from 'react';
import { motion, Variants } from 'framer-motion';
import apexMockup from '../assets/sshotApex.jpg';
import biteMockup from '../assets/sshotBite.jpg';
import kanbanMockup from '../assets/sshotKanban.jpg'

const Projects: React.FC = () => {
  // Animation variants for the background color
  const backgroundVariants: Variants = {
    initial: {
      backgroundColor: '#FFFFFF',
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
    inView: {
      backgroundColor: '#334155', 
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  // Animation variants for the gradient overlay
  const gradientVariants: Variants = {
    initial: {
      opacity: 0, 
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    inView: {
      opacity: 1, 
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  // Animation variants for the text color
  const textVariants: Variants = {
    initial: {
      color: '#1F2937',
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
    inView: {
      color: '#FFFFFF', 
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  // Animation variants for the project containers
  const projectVariants: Variants = {
    initial: {
      opacity: 0,
      y: 50, 
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      id='projects'
      className='min-h-screen flex flex-col justify-center items-center py-6 px-5 md:px-20 relative overflow-hidden antialiased transform-gpu'
      variants={backgroundVariants}
      initial='initial'
      whileInView='inView'
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the component is in view
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
        className='text-6xl md:text-7xl font-semibold mt-[15vh] mb-[15vh] z-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
        variants={textVariants}
      >
        Projects
      </motion.h1>

      {/* Projects Container */}
      <div className='flex flex-col justify-between items-center w-full md:w-screen gap-20 z-20'>
        {/* Project 1 */}
        <motion.div
          className='flex flex-col md:flex-row justify-center items-center w-full'
          variants={projectVariants}
          initial='initial'
          whileInView='inView'
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            className='mb-10 object-cover w-full md:w-[35vw] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border-2 border-gray-400 '
            src={apexMockup}
            alt='Apex Project Mockup'
            loading='lazy'
          />
          <motion.div className='flex flex-col items-center w-full md:w-1/2'>
            <motion.h2
              className='text-2xl text-center font-semibold mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
              variants={textVariants}
            >
              Apex Pulse - Boxing Gym
            </motion.h2>
            <motion.h3
              className='text-xl text-center font-normal mb-4'
              variants={textVariants}
            >
              React
            </motion.h3>
            <div className='flex gap-4'>
              <a
                href='https://github.com/stefandm/apexPulse' // Replace with actual GitHub link
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors duration-300'
              >
                GitHub
              </a>
              <a
                href='https://stefandm.github.io/apexPulse/' // Replace with actual live site link
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition-colors duration-300'
              >
                Live Site
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className='flex flex-col-reverse md:flex-row justify-center items-center w-full'
          variants={projectVariants}
          initial='initial'
          whileInView='inView'
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className='flex flex-col items-center w-full md:w-1/2'>
            <motion.h2
              className='text-2xl text-center font-semibold mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
              variants={textVariants}
            >
              Bite Buddy - Recipe Api
            </motion.h2>
            <motion.h3
              className='text-xl text-center font-normal mb-4'
              variants={textVariants}
            >
              React, Typescript, Firebase
            </motion.h3>
            <div className='flex gap-4'>
              <a
                href='https://github.com/stefandm/biteBuddy' // Replace with actual GitHub link
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors duration-300'
              >
                GitHub
              </a>
              <a
                href='https://stefandm.github.io/biteBuddy/' // Replace with actual live site link
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition-colors duration-300'
              >
                Live Site
              </a>
            </div>
          </motion.div>
          <img
            className='mb-10 object-cover w-full md:w-[35vw] rounded-lg shadow-lg  hover:scale-105 transition-transform duration-300  border-2 border-gray-400 '
            src={biteMockup}
            alt='Bite Project Mockup'
            loading='lazy'
          />
        </motion.div>

         {/* Project 1 */}
         <motion.div
          className='flex flex-col md:flex-row justify-center items-center w-full'
          variants={projectVariants}
          initial='initial'
          whileInView='inView'
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            className='mb-10 object-cover w-full md:w-[35vw] rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 border-2 border-gray-400 '
            src={kanbanMockup}
            alt='Apex Project Mockup'
            loading='lazy'
          />
          <motion.div className='flex flex-col items-center w-full md:w-1/2'>
            <motion.h2
              className='text-2xl text-center font-semibold mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
              variants={textVariants}
            >
              Kanban - Kanban Board
            </motion.h2>
            <motion.h3
              className='text-xl text-center font-normal mb-4'
              variants={textVariants}
            >
              React, Typescript, Firebase
            </motion.h3>
            <div className='flex gap-4'>
              <a
                href='https://github.com/stefandm/kanban-board' // Replace with actual GitHub link
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition-colors duration-300'
              >
                GitHub
              </a>
              <a
                href='https://stefandm.github.io/kanban-board/' // Replace with actual live site link
                target='_blank'
                rel='noopener noreferrer'
                className='px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition-colors duration-300'
              >
                Live Site
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
