import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Signup from "./auth/Signup";
import Login from './auth/Login'
import Board from "./dashboard/Board";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./dashboard/components/Header";
import SidebarContent from "./dashboard/components/SidebarContent";
import {auth} from './firebase/Firebase';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  })
  return (
    <>
      <div className="App bg-custom-pri scroll-smooth text-poppins">
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={user ? <Navigate to='/board' /> : <Home/> } /> */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/board" element={ <Board />} />
            {/* <Route path="/header" element={ <Header />} /> */}
            <Route path="/sidebar" element={<SidebarContent/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
