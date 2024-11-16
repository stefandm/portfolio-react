import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { BiLogoTypescript } from 'react-icons/bi';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import SkillItem from './SkillItem';
import debugging from '../../assets/debugging.jpg';
import { motion } from 'framer-motion';

const Skills = () => {

  return (
    <>
      <h1 id="skills" className="text-6xl md:text-7xl font-semibold text-center mt-28 pb-6 md:pb-12">
        Skills
      </h1>
      <div className="px-12 xl:px-36">
        <div className="flex flex-col md:flex-row lg:gap-16 xl:gap-28">
          <div className="md:w-1/2 flex flex-col items-center justify-center">
          
        <motion.div
          initial={{ x: -200, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }} 
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          style={{
            willChange: 'opacity, transform',
          }}
        >
              <img
                src={debugging}
                alt="Debugging"
                className="w-auto md:w-auto max-h-[70vh]"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="md:w-1/2 my-auto flex flex-col justify-center items-center">
            <p className="text-lg text-center  md:mt-0 mb-12">
              Through practical experience, I’ve developed the following skills, which have been essential in building real-world projects and delivering effective solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-12 items-center md:w-3/4">
              <SkillItem Icon={FaHtml5} label="HTML" color="text-orange-800" />
              <SkillItem Icon={FaCss3Alt} label="CSS" color="text-blue-900" />
              <SkillItem Icon={IoLogoJavascript} label="JavaScript" color="text-yellow-700" />
              <SkillItem Icon={TbApi} label="API" color="text-indigo-900" />
              <SkillItem Icon={BiLogoTypescript} label="TypeScript" color="text-blue-900" />
              <SkillItem Icon={FaGitAlt} label="Git" color="text-red-900" />
              <SkillItem Icon={FaReact} label="React" color="text-blue-900" />
              <SkillItem Icon={IoLogoFirebase} label="Firebase" color="text-orange-800" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;

