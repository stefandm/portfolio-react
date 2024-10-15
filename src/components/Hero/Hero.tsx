
import React from 'react';
import AnimatedWord from './AnimatedWord'; // Import the AnimatedWord component
import profile from '../../assets/profile.png'

import {Link} from 'react-scroll'


const Hero: React.FC = () => {
  const dynamicWords = ['Developer', 'Designer']; // Words to cycle through

  return (
    <section className="flex flex-col min-h-[70vh] xl:h-[90vh] justify-between  overflow-auto mb-[10vh] " id='hero'>
      {/* Main Heading */}
      <div className="flex  justify-start ml-[10vw] mt-[5vh]">
        <h1 className="text-7xl md:text-9xl font-semibold ">Stefan Demirel</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-between mb-[1vh]'>
      <img
        className='ml-[15vw] mt-10 mb-2 object-cover w-[50vw] md:w-[35vw]  lg:w-[20vw] rounded-bl-[30%]'
        src={profile}
        alt='profile picture'
      />
      {/* Animated Title and Description */}
      <div className="self-center  md:self-end w-[65vw] md:w-[50vw] mt-8 md:mr-[5vw] mb-[15vh] ">
        <h2 className="text-4xl sm:text-5xl xl:text-7xl font-semibold flex justify-start mx-[-20px] items-center">
          Web&nbsp;
          <AnimatedWord words={dynamicWords} />
        </h2>
        <p className="mt-4 text-lg xl:text-xl text-gray-700 font-normal">
        Front-End Developer dedicated to crafting responsive and user-friendly web experiences through elegant problem-solving and continuous learning. Let's collaborate to bring your digital vision to life and create something amazing together!        </p>
        <div className='mt-6'>
        <Link to="contact" smooth={true} duration={600} offset={-50} className="hover:cursor-pointer h-[5vh] w-[10vw] font-medium border-2 border-black hover:bg-blue-100 py-3 px-6 text-lg">
        Get in Touch
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;

