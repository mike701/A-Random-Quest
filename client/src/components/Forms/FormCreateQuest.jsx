import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../Services/posts'
import './Forms.css'


export default function FormCreateQuest(props) {
  const modelQuest = {
    user_id: props?.currentUser?.id,
    title: "",
    content: "",
    category:""
  }
  let nav=useNavigate();
  const [posting, setPosting]=useState(modelQuest);

  const handleChange = (e) => {
    e.preventDefault();
    const {name, value}=e.target
      setPosting((prevPost) => ({
      ...prevPost,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("authToken") != null) {
      await createPost(posting);
      props.setAdded((prevAdd)=>!prevAdd);
      nav("/Quests");
    } else {
      alert("You need to sign in!");
      nav("/login");
    }
  }


  return (
    <form onSubmit={(e) => { handleSubmit(e) }}>
      <label>Title</label>
      <br></br>
      <input name="title" value={posting.title} onChange={(e) => { handleChange(e) }}></input>
      <br></br>
      <label>Content</label>
      <br></br>
      <input name="content" value={posting.content} onChange={(e) => { handleChange(e) }}></input>
      <br></br>
      <label>Category</label>
      <br></br>
      <input name="category" value={posting.category} onChange={(e) => { handleChange(e) }}></input>
      <br></br>
      <button>Submit</button>
    </form>
  )
}
