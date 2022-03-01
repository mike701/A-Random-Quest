import React from 'react'
import { useNavigate } from 'react-router-dom'
import { createPost } from '../../Services/posts'
import { useForm } from '../../hook/useForm';
import './Forms.css'


export default function FormCreateQuest(props) {
  const modelQuest = {
    user_id: props?.currentUser?.id,
    title: "",
    content: "",
    category:""
  }
  let nav=useNavigate();
  const { form,handleChange } = useForm(modelQuest);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.localStorage.getItem("authToken") != null) {
      await createPost(form);
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
      <input name="title" value={form.title} onChange={(e) => { handleChange(e) }}></input>
      <br></br>
      <label>Content</label>
      <br></br>
      <input name="content" value={form.content} onChange={(e) => { handleChange(e) }}></input>
      <br></br>
      <label>Category</label>
      <br></br>
      <input name="category" value={form.category} onChange={(e) => { handleChange(e) }}></input>
      <br></br>
      <button>Submit</button>
    </form>
  )
}
