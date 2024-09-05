import React from 'react';
import logo11 from "../../assets/logo11.png";
import {Link, Outlet} from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <header className='h-16 shadow-md'>
        <div className='h-full container mx-auto flex items-center px-4 justify-between'>
            <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo11} alt="logo" />
                    <span className="text-xl tracking-tight">
                        <Link to="/"> 24/7 Solutions LLC</Link>
                       </span>
            </div>

            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border border-orange-600 rounded-full focus-within:shadow pl-2'>
                <input type='text' placeholder='search product here...' className='w-full outline-none'/>
                <div className='text-lg min-w-[50px] h-8 bg-orange-600 flex items-center justify-center rounded-r-full text-white'>
                    <TbSearch/>
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <div className='text-3xl'>
                    <BiSolidUserCircle/>
                </div>
                <div className='text-2xl relative'>
                    <span><FaCartShopping/></span>
                    <div className='bg-orange-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                        <p className='text-xs'>0</p>
                    </div>
                </div>

                <div className='flex space-x-6'>
                <Link to="/log" className="py-2 px-3 border rounded-md">Sign In</Link>
                   
                   <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">
                   Create an account
                  </a>
                </div>

            </div>
        </div>
    </header>
  )
}

export default Header
