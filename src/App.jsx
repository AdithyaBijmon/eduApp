import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './sections/About'
import Contact from './sections/Contact'
import Courses from './sections/Courses'
import Footer from './sections/Footer'
import Landing from './sections/Landing'

function App() {
  

  return (
    <>
      <Landing/>
      <About/>
      <Courses/>
      <Contact/>
      <Footer/>
      
      
    </>
  )
}

export default App
