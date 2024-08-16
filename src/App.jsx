import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Register from "./form/Register";
import Login from './form/Login';

import Aos from "aos";
import "./App.css";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="App bg-custom-pri scroll-smooth font-poppins">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
