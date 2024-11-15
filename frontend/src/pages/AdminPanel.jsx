import React, { useEffect } from 'react';
import Header from '../components/Store/Header';
import Footer from '../components/Footer';
import { useSelector } from 'react-redux';
import { BiSolidUserCircle } from "react-icons/bi";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';

const AdminPanel = () => {
  const user = useSelector(state => state?.user?.user)
  const navigate = useNavigate()

  useEffect(() =>{
    if (user?.role !== ROLE.ADMIN){
      navigate("/store")
    }
  },[user])

  return (
    <>
    <Header/>
    <div className='pt-16 min-h-[calc(100vh-120px)] flex'>

        <aside className='bg-slate-600 min-h-full w-full max-w-60 customShadow p-2'>
          <div className='h-32 flex justify-center items-center flex-col'>
            <div className='text-5xl cursor-pointer relative flex justify-center' >
                      {
                          user?.profilePic ? (
                              <img className="h-20 w-20 rounded-full" src={user?.profilePic} alt={user?.name}/>
                          ) : (
                              <BiSolidUserCircle/>
                          ) 
                      }
                    
            </div>
            <p className='capitalize text-lg font-semibold'>{user?.name}</p>
            <p className='text-sm'>{user?.role}</p>
          </div>

          {/* navigation */}

          <div>
                  <nav className='grid p-4'>
                    <Link to={"all-users"} className='px-2 py-1 hover:bg-slate-500'>All users</Link>
                    <Link to={"all-products"} className='px-2 py-1 hover:bg-slate-500'>All product</Link>
                  </nav>
          </div>
        </aside>

        <main className='w-full h-full p-2'>
            <Outlet/>
        </main>
      
    </div>
    <Footer/>
    </>
  )
}

export default AdminPanel
