import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const contactPosition = contactSection.getBoundingClientRect();
        if (contactPosition.top < window.innerHeight * 0.9) {
          setIsVisible(true); 
        } else {
          setIsVisible(false); 
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slideVariants = {
    hidden: { x: '100vw', opacity: 0 },  
    visible: { x: 0, opacity: 1 },       
  };

  const slideRightVariants = {
    hidden: { x: '-100vw', opacity: 0 }, 
    visible: { x: 0, opacity: 1 },     
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-b from-slate-700 to-slate-200 overflow-x-hidden"
    >
      <h1 className="text-6xl  md:text-7xl font-semibold mb-[20vh] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        Let's work together!
      </h1>
      <div className="flex flex-col items-center gap-16">
        <motion.div
          className="text-6xl  text-white"
          variants={slideVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <p className=' drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>+49 176 35569006</p>
        </motion.div>

        <motion.div
          className="text-6xl  text-white"
          variants={slideRightVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}  
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <p className=' drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>demirel.stefan@yahoo.com</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
