// import React from 'react';
// import { motion, useReducedMotion, Variants } from 'framer-motion';
// import selfTaught from '../assets/selfTaught_1.jpg';
// import { PiLightbulbLight } from "react-icons/pi";
// import { PiPuzzlePieceLight } from "react-icons/pi";

// const AboutMe: React.FC = () => {
//   const shouldReduceMotion = useReducedMotion();

//   const textVariants: Variants = shouldReduceMotion
//     ? {
//         hidden: { opacity: 1 },
//         visible: { opacity: 1 },
//       }
//     : {
//         hidden: { opacity: 0 },
//         visible: { opacity: 1 },
//       };

//   const imageVariants: Variants = shouldReduceMotion
//     ? {
//         hidden: { opacity: 1, x: 0 },
//         visible: { opacity: 1, x: 0 },
//       }
//     : {
//         hidden: { x: 200, opacity: 0 },
//         visible: { x: 0, opacity: 1 },
//       };

//   return (
//     <>
//       <h1
//         id="aboutme"
//         className="text-6xl text-center md:text-7xl font-semibold md:mt-24 pb-12 xl:my-0"
//         style={{
//           textRendering: 'optimizeLegibility',
//           WebkitFontSmoothing: 'antialiased',
//           MozOsxFontSmoothing: 'grayscale',
//         }}
//       >
//         About Me
//       </h1>
//       <div className="flex flex-col-reverse md:flex-row gap-24 overflow-hidden mb-24 px-12 lg:px-36">
//         <motion.div
//           className="flex flex-col justify-center md:gap-12 items-center md:w-1/2"
//           variants={textVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 0.8, ease: 'easeInOut' }}
//           style={{
//             willChange: 'opacity',
//           }}
//         >
//           <p
//             className="text-lg md:mt-0"
//             style={{
//               textRendering: 'optimizeLegibility',
//               WebkitFontSmoothing: 'antialiased',
//               MozOsxFontSmoothing: 'grayscale',
//               textShadow: '0 0 1px rgba(0, 0, 0, 0.1)',
//             }}
//           >
//             <PiLightbulbLight className="] h-[40px] w-[40px] md:mb-2" />
//             I’m a self-taught Front-End Developer driven by curiosity and a passion for creating websites. What began as a hobby has evolved into a commitment to mastering web development through hands-on projects and continuous learning.
//           </p>

//           <p
//             className="text-lg mt-6 md:mt-0"
//             style={{
//               textRendering: 'optimizeLegibility',
//               WebkitFontSmoothing: 'antialiased',
//               MozOsxFontSmoothing: 'grayscale',
//               textShadow: '0 0 1px rgba(0, 0, 0, 0.1)',
//             }}
//           >
//             <PiPuzzlePieceLight className=" h-[40px] w-[40px] md:mb-2" />
//             Focused on finding solutions, I enjoy refining my skills to build efficient, visually appealing websites. Each project offers an opportunity to create user-centered solutions while exploring new technologies. I’m eager to grow, whether by deepening my front-end expertise or exploring full-stack development.
//           </p>
//         </motion.div>

//         <motion.img
//           className="object-cover md:w-[45%] max-h-[70vh]"
//           src={selfTaught}
//           alt="online class"
//           variants={imageVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//           transition={{ duration: 1.2, ease: 'easeInOut' }}
//           style={{
//             willChange: 'opacity',
//           }}
//           loading="lazy"
//         />
//       </div>
//     </>
//   );
// };

// export default AboutMe;

import React from 'react';
import { PiLightbulbLight } from "react-icons/pi";
import { PiPuzzlePieceLight } from "react-icons/pi";
import selfTaught from '../assets/selfTaught_1.jpg';
import { motion } from 'framer-motion';

const AboutMe: React.FC = () => {
  return (
    <>
      <h1
        id="aboutme"
        className="text-6xl text-center md:text-7xl font-semibold md:mt-24 pb-12 xl:my-0"
        style={{
          textRendering: 'optimizeLegibility',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        }}
      >
        About Me
      </h1>
      <div className="flex flex-col-reverse md:flex-row gap-24 overflow-hidden mb-24 px-12 lg:px-36">
        {/* Static Text Section */}
        <div className="flex flex-col justify-center md:gap-12 items-center md:w-1/2">
          <p
            className="text-lg md:mt-0"
            style={{
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textShadow: '0 0 1px rgba(0, 0, 0, 0.1)',
            }}
          >
            <PiLightbulbLight className="h-[40px] w-[40px] md:mb-2" />
            I’m a self-taught Front-End Developer driven by curiosity and a passion for creating websites. What began as a hobby has evolved into a commitment to mastering web development through hands-on projects and continuous learning.
          </p>

          <p
            className="text-lg mt-6 md:mt-0"
            style={{
              textRendering: 'optimizeLegibility',
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textShadow: '0 0 1px rgba(0, 0, 0, 0.1)',
            }}
          >
            <PiPuzzlePieceLight className="h-[40px] w-[40px] md:mb-2" />
            Focused on finding solutions, I enjoy refining my skills to build efficient, visually appealing websites. Each project offers an opportunity to create user-centered solutions while exploring new technologies. I’m eager to grow, whether by deepening my front-end expertise or exploring full-stack development.
          </p>
        </div>

        {/* Image Section with Motion */}
        <div className='md:w-1/2 flex flex-col items-center justify-center'>
        <motion.div
          initial={{ x: 200, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }} 
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{
            willChange: 'opacity, transform',
          }}
        >
          <img
            src={selfTaught}
            alt="online class"
            className="w-auto md:w-auto max-h-[70vh] hidden md:block"
            loading="lazy"
          />
        </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
