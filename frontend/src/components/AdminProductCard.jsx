import React, { useState } from 'react'
import { TbEdit } from "react-icons/tb";
import AdminEditProduct from './AdminEditProduct';
import displayINRCurrency from '../helpers/displayCurrency';

const AdminProductCard = ({
data,
fetchdata
}) => {
    const [editProduct, setEditProduct] = useState(false)

  return (
    <div className='bg-white p-4 rounded'>
       <div className='w-40'>
            <div className='w-32 h-32 flex justify-center items-center'>
            <img src={data?.productImage[0]} width={120} height={120} className='mx-auto object-fill h-full '/>
            </div>
              <h1 className='text-black text-sm'>{data.productName}</h1>

              <div>
                  <p className='text-black font-semibold'>
                    {
                      displayINRCurrency(data.selling)
                    }
                  </p>
                  <div className='text-black w-fit ml-auto p-2 bg-green-300 hover:bg-green-500 rounded-full  hover:text-white cursor-pointer' onClick={()=>setEditProduct(true)} >
                      <TbEdit/>
                  </div>
              </div>

             
       </div>
        {
          editProduct && (
            <AdminEditProduct productData={data} onClose={()=>setEditProduct(false)} fetchdata={fetchdata}/>
          )
        }
      
    </div>
  )
}

export default AdminProductCard
