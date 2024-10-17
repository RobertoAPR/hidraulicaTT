import React, { useState } from 'react'
import UploadProduct from '../components/uploadProduct'

const AllProducts = () => {
  const  [openUploadProduct,setOpenUpdateProduct] = useState(false)
  return (
    <div>
      <div className='bg-slate-500 py-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>All Product</h2>
        <button className='border-orange-600 py-1 px-3 rounded-full border-2 hover:bg-orange-500 transition-all' onClick={()=> setOpenUpdateProduct(true)}>Upload Product</button>
      </div>

      {/**upload product */}
      {
        openUploadProduct && (
          <UploadProduct onClose={()=>setOpenUpdateProduct(false)}/>
        )
      }
      
    </div>
  )
}

export default AllProducts
