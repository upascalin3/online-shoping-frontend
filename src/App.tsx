import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about';
import Shop from './pages/shop';
import Blog from './pages/blog';
import ContactUs from './pages/contactUs';
import Login from './pages/login';
import Signup from './pages/signup';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/login'element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
