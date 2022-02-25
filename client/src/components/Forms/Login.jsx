import React from 'react'
import { useState } from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';
import { loginUser } from '../../Services/users';


export default function Login(props) {
  const { setCurrentUser,currentUser,input,setInput,setLogging } = props
  let navigate=useNavigate();
 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLogging((prevlog)=>!prevlog);
    navigate("/");
  }

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value}=e.target
      setInput((prevInput) => ({
      ...prevInput,
      [name]: value
    }))
  }
  return (
    <form onSubmit={(e) => { handleSubmit(e); }}>
      <input name="username"  placeholder="username" onChange={(e) => { handleChange(e); }}/>
      <input name="password"  placeholder="password" onChange={(e) => { handleChange(e); }} />
      <button>Submit</button>
    </form>
  )
}
