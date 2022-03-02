import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import FormCreateComment from '../../components/Forms/FormCreateComment';
import { getAllComments } from '../../Services/comments';
import {UpdateForm} from '../../components/Forms/UpdateForm';
import '../../components/Comments/Card.css'


export default function QuestDetails(props) {
  const { quests, users, currentUser } = props
  // console.log(currentUser)
  const [details, setDetails] = useState();
  const [comments, setComments] = useState();
  const [toggleComments, setToggleComments]=useState(false);
  const [toggleComment, setToggleComment] = useState(false);
  const [update, setUpdate] = useState(false);
  const[commentValue,setCommentValue]=useState(null);
  let id = useParams()
  
  //filter all posts from above with the id from the url compared to the posts id
  useEffect(() => {
    if (quests) setDetails(quests.filter(u => Number(u.id) === Number(id.post_id))); 
  }, [quests,id.post_id])

  // Find all Comments based on the post id and then set state for them
  useEffect(() => {
    if (details) {
    const fetchComments = async() => {
        const res = await getAllComments(details[0].id);
        setComments(res);
    }
      fetchComments();
    }
  },[details])

  return (
    <div>
      <h1>QuestDetails</h1>
      {details && details.map((r) => {
        return <div key={r.id}>
          <h2>Title:{r.title}</h2>
          <h2>Category:{r.category}</h2>
          <p>Content:{r.content}</p>
          <h2>UserName:{users.filter((user) => Number(user.id) === Number(r.user_id)).map(u => u.username)}</h2>
          <div style={{display:"flex",flexDirection:"row", justifyContent:"center"}}>
            <div onClick={(e) => { e.preventDefault(); setToggleComments((prevToggle) => !prevToggle) }}><button>Comments</button></div>
          <button onClick={(e) => {
            e.preventDefault();
            setToggleComment((prev)=>!prev)
          }}>Add Comment</button>
         </div>
          {toggleComment && <FormCreateComment currrentUser={currentUser} post_id={r.id}></FormCreateComment>}
          {comments && toggleComments && comments.map((comment) => {
            return <div key={comment.id} className="commentCard">
              <h3>comment:{comment.content}</h3>
              <p>commentor:{comment.user.username}</p>
              {currentUser && Number(currentUser.id) === Number(r.user_id) && <button onClick={(e) => {
            e.preventDefault();
            setUpdate((prev) => !prev);
            setCommentValue(r=comment.id)
          }}>Update</button>}
          {update && commentValue===comment.id && <UpdateForm post={comment} commentId={comment.id} currentUser={currentUser}></UpdateForm>}
            </div>
          })}
          
          </div>
      })}
    </div>
  )
}
