import './App.css'
import AboutMeAndSkills from './components/About/AboutMeAndSkills'
import Contact from './components/Contact'
import DisplayName from './components/DisplayName'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects'

function App() {

  return (
    <>
      <DisplayName/>
      <Header/>
      <Hero/>
      <AboutMeAndSkills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
