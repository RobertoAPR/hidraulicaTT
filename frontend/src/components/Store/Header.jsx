import React, { useState } from 'react';
import logo11 from "../../assets/logo11.png";
import {Link, Outlet} from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from'react-redux';
import SummaryApi from '../../common';
import {toast} from 'react-toastify'
import { setUserDetails } from '../../store/userSlice';
import ROLE from '../../common/role';

const Header = () => {
    const user = useSelector(state => state?.user?.user)
    const dispatch = useDispatch()
    const [menuDisplay,setMenuDisplay]= useState(false)

    const handleLogout = async() => {
        const fetchData = await fetch(SummaryApi.logout_user.url,{
            method: SummaryApi.logout_user.method,
            credentials: 'include'
        })

        const data = await fetchData.json()

        if(data.success){
           toast.success(data.message)
           dispatch(setUserDetails(null))
        }

        if(data.error){
            toast.error(data.message)
        }
    }
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
             <div className='relative flex justify-center'>
                {
                    user?._id &&(
                        <div className='text-3xl cursor-pointer relative flex justify-center' onClick={()=>setMenuDisplay(preve => !preve)}>
                        {
                            user?.profilePic ? (
                                <img className="h-10 w-10 rounded-full" src={user?.profilePic} alt={user?.name}/>
                            ) : (
                                <BiSolidUserCircle/>
                            )
                            
                        }
                       
                    </div>
                    )
                }
           
               {
                menuDisplay && (
                    <div className='absolute bg-slate-200 bottom-0 top-11 h-fit p-2 shadow-lg rounded'>
                    <nav>
                        {
                            user?.role === ROLE.ADMIN && (
                                <Link to={'/admin-panel/all-products'} className='whitespace-nowrap hover:bg-slate-100 p-2 text-slate-950' onClick={()=>setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                            )
                        }
                        
                    </nav>
                </div>
                )
               }
             </div>
                <div className='text-2xl relative'>
                    <span><FaCartShopping/></span>
                    <div className='bg-orange-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                        <p className='text-xs'>0</p>
                    </div>
                </div>

                <div className='flex space-x-6'>
                    {
                        user?._id ?(
                            <button onClick={handleLogout} className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Logout</button>
                        ) : (
                            <Link to="/log" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Sign In</Link>
                        )
                    }
                
                   
                </div>

            </div>
        </div>
    </header>
  )
}

export default Header
