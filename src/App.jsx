import React from 'react';
import Navbar from './components/Navbar';
import PPrincipal from './components/PPrincipal';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { Route } from 'lucide-react';

import IniciarS from './components/IniciarS';

function App() {
  return (
    <>
    <BrowserRouter>
   
     <Navbar/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
    <Routes>
    
      <Route path="/log" element={<IniciarS/>}/>
      <Route path="/" element={ <PPrincipal/>}/>
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/testimonials" element={<Testimonials/>}/>
      <Route path="/contacts" element={<Contacts/>}/>
      
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
    </>
  
  );
};

export default App;
