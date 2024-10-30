import React from 'react'
import Footer from '../Footer';
import Header from './Header';
import { useEffect } from 'react';
import CategoryList from '../CategoryList';



const Store = () => {
  
  return (
    
    <div>
      <Header/>
      <CategoryList/>
      <Footer/>
    </div>
  )
}

export default Store
