import React from 'react'

import Header1 from './Header1';
import { useForm } from 'react-hook-form';
import Footer from './footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login() {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const navigate=useNavigate()
    function handleFormSubmit(newUser) {
      const { username, password } = newUser;
      fetch(`http://localhost:3000/users?username=${username}&password=${password}`)
        .then(res => res.json())
        .then(userObj => {
          if (userObj.length === 0) {
            setLoginErr({ message: "Username or password invalid" });
          } else {
            console.log(userObj)
            const user=userObj[0]
            console.log(user)
            navigate('/profile',{state:userObj[0]})
           
          }
  
        })
        .catch(err => setLoginErr({ message: "err" }));
    }
  return (
    <div>
      <Header1 />
    <main>
      <div className="row">
        
        <div className="col-8 mt-6">
          <form className="w-75 mx-auto mt-5 p-5 bg-light rounded shadow" onSubmit={handleSubmit(handleFormSubmit)}>
            <h1 style={{
                    color: '#f0a500',
                    fontWeight: '600',
                    textAlign:'center'
                  }}>Login</h1>
            {/* Username */}
            <div className="mb-3">
              <label htmlFor="un" className="form-label">Username</label>
              <input
                type="text"
                id="un"
                className="form-control"
                {...register("username", { required: true })}
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
              />
              {errors.password?.type === 'required' && <p className="text-danger pt-1">*Password required</p>}
            </div>
            {/* Submit Button */}
            <button type="submit" className="btn  mt-3" style={{
                    backgroundColor: '#f0a500',
                    fontWeight: '600',
                  }}>Submit</button>
          </form>
        </div>
        <div className="col-4">
        <img
        src="https://static.vecteezy.com/system/resources/previews/001/406/504/non_2x/help-suppress-violence-against-women-free-vector.jpg"
        alt="Image"
        className="img-fluid rounded shadow-lg img-hover-effect my-5"
        style={{ maxWidth: "100%", height: "300px" }}
      />
           </div>
      </div>
    </main>

    
    
    <Footer />
    </div>
  )
}

export default Login