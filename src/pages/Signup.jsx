import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import {getAuth,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import {db} from '../firebase.config'
import {doc,setDoc,serverTimestamp} from 'firebase/firestore'
import { toast } from "react-toastify";
const Signup = () => {
 const [showPassword,hidePassword]=useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });



  const { name, email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };



  const onSubmitHandler=async(e)=>{
    e.preventDefault();


    try {

      const auth=getAuth();
      const userCredential=await createUserWithEmailAndPassword(auth,email,password)
      const user=userCredential.user

      updateProfile(auth.currentUser,{displayName:name})

const formDataCopy={...formData}
delete formDataCopy.password;
formDataCopy.timestamp=serverTimestamp()
await setDoc(doc(db,'users',user.uid),formDataCopy)
toast.success(`successfully SignUp`)
      navigate('/')


      
    } catch (error) {
      console.log(error);
      toast.error('something went wrong')
      
    }

  }
  return (
    <Layout>
      <div className="d-flex  align-items-center justify-content-center w-100 mt-4">
        <form className="bg-light p-4"  onSubmit={onSubmitHandler}>
          <div className="bg-dark p-2 mt-2 text-light text-center">Sign Up</div>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              id="name"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type='email'
              className="form-control"
              value={email}
              id="email"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
             type={showPassword?'text':'password'}
              className="form-control"
              value={password}
              id="password"
              onChange={onChange}
            />
            <span>
              show pass
              <FaEye
              className="ms-2 text-danger"
              style={{cursor:'pointer'}}
              onClick={()=>{hidePassword(prev=>!prev)}}
                
              />{" "}
            </span>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <div>
            <h6>Login With Google </h6>
            <span>
              {" "}
              Already User <Link to="/signin">Login</Link>{" "}
            </span>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
