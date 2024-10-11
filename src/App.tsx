import './App.css'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import DisplayName from './components/DisplayName'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <DisplayName/>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
