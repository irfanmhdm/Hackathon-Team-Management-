import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import View from './components/View'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
    <Navbar/>
     <Routes>
      <Route path = "/view" element={<View/>}/>
      <Route path = "/add" element={<Add/>}/>
      <Route path = "/" element={<Home/>}/>
      
     </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
