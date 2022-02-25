import React from 'react'
import { Link } from 'react-router-dom';

export default function Quests(props) {
  const { quests, users } = props;
  
  return (
    <div>
      <h1>Quests</h1>
      {quests && users && quests.map((r) => {
        return <div key={r.id}>
          <h2>Title:{r.title}</h2>
          <h2>Category:{r.category}</h2>
          <p>Content:{r.content}</p>
          <h2>UserName:{users.filter((user)=>Number(user.id)==Number(r.user_id)).map(u=>u.username)}</h2>
          <Link to={`/Quests/${r.id}`}>Details</Link>
          </div>
      })}
    </div>
  )
}
