import { useState } from 'react'
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './assets/Navbar/navbar'
import Home from './assets/components/user_student/home'
import Homeadmin from './assets/components/homeadmin';
import Login from './assets/components/auth/login';
import About from './assets/components/user_student/about';
import style from './App.css'
import Register from './assets/components/auth/register';
import Footerr  from './assets/components/user_student/footer';
function App() {
 

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/home" element={<Home />}/>
      <Route path='/homeadmin' element={<Homeadmin/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/foot' element={<Footerr/>}/>
     </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
