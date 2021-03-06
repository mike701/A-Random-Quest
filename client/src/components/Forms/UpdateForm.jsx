import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { updateComment } from '../../Services/comments';
import { updatePost } from '../../Services/posts';



export function UpdateForm(props) {
  const { post, commentId } = props;
  const [commenting, setCommenting] = useState(post);

  let keys = Object.keys(post);
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
      if (!props.postValue) {
        await updateComment(post.id, commentId, commenting)
      } else {
         await updatePost(post.id, commenting)
      }
      window.location.reload(false);
    } else {
      alert("You need to sign in!");
      nav("/login");
    }
  }

  function CallKeys({...props}) {
    return <>
    {keys.map((key,i) => {
      return <div onChange={(e) => { handleChange(e); }} key={i}>{(key ==="content") &&
        <input autoFocus="autofocus" type="text" name={`${key}`} 
        placeholder={key} value={commenting[key]} onChange={(e) => { handleChange(e) }} style={{ height: "10vh" }} 
      ></input>}</div>
    })}
      </>
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)} onChange={(e)=>{e.preventDefault()}}>
      <CallKeys></CallKeys>
      <button>Submit</button>
    </form>
  )
}
