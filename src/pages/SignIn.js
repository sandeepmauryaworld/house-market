import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa6";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
const SignIn = () => {
  const [showPassword, hidePassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };


  const loginHandler=async (e)=>{
    e.preventDefault()

    try {
      const auth=getAuth()
      const userCredential=await signInWithEmailAndPassword(auth,email,password)
      if(userCredential.user){
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout>
      <div className="d-flex  align-items-center justify-content-center w-100 mt-4">
        <form className="bg-light p-4" onSubmit={loginHandler}>
          <div className="bg-dark p-2 mt-2 text-light text-center">Sign In</div>

          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              id="email"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              value={password}
              id="password"
              onChange={onChange}
            />
            <span>
              show pass
              <FaEye
                className="ms-2 text-danger"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  hidePassword((prev) => !prev);
                }}
              />{" "}
            </span>
          </div>

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
          <div className="mt-2">
       
            <span>
              {" "}
              Not a User ? <Link to="/signup">Sign Up</Link>{" "}
            </span>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
