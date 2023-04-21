import { useState } from 'react'
import './App.css'
import Navbar from './assets/Navbar'
import AboutMe from './assets/AboutMe'
import Projects from './assets/Projects'
import Contact from './assets/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <AboutMe/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
