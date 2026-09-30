import { useState } from 'react'
import './App.css'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Contact from './Components/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
   <>
  <Navbar/>
  <Contact/>
  <Footer/>
   </>
  )
}

export default App
