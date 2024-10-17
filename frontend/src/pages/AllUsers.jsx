import React, { useEffect, useState } from 'react'
import SummaryApi from '../common'
import toast from 'react-hot-toast'
import moment from 'moment'
import { TbEdit } from "react-icons/tb";
import ChangueUserRole from '../components/ChangueUserRole';

const AllUsers = () => {
    const [allUser,setAllUsers] = useState([])
    const [openUpdateRole,setOpenUpdateRole] = useState(false)
    const [updateUserDetails,setUpdateUserDetails] = useState({
      name: "",
      email: "",
      role: "",
      _id: "",
    })

    const fetchAllUsers = async() => {
        const fetchData = await fetch(SummaryApi.allUser.url,{
            method: SummaryApi.allUser.method,
            credentials: 'include'
        })

        const dataResponse = await fetchData.json()

        if(dataResponse.success){
          setAllUsers(dataResponse.data)
        }

        if(dataResponse.error){
          toast.error(dataResponse.message)
        }

      
    }

    useEffect(()=>{
        fetchAllUsers()
    },[])


  return (
    <div >
      <table className='w-full userTable'>
        <thead>
          <tr >
              <th>No.</th>
              <th>Name</th>
              <th>Emai</th>
              <th>Role</th>
              <th>Created Date</th>
              <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allUser.map((us,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{us?.name}</td>
                <td>{us?.email}</td>
                <td>{us?.role}</td>
                <td>{moment(us?.createdAt).format('LLL')}</td>
                <td>
                  <button className='bg-green-300 p-2 rounded-full cursor-pointer hover:bg-green-500 text-black' 
                  onClick={()=>{
                    setUpdateUserDetails(us)
                    setOpenUpdateRole(true)
                    }}>
                  <TbEdit />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

      {
        openUpdateRole && (
          <ChangueUserRole
            onClose={()=>setOpenUpdateRole(false)}
            name={updateUserDetails.name}
            email={updateUserDetails.email}
            role={updateUserDetails.role}
            userId={updateUserDetails._id}
            callFunc={fetchAllUsers}
          />
        )
      }
    
    </div>
  )
}

export default AllUsers
