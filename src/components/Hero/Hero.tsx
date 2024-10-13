
import React from 'react';
import AnimatedWord from './AnimatedWord'; // Import the AnimatedWord component
import profile from '../../assets/profile.png'


const Hero: React.FC = () => {
  const dynamicWords = ['Developer', 'Designer']; // Words to cycle through

  return (
    <section className="flex flex-col h-[90vh] justify-between overflow-auto" id='hero'>
      {/* Main Heading */}
      <div className="hidden md:flex flex-col items-start justify-center ml-[10vw] mt-[5vh]">
        <h1 className="md:text-9xl text-6xl font-semibold">Stefan Demirel</h1>
      </div>
      <div className='flex justify-between mb-[1vh]'>
      <img
        className='ml-[15vw] mb-2 object-cover  w-[20vw] rounded-bl-[30%]'
        src={profile}
        alt='profile picture'
      />
      {/* Animated Title and Description */}
      <div className="self-center md:self-end w-[90vw] md:w-[40vw] mt-8  md:mr-[10vw] mb-[15vh]">
        <h2 className="text-7xl font-semibold flex items-center">
          Web&nbsp;
          <AnimatedWord words={dynamicWords} />
          {/* Blinking Cursor */}
          {/* <span className={styles.blinkingCursor} aria-hidden="true">|</span> */}
        </h2>
        <p className="mt-4 text-lg text-gray-700 font-normal">
        Self-taught Front-End Developer dedicated to crafting responsive and user-friendly web experiences through elegant problem-solving and continuous learning. Let's collaborate to bring your digital vision to life and create something amazing together!        </p>
        <div className='mt-6'>
        <a href='#contact' className='h-[5vh] w-[10vw] font-medium border-2 border-black hover:bg-slate-200 p-2'>Get in Touch</a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
