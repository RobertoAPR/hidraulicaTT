import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PPrincipal from './components/PPrincipal';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SummaryApi from './common';
import IniciarS from './components/IniciarS';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userSlice';
import { ToastContainer } from 'react-toastify';
import Header from './components/Store/Header';

//import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { Route } from 'lucide-react';


function App() {
  
  const dispatch = useDispatch()
  const [cartProductCount,setCartProductCount] = useState(0)

  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method: SummaryApi.current_user.method,
      credentials: 'include'
    })
  
    const dataApi = await dataResponse.json()

    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }
  }

  const fetchUserAddToCart = async()=>{
    const dataResponse = await fetch(SummaryApi.addToCartProductCount.url,{
      method : SummaryApi.addToCartProductCount.method,
      credentials : 'include'
    })
    const dataApi = await dataResponse.json()

    console.log("DataApi",dataApi)

    setCartProductCount(dataApi?.data?.count)

  }


  
  useEffect(() =>{
    fetchUserDetails()
    fetchUserAddToCart()
 
  },[]);

  return (
    <>
    <Context.Provider value={{
      fetchUserDetails,
      cartProductCount,
      fetchUserAddToCart
    }}>
      <ToastContainer 
      position='top-center'
      />
      
    <main className='min-h-[calc(100vh-120px)]'>
    <Outlet />
    </main>
     
    </Context.Provider>
    
    </>
  
  );
};

export default App;
