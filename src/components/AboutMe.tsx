import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import selfTaught from '../assets/selfTaugh2.jpg';
import { PiLightbulbLight } from "react-icons/pi";
import { PiPuzzlePieceLight } from "react-icons/pi";


const AboutMe: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const textVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, x: 0 },
        visible: { opacity: 1, x: 0 },
      }
    : {
        hidden: { x: -200, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      };

  const imageVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, x: 0 },
        visible: { opacity: 1, x: 0 },
      }
    : {
        hidden: { x: 200, opacity: 0 },
        visible: { x: 0, opacity: 1 },
      };

  return (
    <div id='aboutme' className='flex xl:h-screen flex-col md:flex-row overflow-hidden mb-[20vh] mt-[10vh] '>
      {/* Animated Text Section */}
      <motion.div
        className='flex flex-col justify-evenly items-center px-[10vw] md:w-[60vw] flex-shrink-0 antialiased transform-gpu'
        variants={textVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
      >
        <h1 className='text-6xl text-center md:text-7xl font-semibold'>
          About Me
          </h1>
        <p className='text-lg mt-6 md:mt-0 '>
          <PiLightbulbLight className='ml-[-2vw] h-[6vh] w-[6vw] '/>
          I’m a self-taught Front-End Developer driven by curiosity and a passion for creating websites. What began as a hobby has evolved into a commitment to mastering web development through hands-on projects and continuous learning.
        </p>
        <p className='text-lg mt-6 md:mt-0'>
          <PiPuzzlePieceLight className='ml-[-2vw] h-[6vh] w-[6vw]'/>
          Focused on finding solutions, I enjoy refining my skills to build efficient, visually appealing websites. Each project offers an opportunity to create user-centered solutions while exploring new technologies. I’m eager to grow, whether by deepening my front-end expertise or exploring full-stack development.
        </p>
      </motion.div>

      {/* Animated Image Section */}
      <motion.img
        className='object-fit md:w-[40vw] md:h-[35vh] lg:w-[40vw] lg:h-[80vh] my-auto flex-shrink-0 transform-gpu hidden md:block pr-[5vw]'
        src={selfTaught}
        alt='online class'
        variants={imageVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
        loading='lazy' 
      />
    </div>
  );
};

export default AboutMe;
