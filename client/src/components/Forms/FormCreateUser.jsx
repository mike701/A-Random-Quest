import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../Services/users';
import {useForm} from "../../hook/useForm"
import './Forms.css'


export default function FormCreateUser() {
  const modelUser = {
    username: "",
    email: "",
    password: ""
  }
  let nav=useNavigate();
  const { form, handleChange } = useForm(modelUser);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("authToken") == null) {
      await registerUser(form)
      nav("/login");
    } else {
      alert("You are already signed in!");
      nav("/");
    }
  }


  return (
    <form onSubmit={(e) => { handleSubmit(e) }} style={{display:"flex", flexDirection:"column", width:"10vw",position:"relative", left:"45vw",top:"20vh"}}>
      <label>User Name:</label>
      <input name="username" value={form.title} onChange={(e) => { handleChange(e) }}></input>
      <label>Email:</label>
      <input name="email" value={form.content} onChange={(e) => { handleChange(e) }}></input>
      <label>Password:</label>
      <input name="password" value={form.category} onChange={(e) => { handleChange(e) }}></input>
      <button>Submit</button>
    </form>
  )
}
