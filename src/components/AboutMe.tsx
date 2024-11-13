import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import selfTaught from '../assets/selfTaugh2.jpg';

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
    <div id='aboutme' className='flex xl:h-screen flex-col md:flex-row overflow-hidden py-6'>
      {/* Animated Text Section */}
      <motion.div
        className='flex flex-col justify-evenly items-center text-center px-20 md:w-2/3 flex-shrink-0 antialiased transform-gpu'
        variants={textVariants}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
      >
        <h1 className='text-6xl  md:text-7xl font-semibold'>
          About Me
          </h1>
        <p className='xl:text-lg mt-6 md:mt-0 medium'>
        I’m a self-taught Front-End Developer driven by curiosity about how websites work and a passion for bringing ideas to life. What started as an interest in web development has grown into a commitment to mastering the craft. Through hands-on projects and continuous learning, I’ve honed my skills and deepened my understanding of the field.        </p>
        <p className='xl:text-lg mt-6 md:mt-0 '>
        Solution-focused and passionate about coding, I find joy in refining my abilities to create visually appealing and efficient websites. Each project presents an opportunity to deliver high-quality, user-centered solutions while embracing new technologies and development methods. Eager to expand my expertise, I actively seek challenges that foster growth—whether improving my front-end skills or exploring full-stack development—each experience brings me closer to becoming a well-rounded developer.        </p>
        {/* <p className='xl:text-lg mt-6 md:mt-0'>
        Eager to expand my abilities and tackle challenges that foster growth. Whether improving front-end skills or exploring full-stack development, I embrace each experience as a step toward becoming a versatile, well-rounded developer.
        </p> */}
      </motion.div>

      {/* Animated Image Section */}
      <motion.img
        className='object-fit  w-1/3 h-[80vh] my-auto flex-shrink-0 transform-gpu hidden md:block pr-[2vw]'
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
