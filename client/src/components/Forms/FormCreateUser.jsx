import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../Services/users';


export default function FormCreateUser() {
  const modelUser = {
    username: "",
    email: "",
    password: "",
    friend:[]
  }
  let nav=useNavigate();
  const [newUser, setNewUser]=useState(modelUser);

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value}=e.target
      setNewUser((prevPost) => ({
      ...prevPost,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("authToken") == null) {
      await registerUser(newUser)
      nav("/login");
    } else {
      alert("You are already signed in!");
      nav("/");
    }
  }


  return (
    <form onSubmit={(e) => { handleSubmit(e) }} style={{display:"flex", flexDirection:"column", width:"10vw",position:"relative", left:"45vw",top:"20vh"}}>
      <label>User Name:</label>
      <input name="username" value={newUser.title} onChange={(e) => { handleChange(e) }}></input>
      <label>Email:</label>
      <input name="email" value={newUser.content} onChange={(e) => { handleChange(e) }}></input>
      <label>Password:</label>
      <input name="password" value={newUser.category} onChange={(e) => { handleChange(e) }}></input>
      <button>Submit</button>
    </form>
  )
}
