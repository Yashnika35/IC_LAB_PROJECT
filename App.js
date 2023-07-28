import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from "./Components/Destination";
import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Destination from "./Components/Destination";


function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/Destination" element={<Destination />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
     </Routes>
     </BrowserRouter>
      </>
  );
}

export default App;
