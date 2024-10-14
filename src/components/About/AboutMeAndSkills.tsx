import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import selfTaught from '../../assets/selfTaugh2.jpg';
import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { DiScrum } from 'react-icons/di';
import { BiLogoTypescript } from 'react-icons/bi';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import SkillItem from './SkillItem';

const AboutMeAndSkills: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Define animation variants for the text section
  const textVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, x: 0 },
        visible: { opacity: 1, x: 0 },
      }
    : {
        hidden: { x: -200, opacity: 0 }, // Using px units for transforms
        visible: { x: 0, opacity: 1 },
      };

  // Define animation variants for the image section
  const imageVariants: Variants = shouldReduceMotion
    ? {
        hidden: { opacity: 1, x: 0 },
        visible: { opacity: 1, x: 0 },
      }
    : {
        hidden: { x: 200, opacity: 0 }, // Using px units for transforms
        visible: { x: 0, opacity: 1 },
      };

  return (
    <div id='aboutme' className='flex xl:h-screen flex-col md:flex-row overflow-hidden py-6'>
      {/* Animated Text Section */}
      <motion.div
        className='flex flex-col justify-evenly items-center text-center px-20 md:w-1/2 flex-shrink-0 antialiased transform-gpu'
        variants={textVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
      >
        <h1 className='text-6xl font-semibold'>About Me</h1>
        <p className='xl:text-xl mt-6 md:mt-0'>
          Hello! I'm a passionate self-taught Front-End Developer based in Regensburg. My journey began with a curiosity for how websites function and a drive to bring innovative ideas to life. Through persistent learning and hands-on projects, I've honed my skills in designing responsive interfaces and optimizing user interactions.
        </p>
        <h1 className='text-6xl font-semibold mt-6 md:mt-0'>Skills</h1>
        <div className='flex flex-wrap gap-6 justify-around items-center mt-6 md:mt-0'>
          <SkillItem Icon={FaHtml5} label='HTML' color='text-orange-500' />
          <SkillItem Icon={FaCss3Alt} label='CSS' color='text-blue-500' />
          <SkillItem Icon={IoLogoJavascript} label='JavaScript' color='text-yellow-500' />
          <SkillItem Icon={TbApi} label='API' color='text-indigo-500' />
          <SkillItem Icon={BiLogoTypescript} label='TypeScript' color='text-blue-700' />
          <SkillItem Icon={FaGitAlt} label='Git' color='text-red-500' />
          <SkillItem Icon={DiScrum} label='Scrum' color='text-pink-500' />
          <SkillItem Icon={FaReact} label='React' color='text-blue-400' />
          <SkillItem Icon={IoLogoFirebase} label='Firebase' color='text-orange-500' />
        </div>
      </motion.div>

      {/* Animated Image Section */}
      <motion.img
        className='object-fit w-1/2 flex-shrink-0 transform-gpu hidden md:block'
        src={selfTaught}
        alt='online class'
        variants={imageVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
        loading='lazy' // Optimizes image loading
      />
    </div>
  );
};

export default AboutMeAndSkills;
