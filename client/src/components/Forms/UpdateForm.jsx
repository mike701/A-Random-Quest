import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { updateComment } from '../../Services/comments';




export function UpdateForm(props) {
  const { post, commentId } = props;
  const [commenting, setCommenting]=useState(post);
  let keys = Object.keys(post);
  console.log(post, post[keys[0]], keys);
  let nav = useNavigate();

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
      console.log(commenting)
      const res = await updateComment(post.id,commentId,commenting)
      window.location.reload(false);
    } else {
      alert("You need to sign in!");
      nav("/login");
    }
  }

  function CallKeys() {
    return <>
    {keys.map((key,i) => {
      if (key !== 'post_id' && key!=="id" && key!=="upvote" && key!=="user" && key !=='user_id' && key !=='created_at' && key !=='updated_at') return <textarea name={`${key}`} placeholder={key} value={commenting[key]} key={i} onChange={(e)=>{handleChange(e);}} style={{height:"10vh"}}></textarea>
    })}
      </>
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
      <CallKeys></CallKeys>
      <button>Submit</button>
    </form>
  )
}
