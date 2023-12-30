import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Link, Navigate, useNavigate } from "react-router-dom";
const Signup = () => {
  const [showpass, setShowpass] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();

  const  onChange=()=>{

  }
  return (
    <Layout>
      <div className="d-flex align-items-center justify-content-center w-100 mt-4">
        <form>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value={name} id="name" onChange={onChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" value={email} id="email" onChange={onChange}  />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} id="password" onChange={onChange}  />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <div>
          <h6>Login With Google </h6>
         <span>  Already User <Link to={'/singin'}>Login</Link> </span> 
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
