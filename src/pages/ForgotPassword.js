import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import {Link,useNavigate} from  'react-router-dom'
import {toast} from 'react-toastify'
import {getAuth ,sendPasswordResetEmail} from 'firebase/auth'


const onChange=(e)=>{

}
const ForgotPassword = () => {

  const [email,setEmail]=useState('');
  const navigate=useNavigate()


  const onSubmitHandler=async(e)=>{
    e.preventDefault()

    try {

      const auth =getAuth();
      await sendPasswordResetEmail(auth,email);
      toast.success('Email was sent');
      navigate('/signin')
      
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong')
      
    }

  }
  return (
    <Layout>
    
    <div className="container mt-4">
    <h2>Reset Password</h2>
   <form  onSubmit={onSubmitHandler}>
  <div className="mb-3 container">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>

  <div className="d-flex justify-content-between">
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <Link to={'/signin'}>Sign  In</Link>
  </div>
 
</form>
</div>


    </Layout>
  )
}

export default ForgotPassword