import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {


  return (
    <>
    <div className="App bg-custom-pri  font-poppins">
    
    <BrowserRouter>
    <Routes>
      <Route  path="/" element= {<Home />} />
    <Route path="/about" element={<About />} />
    </Routes>
    </BrowserRouter>

    </div>
    </>

  
  )
}

export default App
