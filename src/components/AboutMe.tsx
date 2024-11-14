import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import selfTaught from '../assets/selfTaught.jpg';
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
    <>
     <h1 className='text-6xl text-center md:text-7xl font-semibold md:pt-[10vh] mb-[5vh]'>
       About Me
    </h1>
    <div id='aboutme' className='flex xl:h-auto flex-col md:flex-row overflow-hidden mb-[10vh] '>

      {/* Animated Text Section */}
      <motion.div
        className='flex flex-col justify-evenly items-center pl-[10vw] pr-[5vw] md:w-[55vw] flex-shrink-0 antialiased transform-gpu'
        variants={textVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
      >
        <p className='text-lg mt-6 md:mt-0 '>
          <PiLightbulbLight className='md:ml-[-1.5vw] h-[5vh] w-[5vw] md:mb-2'/>
          I’m a self-taught Front-End Developer driven by curiosity and a passion for creating websites. What began as a hobby has evolved into a commitment to mastering web development through hands-on projects and continuous learning.
        </p>
        <p className='text-lg mt-6 md:mt-0'>
          <PiPuzzlePieceLight className='md:ml-[-1.5vw] h-[5vh] w-[5vw] md:mb-2'/>
          Focused on finding solutions, I enjoy refining my skills to build efficient, visually appealing websites. Each project offers an opportunity to create user-centered solutions while exploring new technologies. I’m eager to grow, whether by deepening my front-end expertise or exploring full-stack development.
        </p>
      </motion.div>

      {/* Animated Image Section */}
      <motion.img
        className='object-contain md:w-[50vw] md:h-[60vh] lg:w-[45vw] lg:h-[70vh] my-auto flex-shrink-0 hidden md:block pr-[10vw]'
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
    </>
  );
};

export default AboutMe;