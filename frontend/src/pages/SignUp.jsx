import React, { useState } from 'react'
import Header from '../components/Store/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaEye } from 'react-icons/fa'
import { FaEyeSlash } from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom'
import usua from '../assets/usu.png'
import imageTobasee from '../helpers/imageTobasee'
import SummaryApi from '../common'
import { toast } from 'react-toastify'


const SignUp = () => {
  const [showPassword,setShowPassword] = useState(false)
  const [showConfirmPassword,setShowConfirmPassword] = useState(false)
  const [data,setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",

  })
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const {name, value} = e.target

    setData((preve)=>{
      return {
        ...preve,
        [name]: value
    }
  })
  }

  const handleUploadPic = async(e) => {
      const file = e.target.files[0]

      const imagePic = await imageTobasee(file)
      console.log("imagePic",imagePic)
      setData((preve)=>{
          return{
             ...preve,
              profilePic: imagePic
          }
      })
  }

  const handleSubmit = async(e) => {
   e.preventDefault()

   if(data.password === data.confirmPassword){
      // API call to send data
      
      const dataResponse = await fetch(SummaryApi.signUP.url,{
      method: SummaryApi.signUP.method,
      headers: {
        "content-type": "application/json"
      },
      body : JSON.stringify(data),
      })

    const dataApi = await dataResponse.json()

    if(dataApi.success){
      toast.success(dataApi.message)
      navigate("/log")
    }

    if(dataApi.error){
      toast.error(dataApi.message)
    }
  

    console.log("data",dataApi)
   }else{
      console.log("Pleas check password")
   }
   
  }

  return (
    <>
    <p>esto es regustro de seccion</p>

     <section id='signup'>
    <Navbar/>
     <div className="mx-auto container p-4">
      <div className='bg-slate-800 p-5 w-full max-w-sm mx-auto rounded-3xl border-2 border-gray-100'>
        
        <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
          <div>
            <img src={data.profilePic || usua} alt="login icons" />
          </div>
          <form >
            <label>
              <div className='text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full'>
              Photo
              </div>
              <input type="file" className='hidden' onChange={handleUploadPic}/>
            </label>
          </form>
        </div>

        <form className='pt-6 flex flex-col gap-2' onSubmit={handleSubmit}>
          <div className='name'>
                <label>Name</label>
                <div className='ease-in-out transition-all flex  border-2 border-gray-100 items-center justify-center py-3 rounded-xl'>
                <input 
                type='text' 
                className='w-full h-full outline-none  bg-transparent'
                name='name'
                value={data.name}
                onChange={handleOnChange}
                required
                placeholder='Enter your name'
                />
                </div>
            </div>
          <div className='grid'>
              <label>Email</label>
              <div className='ease-in-out transition-all flex  border-2 border-gray-100 items-center justify-center py-3 rounded-xl'>
              <input 
               type='email' 
               className='w-full h-full outline-none  bg-transparent'
               name='email'
               value={data.email}
               onChange={handleOnChange}
               required
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
             required
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

          <div>
              <label>Confirm Password:</label>
              <div className=' ease-in-out transition-all flex  border-2 border-gray-100 items-center justify-center py-3 rounded-xl'>
              <input 
             type={showConfirmPassword ? "text":"password"} 
             className='w-full h-full outline-none  bg-transparent'
             value={data.confirmPassword}
             name='confirmPassword'
             onChange={handleOnChange}
             required
             placeholder='Enter confirm password'
              />
              
              <div className='cursor-pointer text-xl' onClick={()=>setShowConfirmPassword((preve)=>!preve)}>
                <span>
                  {
                    showConfirmPassword? (
                      <FaEyeSlash/>
                    ) : (
                      
                      <FaEye/>
                    )
                  }
               
                </span>
              </div>
            </div>
          </div>
          
          <button className='bg-gradient-to-r from-orange-500 to-orange-800 px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Sign Up</button>

        </form>
        <p className='my-5'>Already have account ? <Link to={"/log"} className='text-orange-600 hover:text-orange-700 hover:underline'>Sign in</Link></p>
      </div>
    
    </div>
    <Footer/>
    </section>
    </>
  )
}

export default SignUp
