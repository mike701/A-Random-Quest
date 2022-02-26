import React from 'react'
import { useState } from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';
import { loginUser } from '../../Services/users';
import './Forms.css'


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
      <br></br>
      <label>Username</label>
      <br></br>
      <input name="username" placeholder="username" onChange={(e) => { handleChange(e); }} />
      <br></br>
      <label>Password</label>
      <br></br>
      <input name="password" placeholder="password" onChange={(e) => { handleChange(e); }} />
      <br></br>
      <button>Submit</button>
    </form>
  )
}
