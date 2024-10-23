import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";


const DisplayImage = ({
    imgUrl,
    onClose
}) => {
  return (
    <div className='fixed bottom-0 top-0 right-0 left-0 flex justify-center items-center'>
        <div className='bg-slate-200 shadow-lg rounded max-w-5xl mx-auto text-black p-4 '>

        <div className='w-fit ml-auto text-2xl hover:text-red-500 cursor-pointer ' onClick={onClose}>
            <IoIosCloseCircle />
        </div>

            <div className='flex justify-center p-4 max-w-[70vh] max-h-[70vh]'>
            <img src={imgUrl} className='w-full h-full' />
            </div>
        </div>
     
    </div>
  )
}

export default DisplayImage
