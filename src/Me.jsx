import React from 'react'
import { Link,useLocation  } from 'react-router-dom'
import { IoArrowBackOutline } from "react-icons/io5";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Footer from './footer';

function Me() {
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState(location.state?.currentUser || {});
  console.log(currentUser); 

  
  const [isEdit,setIsEdit]=useState(false)
  const {register,handleSubmit,setValue}=useForm()
function edit(){
  setIsEdit(true)
  setValue('username',currentUser.username)
  setValue('password',currentUser.password)
  setValue('email',currentUser.email)
  setValue('eme1',currentUser.eme1)
  setValue('eme2',currentUser.eme2)
}
function onSave(newData){
setIsEdit(false)
newData.id=currentUser.id
fetch(`http://localhost:3000/users/${newData.id}`,
  {
    method:"PUT",
    'Content-Type':'application/json',
    body:JSON.stringify(newData)
  }).then(res=>res.json())
  .then(data=>setCurrentUser(data))
  .catch(err=>console.log(err))
}
  
  return (
    <div>
       <header className="bg-light py-3">
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo */}
        
      
        
        <div className="logo-container d-flex align-items-center">
        <div className='logo-container d-flex align-items-center mx-5 rounded'>
        <Link to="/profile">
        <IoArrowBackOutline style={{ width: "40px" }} />
        </Link>
        </div>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxOXX7pGW3gZ11dNDKle2vfwtNie-DiR3gZbVeOq1k0vd8EY4ZQDaqqNE9E3GdXnvrhno&usqp=CAU"
            alt="logo"
            width={75}
            className="mx-2 rounded-circle border border-warning"
          />
          <h1 className="text-warning mb-0" style={{ fontWeight: 'bold' }}>
            SecureShe
          </h1>
          
        </div>

        {/* Navigation */}
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark" style={{ fontWeight: '500' }}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/locations" className="nav-link text-dark" style={{ fontWeight: '500' }}>
                Alert Zones
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-white rounded"
                style={{
                  backgroundColor: '#f0a500',
                  fontWeight: '600',
                }}
              >
                LogOut
              </Link>
            </li>
           
          </ul>
        </nav>
      </div>
    </header>

{
  isEdit===false?
  <main>
<center><h3>Your Profile</h3>
        <div className="card  shadow-sm my-4 p-5 w-50" style={{backgroundColor:'rgb(247, 239, 226)'}}>
          <h4>Personal Information</h4>
          <p><strong>Name: </strong>{currentUser.username} </p>
          <p><strong>Email:</strong> {currentUser.email}</p>
          <p><strong>Emergency Contacts:</strong></p>
          <ul  style={{listStyleType:'none'}}>
            <li>{currentUser.eme1}</li>
            <li>{currentUser.eme2}</li>
          </ul>
          <button
            className="btn btn-danger mx-3 my-4" style={{ fontWeight: '500',color:'white' }} onClick={edit}>
             Edit Details
          </button>
        </div>
        
        </center>
</main>:
   <main>
    <center> 
      <div className="card  shadow-sm my-4 p-5 w-50" style={{backgroundColor:'rgb(247, 239, 226)'}}>
      <h1 className="text-center text-warning mb-5">Edit user</h1>
        <form className='w-50 mx-auto  p-4' onSubmit={handleSubmit(onSave)}>
            <input type="text" {...register('username')} id="" className="form-control mb-3" />
            <input type="text" {...register('password')} id="" className="form-control mb-3" />
            <input type="email" {...register('email')} id="" className="form-control mb-3" />
            <input type="number" {...register('eme1')} id="" className="form-control mb-3" />
            <input type="number" {...register('eme2')} id="" className="form-control mb-3" />
            <button className="btn btn-success d-block mx-auto" type='submit'>Save</button>
        </form>
      </div>
   
    </center>
   </main>



}

  <Footer />
    </div>
  )
}

export default Me