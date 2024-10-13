import selfTaught from '../assets/selfTaught.jpg'
import { FaHtml5 } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { DiScrum } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";


const AboutMeAndSkills = () => {
  return (
    <div id='aboutme' className='h-[100vh] flex mt-[10vh]'>
      <div className='flex flex-col justify-evenly items-center text-center px-[5vw]'>
        <h1 className='text-6xl'>About me</h1>
        <p>
        Hello! I'm a passionate self-taught Front-End Developer based in Regensburg. My journey began with a curiosity for how websites function and a drive to bring innovative ideas to life. Through persistent learning and hands-on projects, I've honed my skills in designing responsive interfaces and optimizing user interactions.    
        </p>
        <h1 className='text-6xl'>Skills</h1>
        <div className='flex flex-wrap gap-6 justify-center items-center'>
          <div><FaHtml5 className='h-[7vh] w-[7vw]'/>Html</div>
          <div><FaCss3Alt className='h-[7vh] w-[7vw]'/>Css</div>
          <div><IoLogoJavascript className='h-[7vh] w-[7vw]'/>Javascript</div>
          <div><TbApi className='h-[7vh] w-[7vw]'/>Api</div>
          <div><BiLogoTypescript className='h-[7vh] w-[7vw]'/>Typescript</div>
          <div><FaGitAlt className='h-[7vh] w-[7vw]'/>Git</div>
          <div><DiScrum className='h-[7vh] w-[7vw]'/>Scrum</div>
          <div><FaReact className='h-[7vh] w-[7vw]'/>React</div>
          <div><IoLogoFirebase className='h-[7vh] w-[7vw]'/>Firebase</div>
        </div>
      </div>
      <img
        className='object-cover '
        src={selfTaught}
        alt='profile picture'
      />
    </div>
  )
}

export default AboutMeAndSkills
