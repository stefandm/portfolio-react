import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { BiLogoTypescript } from 'react-icons/bi';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import SkillItem from './SkillItem';
import debugging from '../../assets/debugging.jpg';

const Skills = () => {
  return (
    <>
    <h1 className='text-6xl md:text-7xl font-semibold text-center pt-[10vh] mb-[5vh]'>
      Skills
    </h1>
    <div id="skills" className='mb-[10vh]'>
      <div className='flex flex-col md:flex-row mx-[10vw] gap-10'>
        <div className='md:w-1/2 flex flex-col items-center justify-center '>
          <img
            src={debugging}
            alt="Debugging"
            className='w-auto md:w-[40vw] h-auto'
          />
        </div>
        <div className=' md:w-1/2 my-auto '>
          <p className='text-lg  text-center mb-[5vh]'>
            Through practical experience, I’ve developed the following skills, which have been essential in building real-world projects and delivering effective solutions.
          </p>
          <div className='flex flex-wrap justify-around gap-12 items-center'>
            <SkillItem Icon={FaHtml5} label='HTML' color='text-orange-800' />
            <SkillItem Icon={FaCss3Alt} label='CSS' color='text-blue-900' />
            <SkillItem Icon={IoLogoJavascript} label='JavaScript' color='text-yellow-700' />
            <SkillItem Icon={TbApi} label='API' color='text-indigo-900' />
            <SkillItem Icon={BiLogoTypescript} label='TypeScript' color='text-blue-900' />
            <SkillItem Icon={FaGitAlt} label='Git' color='text-red-900' />
            <SkillItem Icon={FaReact} label='React' color='text-blue-900' />
            <SkillItem Icon={IoLogoFirebase} label='Firebase' color='text-orange-800' />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Skills;
