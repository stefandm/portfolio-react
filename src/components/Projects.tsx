import apexMockup from '../assets/apexMockup.png'
import biteMockup from '../assets/biteMockup.png'
const Projects = () => {
  return (
    <div id='projects' className="mt-[10vh] h-[100vh]">
      <h1 className='text-6xl text-center mb-[10vh]'>Projects</h1>
      <div className='flex justify-evenly'>
      <img
        className='object-cover w-[40vw]'
        src={apexMockup}
        alt='profile picture'
      />
      <img
        className='object-cover w-[40vw]'
        src={biteMockup}
        alt='profile picture'
      />
      </div>
    </div>
  )
}

export default Projects
