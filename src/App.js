import {Routes, Route} from 'react-router-dom'
import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Student from './Component/Student'
import Contact from './Component/Contact'
import './Component/style.css'



const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element ={<Home/> }></Route> 
    <Route path='/home' element ={<Home/> }></Route> 
    <Route path='/student' element= { <Student/>}  />
    <Route path='/contact' element= { <Contact/>}  />
  </Routes>
    
    </>
  )
}

export default App