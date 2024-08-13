import { useState } from 'react'
import Home from './pages/Home'
import Register from './form/Register'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {


  return (
    <>
    <div className="App bg-custom-pri scroll-smooth font-poppins">
    
    <BrowserRouter>
    <Routes>
      <Route  path="/" element= {<Home />} />
      <Route  path="/register" element= {<Register />} />
    </Routes>
    </BrowserRouter>

    </div>
    </>

  
  )
}

export default App
