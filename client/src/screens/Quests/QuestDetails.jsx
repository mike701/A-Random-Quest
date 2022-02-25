import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function QuestDetails(props) {
  const { quests, users } = props
  const [details, setDetails]=useState();
  let id =useParams()
  
  useEffect(() => {
    if (quests) setDetails(quests.filter(u => u.id == id.post_id)); 
  }, [quests])
  

  return (
    <div>
      QuestDetails
      {details && details.map((r) => {
        return <div key={r.id}>
          <h2>Title:{r.title}</h2>
          <h2>Category:{r.category}</h2>
          <p>Content:{r.content}</p>
          <h2>UserName:{users.filter((user)=>Number(user.id)==Number(r.user_id)).map(u=>u.username)}</h2>
          </div>
      })}
    </div>
  )
}
