import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import DisplayName from './components/DisplayName'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills/Skills'

function App() {

  return (
    <>
      <DisplayName/>
      <Nav/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
