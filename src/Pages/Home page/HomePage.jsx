import React from 'react'
import Navbar from '../../Components/Navbar'
import Home from '../../Components/Home'
import About from '../../Components/About'
import Work from '../../Components/Work'
import Contact from '../../Components/Contact'
import Footer from '../../Components/Footer'



function HomePage() {
  return (
    <>
     <Navbar/> 
     <Home/>
     <About/>
     <Work/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default HomePage
