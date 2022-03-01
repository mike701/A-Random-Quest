import React from 'react'
import { useNavigate } from 'react-router-dom';
import { createComment } from '../../Services/comments';
import { useForm } from '../../hook/useForm';
import './Forms.css'
export default function FormCreateComment(props) {

const {post_id } = props
const modelQuest = {
  user_id: props?.currentUser?.id,
  title: "",
  content: "",
  category: "",
  upvote:0,
}

let nav=useNavigate();
const { form,handleChange } = useForm(modelQuest);

 

const handleSubmit = async (e) => {
  e.preventDefault();
  if (window.localStorage.getItem("authToken") != null) {
    await createComment(post_id,form);
    window.location.reload(false);
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
