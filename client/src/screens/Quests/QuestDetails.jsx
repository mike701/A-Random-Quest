import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllComments } from '../../Services/comments';

export default function QuestDetails(props) {
  const { quests, users } = props
  const [details, setDetails] = useState();
  const [comments, setComments] = useState();
  const [toggleComments, setToggleComments]=useState(false);
  
  let id = useParams()
  
  //filter all posts from above with the id from the url compared to the posts id
  useEffect(() => {
    if (quests) setDetails(quests.filter(u => u.id == id.post_id)); 
  }, [quests])

  // Find all Comments based on the post id and then set state for them
  useEffect(() => {
    if (details) {
    const fetchComments = async() => {
        const res = await getAllComments(details[0].id);
        setComments(res);
    }
      fetchComments();
      console.log(comments)
    }
  },[details])

  return (
    <div>
      QuestDetails
      {details && details.map((r) => {
        return <div key={r.id}>
          <h2>Title:{r.title}</h2>
          <h2>Category:{r.category}</h2>
          <p>Content:{r.content}</p>
          <h2>UserName:{users.filter((user) => Number(user.id) == Number(r.user_id)).map(u => u.username)}</h2>
          <div onClick={(e)=>{e.preventDefault();setToggleComments((prevToggle)=>!prevToggle)}}>Comments</div>
          {comments && toggleComments && comments.map((comment) => {
            return <div key={comment.id}>
              <h3>{comment.content}</h3>
              <p>{comment.user.username}</p>
            </div>
          })}
          </div>
      })}
    </div>
  )
}
