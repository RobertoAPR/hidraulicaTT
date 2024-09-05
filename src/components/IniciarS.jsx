import Navbar from './Navbar';
import Footer from './Footer';
import { FaEye } from "react-icons/fa";
import React, {useState} from "react"
import { FaEyeSlash } from "react-icons/fa";
import {Link, Outlet} from "react-router-dom";

export default function IniciarS() {
  const [showPassword,setShowPassword] = useState(false)

  return (
    <>
    <Navbar/>
     <div className="max-w-7xl mx-auto pt-20 px-6">
    
    <div >
      <div className=" w-full items-center justify-center ">
      <div className='bg-slate-800 px-10 py-20 rounded-3xl border-2 border-gray-100'>
          <h1 className='text-5xl font-semibold'>Welcome Back</h1>
          <p className='font-medium text-lg text-gray-200 mt-4'>Welcome back! please enter your details.</p>
          <div className='mt-8'>
            <div>
              <label className='text-lg font-medium'>Email</label>
              <input 
              type='email' className='w-full h-full outline-none  bg-transparent'
              placeholder='Enter your email'
              />
            </div>
            <div>
              <label className='text-lg font-medium'>Password</label>
              <div className='p-2 flex'>
              <input 
              type={showPassword ? "text":"password"} className='w-full h-full outline-none  bg-transparent'
              placeholder='Enter your Password'
              />
              <div className='cursor-pointer text-xl' onClick={()=>setShowPassword((preve)=>!preve)}>
                <span>
                  {
                    showPassword? (
                      <FaEyeSlash/>
                    ) : (
                      <FaEye/>
                    )
                  }
               
                </span>
              </div>
              </div>
            </div>
            <div className='mt-8 flex justify-between items-center'>
              <div>
                <input
                type='checkbox'
                id='remember'
                />
                <label className='ml-2 font-medium text-base' for="remember">Remember for 30 days</label>
              </div>
              <button className='font-medium text-base text-orange-500 hover:underline hover:text-white'>
                <Link to={'/forgot-password'}>
                Forgot password
                </Link>
                </button>
            </div>
          </div>
          <div className='mt-8 flex flex-col gap-y-4'>
            <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all bg-gradient-to-r from-orange-500 to-orange-800 py-3 rounded-xl'>Sign in</button>
            <button className='flex rounded-xl border-2 border-gray-100 items-center justify-center gap-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
              Sign in with Google
            </button>
          </div>
          <p className='my-5'>Dont have account ? <Link to={"/sign-up"} className='text-orange-600 text-orange-700 hover:underline'>Sing up</Link></p>
      </div>
      </div>
   
    </div>
    <Footer/>
    </div>
    </>
  )
}
