import React,{useState,useEffect} from 'react'
import Layout from '../components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import {getAuth,updateProfile} from 'firebase/auth'
import { toast } from "react-toastify";
import {db} from '../firebase.config'
import {FaEdit} from 'react-icons/fa'
import { MdOutlineDoneOutline } from "react-icons/md";
import {doc,setDoc, updateDoc} from 'firebase/firestore'

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

    // on change 

    const onChange=(e)=>{
      setFormData(prevState=>({
        ...prevState,
        [e.target.id]:e.target.value
      }))
    }

    // submit Handler

    const onSubmit=async()=>{
      

      try {

        if(auth.currentUser.displayName!==name ){
          await updateProfile(auth.currentUser,{
            displayName:name
          })
          const userRef=doc(db,'users',auth.currentUser.uid);
        
          await updateDoc(userRef,{name})
          toast.success('User Updated')
        }

      } catch (error) {
        console.log(error);
        toast.error('Somthing Went Wrong')
        
      }
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
   onClick={()=>{
    changedetails && onSubmit(); 
    setChangeDetails(prevState=>!prevState)}}
   >
   {changedetails? <MdOutlineDoneOutline color='green'/> :  <FaEdit color='red'/> }
   </span>
   </div>
   </div>
  <div className="card-body">
  <form>

  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" value={name} onChange={onChange} disabled={!changedetails} />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email"  value={email} disabled={!changedetails}  />
  </div>
  
 
</form>

   
  </div>
</div>






    
    </Layout>
  )
}

export default Profile