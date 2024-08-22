import React from 'react';
import Navbar from './components/Navbar';
import PPrincipal from './components/PPrincipal';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Testimonials from './components/Testimonials';


function App() {
  return (
    <>
     <Navbar/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
      <PPrincipal/>
      <AboutUs/>
      <Services/>
      <Testimonials/>
      <Contacts/>
     </div>
    </>
  );
};

export default App;
