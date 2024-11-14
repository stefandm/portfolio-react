
import { FaHtml5, FaCss3Alt, FaGitAlt, FaReact } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { BiLogoTypescript } from 'react-icons/bi';
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5';
import SkillItem from './SkillItem';

const Skills = () => {
  return (
    <div id="skills" className='mt-[20vh]  min-h-[90vh]'>
        <h1 className='text-6xl  md:text-7xl font-semibold text-center mb-[10vh]'>
          Skills
        </h1>
        <div className='flex flex-col md:flex-row px-[10vw]'>
          <div className=' md:w-1/2 flex justify-center items-center'>
            <p className=' text-lg xl:text-2xl px-[5vw] text-center md:text-left '>
            Through practical experience, I’ve developed these skills, which have been essential in building real-world projects and delivering effective solutions
            </p>
          </div>
          <div className='flex flex-wrap gap-6 justify-around items-center md:w-1/2'>
            <SkillItem Icon={FaHtml5} label='HTML' color='text-orange-700' />
            <SkillItem Icon={FaCss3Alt} label='CSS' color='text-blue-700' />
            <SkillItem Icon={IoLogoJavascript} label='JavaScript' color='text-yellow-500' />
            <SkillItem Icon={TbApi} label='API' color='text-indigo-700' />
            <SkillItem Icon={BiLogoTypescript} label='TypeScript' color='text-blue-700' />
            <SkillItem Icon={FaGitAlt} label='Git' color='text-red-700' />
            <SkillItem Icon={FaReact} label='React' color='text-blue-700' />
            <SkillItem Icon={IoLogoFirebase} label='Firebase' color='text-orange-700' />
            </div>
        </div>
    </div>
  )
}

export default Skills
