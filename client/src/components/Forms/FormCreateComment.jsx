import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createComment } from '../../Services/comments';
import FormCreateUser from './FormCreateUser';

export default function FormCreateComment(props) {
//not needed
  const { currentUser,post_id } = props
const modelQuest = {
  user_id: props?.currentUser?.id,
  title: "",
  content: "",
  category: "",
  upvote:0,
}

let nav=useNavigate();
const [commenting, setCommenting]=useState(modelQuest);

const handleChange = (e) => {
  e.preventDefault();
  const {name, value}=e.target
    setCommenting((prevPost) => ({
    ...prevPost,
    [name]: value
  }))
}

const handleSubmit = async (e) => {
  e.preventDefault();
  if (window.localStorage.getItem("authToken") != null) {
    const res = await createComment(post_id,commenting);
    window.location.reload(false);
  } else {
    alert("You need to sign in!");
    nav("/login");
  }
}


return (
  <form onSubmit={(e) => { handleSubmit(e) }}>
    <input name="title" value={commenting.title} onChange={(e) => { handleChange(e) }}></input>
    <input name="content" value={commenting.content} onChange={(e) => { handleChange(e) }}></input>
    <input name="category" value={commenting.category} onChange={(e) => { handleChange(e) }}></input>
    <button>Submit</button>
  </form>
)
}
