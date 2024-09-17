import Navbar from './Navbar';
import Footer from './Footer';
import { FaEye } from "react-icons/fa";
import React, {useState} from "react"
import { FaEyeSlash } from "react-icons/fa";
import {Link, Outlet} from "react-router-dom";
import usua from '../assets/usu.png'

export default function IniciarS() {
  const [showPassword,setShowPassword] = useState(false)
  const [data,setData] = useState({
    email: "",
    password: ""
  })

  const handleOnChange = (e) => {
    const {name, value} = e.target

    setData((preve)=>{
      return {
        ...preve,
        [name]: value
    }
  })
  }

  const handleSubmit = (e) => {
   e.preventDefault()
    // API call to send data
    
  }

  console.log("data login",data)

  return (
    <>
    <section id='login'>
    <Navbar/>
     <div className="mx-auto container p-4">
      <div className='bg-slate-800 p-5 w-full max-w-sm mx-auto rounded-3xl border-2 border-gray-100'>
        <div className='w-20 h-20 mx-auto'>
          <img src={usua} alt="login icons" />
        </div>

        <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
          <div className='grid'>
              <label>Email</label>
              <div className='ease-in-out transition-all flex  border-2 border-gray-100 items-center justify-center py-3 rounded-xl'>
              <input 
               type='email' 
               className='w-full h-full outline-none  bg-transparent'
               name='email'
               value={data.email}
               onChange={handleOnChange}
               placeholder='Enter your email'
               />
              </div>
          </div>

          <div>
              <label>Password:</label>
              <div className=' ease-in-out transition-all flex  border-2 border-gray-100 items-center justify-center py-3 rounded-xl'>
              <input 
             type={showPassword ? "text":"password"} 
             className='w-full h-full outline-none  bg-transparent'
             value={data.password}
             name='password'
             onChange={handleOnChange}
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
            <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-orange-600 mt-2'>
                  Forgot Password ?
            </Link>
          </div>
          
          <button className='bg-gradient-to-r from-orange-500 to-orange-800 px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign up</button>

        </form>
        <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className='text-orange-600 hover:text-orange-700 hover:underline'>Sign up</Link></p>
      </div>
    
    </div>
    <Footer/>
    </section>
    </>
  )
}
