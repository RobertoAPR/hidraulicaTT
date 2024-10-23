import React, { useState } from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import productCategory from '../helpers/productCategory';
import { IoMdCloudUpload } from "react-icons/io";
import uploadImage from '../helpers/uploadImage';
import DisplayImage from './DisplayImage';
import { RiDeleteBinFill } from "react-icons/ri";

const UploadProduct = ({
    onClose,
  
}) => {
    const [data, setData] = useState({

        productName: "",
        brandName: "",
        category : "",
        productImage: [],
        productDescription: "",
        price: "",
        selling: "",
    })

    {/** const [uploadProductImageInput, setUploadProductImageInput] = useState("") */}
    const [fullScreenImage, setFullScreenImage] = useState("")
    const [openFullScreenImage, setOpenFullScreenImage] = useState(false)

    const handleOnChange = (e) => {
        const {name, value} = e.target
        setData((preve) => {
            return{
                ...preve,
                [name] : value
            }
        })
    }
    const handleUploadProduct = async(e) => {
        const file = e.target.files[0]

        const uploadImageCloudinary = await uploadImage(file)

        setData((preve) => {
            return{
                ...preve,
                productImage: [...preve.productImage, uploadImageCloudinary.url]
            }
        })
    }

    const handleDeleteProductImage = async(index) => {
        console.log("image index", index)

        const newProductImage = [...data.productImage]
        newProductImage.splice(index, 1)

        setData((preve) => {
            return{
                ...preve,
                productImage: [...newProductImage]
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // API call to send data
        console.log("product data", data)
        // API call to send data
    }
    
  return (
    <div className='fixed w-full h-full bg-slate-300 bg-opacity-50 top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
      <div className='bg-slate-600 p-4 rounded w-full max-w-2xl h-full max-h-[80%] overflow-hidden'>

        <div className='flex justify-between items-center pb-3'>
            <h2 className='font-bold text-lg'>Upload product</h2>
            <button className='w-fit ml-auto text-xl hover:text-red-500 cursor-pointer' onClick={onClose}>
            <IoIosCloseCircle />
            </button>
        </div>

        <form className='grid p-4 gap-2 overflow-y-scroll h-full pb-5' onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name :</label>
        <input 
            type="text" 
            id="productName" 
            placeholder="name product" 
            name='productName'
            value={data.productName} 
            onChange={handleOnChange}
            className='p-2 bg-slate-200 border rounded text-black'
        />

        <label htmlFor="brandName" className='mt-3'>Brand Name :</label>
        <input 
            type="text" 
            id="brandName" 
            placeholder="name brand" 
            name='brandName'
            value={data.brandName} 
            onChange={handleOnChange}
            className='p-2 bg-slate-200 border rounded text-black'
        />

        <label htmlFor="category" className='mt-3'>Category :</label>
        <select value={data.category} name='category' onChange={handleOnChange} className='p-2 bg-slate-200 border rounded text-black'>
             <option  value={""}>Select Category</option>
            {
                productCategory.map((us,index) => {
                    return(
                        <option key={us.value+index} value={us.value}>{us.label}</option>
                    )
                    
                })
            }
        </select>

        <label htmlFor="productImage" className='mt-3'>Product Image :</label>
        <label htmlFor='uploadImageInput'>
        <div className='p-2 bg-slate-100 border rounded h-32 w-full flex justify-center items-center cursor-pointer'>
             
                    <div className='text-slate-400 flex justify-center items-center flex-col'>
                        
                        <span className='text-5xl'><IoMdCloudUpload /></span>
                        <p className=''>Upload Product Image</p>
                        <input type="file" id='uploadImageInput' className='hidden' onChange={handleUploadProduct}/>
                        
                    </div>
             
        </div>
        </label>
        <div>
            {
                data?.productImage[0] ? (
                  <div className='flex items-center gap-2'>
                    {
                          data.productImage.map((el,index)=>{
                            return(
                                <div className='relative group'>
                                    <img 
                                    src={el} 
                                    alt={el} 
                                    width={100} 
                                    height={100} 
                                    className='bg-slate-200 border cursor-pointer '
                                    onClick={()=>{
                                        setOpenFullScreenImage(true)
                                        setFullScreenImage(el)
                                    }}/>
                                    <div className='absolute bottom-0 right-0 p-1 bg-red-500 rounded-full hidden group-hover:block cursor-pointer' onClick={()=>handleDeleteProductImage(index)}>
                                    <RiDeleteBinFill />
                                    </div>
                                </div>
                             
                            )
                        })
                    }
                  </div>

                ) : (
                    <p className='text-white text-xs'>*upload image</p>
                )
            }
            
        </div>

        <label htmlFor="price" className='mt-3'>Price :</label>
        <input 
            type="number" 
            id="price" 
            placeholder="price product" 
            name='price'
            value={data.price} 
            onChange={handleOnChange}
            className='p-2 bg-slate-200 border rounded text-black'
        />

        <label htmlFor="selling" className='mt-3'>Selling Price :</label>
        <input 
            type="number" 
            id="selling" 
            placeholder="selling price" 
            name='selling'
            value={data.selling} 
            onChange={handleOnChange}
            className='p-2 bg-slate-200 border rounded text-black'
        />

<       label htmlFor="productDescription" className='mt-3'>Product Description :</label>
        <textarea className='h-28 bg-slate-100 border resize-none p-1 text-black' 
        placeholder='description product' 
        rows={3} 
        onChange={handleOnChange}
        name='productDescription'>
        </textarea>

        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md mb-6 ">Upload Peoduct</button>
      </form>
      </div>
      {/** display image fulll screen*/}
      {
        openFullScreenImage && (
            <DisplayImage onClose={()=>setOpenFullScreenImage(false)} imgUrl={fullScreenImage}/>
        )
      }
     
    </div>
  )
}

export default UploadProduct
