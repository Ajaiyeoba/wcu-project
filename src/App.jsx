import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Signup from "./auth/Signup";
import Login from './auth/Login'
import Aos from "aos";
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
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
