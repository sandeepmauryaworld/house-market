import React,{useState,useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import {getAuth,updateProfile} from 'firebase/auth'
import { toast } from "react-toastify";
import {db} from '../firebase.config'
import {FaEdit} from 'react-icons/fa'
import { MdOutlineDoneOutline } from "react-icons/md";

const Profile = () => {
    const auth=getAuth()
    const navigate=useNavigate()
    const [changedetails,setChangeDetails]=useState(false)

    const [formData,setFormData]=useState({
        name:auth?.currentUser?.displayName,
        email:auth?.currentUser?.email,


    })
    const {name,email}=formData


    const logoutHander=()=>{
        auth.signOut()
        toast.success(`${name} Logout`);
        navigate('/')
    }

    // submit Handler

    const onsubmit=()=>{
        console.log('cliked ');
    }

  return (
    <Layout>
    <div className=" container w-50 mt-4 d-flex justify-content-between">
    <h4>Profile Details</h4>
   <button  className='btn btn-danger'  onClick={logoutHander}>Logout</button> 
    </div>

   <div className="container mt-4 card" style={{width: '18rem'}}>
   <div className="card-header">
   <div className="d-flex justify-content-between">
   <p>User Personal Details</p>
   <span style={{cursor:'pointer'  }}
   onClick={()=>{changedetails && onsubmit(); setChangeDetails(prevState=>!prevState)}}
   >
   {changedetails? <MdOutlineDoneOutline color='green'/> :  <FaEdit color='red'/> }
   </span>
   </div>
   </div>
  <div className="card-body">
   
  </div>
</div>






    
    </Layout>
  )
}

export default Profile