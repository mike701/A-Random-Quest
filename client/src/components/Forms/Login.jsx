import React from 'react'
import { useState } from 'react';
import { useNavigate, useNavigationType } from 'react-router-dom';
import { loginUser } from '../../Services/users';

const loginData={
  username: "",
  password:""
}
export default function Login(props) {
  const { setCurrentUser } = props
  let navigate=useNavigate();
  const [input,setInput]=useState(loginData)
  const handleSubmit = async(e) => {
    e.preventDefault();
    const logged = await loginUser(input);
    setCurrentUser(logged);
    navigate("/")
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
