import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {useForm} from 'react-hook-form';
import Header1 from './Header1';
import {useNavigate} from 'react-router-dom';
import Footer from './footer';
import './Home.css'
function Register() {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const [err,setErr]=useState(null)
    const navigate=useNavigate()
    function handleFormSubmit(newUser){
      fetch('http://localhost:3000/users',
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(newUser)
        }).then(res=>{
           if(res.status===201){
            console.log(newUser)
              navigate('/login')
           }else{
              setErr({message:res.message})
           }
        }).catch(err=>setErr(err))

    
    }
  return (
    <div>
<Header1 />
      <main>
  <div className="row">
    <div className="col-md-6 d-flex justify-content-center align-items-center">
    <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggmfi5uDgjmAQnkJXmHp8D0eCOvzVFP-30Q&s"
        alt="Image"
        className="img-fluid rounded shadow-lg img-hover-effect"
        style={{ maxWidth: "100%", height: "500px" }}
      />
    </div>

    <div className="col-md-6 my-5">
      <form className="w-75 mx-auto my-5 p-4 bg-light rounded shadow" onSubmit={handleSubmit(handleFormSubmit)}>
        <h3 className="text-center mb-4 text-warning">Sign Up</h3>

        {/* Username */}
        <div className="mb-3">
          <label htmlFor="un" className="form-label">Username</label>
          <input
            type="text"
            id="un"
            className="form-control"
            {...register("username", { required: true })}
            placeholder="Enter your username"
          />
          {errors.username?.type === 'required' && <p className="text-danger pt-1">*Username required</p>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <label htmlFor="ps" className="form-label">Password</label>
          <input
            type="password"
            id="ps"
            className="form-control"
            {...register("password", { required: true })}
            placeholder="Enter your password"
          />
          {errors.password?.type === 'required' && <p className="text-danger pt-1">*Password required</p>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label" htmlFor="em">Email</label>
          <input
            type="email"
            id="em"
            className="form-control"
            {...register("email", { required: true })}
            placeholder="Enter your email"
          />
          {errors.email?.type === 'required' && <p className="text-danger pt-1">*Email is required</p>}
        </div>

        {/* Emergency mobile number 1 */}
        <div className="mb-3">
          <label htmlFor="ph1" className="form-label">Emergency mobile number 1</label>
          <input
            type="number"
            id="ph1"
            className="form-control"
            {...register("eme1", { required: true })}
            placeholder="Enter emergency contact 1"
          />
          {errors.eme1?.type === 'required' && <p className="text-danger pt-1">*Emergency contact 1 required</p>}
        </div>

        {/* Emergency mobile number 2 */}
        <div className="mb-3">
          <label htmlFor="ph2" className="form-label">Emergency mobile number 2</label>
          <input
            type="number"
            id="ph2"
            className="form-control"
            {...register("eme2", { required: true })}
            placeholder="Enter emergency contact 2"
          />
          {errors.eme2?.type === 'required' && <p className="text-danger pt-1">*Emergency contact 2 required</p>}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="btn  w-100 py-2" style={{
                    backgroundColor: '#f0a500',
                    fontWeight: '600',
                  }}>Submit</button>
        </div>
      </form>
    </div>
  </div>
</main>


      <Footer />
    </div>
  )
}

export default Register