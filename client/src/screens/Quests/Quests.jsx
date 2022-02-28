import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {UpdateForm} from '../../components/Forms/UpdateForm';
import { deletePost } from '../../Services/posts';

export default function Quests(props) {
  const { quests, users,setQuests,currentUser } = props;
  const [update, setUpdate] = useState(false);
  const[postValue,setPostValue]=useState(null);
  const handleDelete = async (e,id) => {
    e.preventDefault();
    const res = await deletePost(id);
    console.log(res);
    setQuests(quests.filter((quest)=>quest.id===id))
  }


  const handleFriend = (e,newFriend) => {
    e.preventDefault();
    console.log(newFriend);
    
  }

  return (
    <div >
      <h1>Quests</h1>
      {quests && users && quests.map((r) => {
        return <div key={r.id}>
          <h2>Title:{r.title}</h2>
          <h2>Category:{r.category}</h2>
          <p>Content:{r.content}</p>
          {users && <div style={{ display: "flex", flexDirection: "row", justifyContent:"center"}}>
            <h2>UserName:{users?.filter((user) => Number(user.id) === Number(r.user_id)).map(u => u.username)}</h2>
            <button onClick={(e) => { handleFriend(e, r.id); }}>Follow</button>
          </div>}
          {r && r.id && <Link to={`/Quests/${r.id}`}><button>Details</button></Link>}
          {currentUser && Number(currentUser.id) === Number(r.user_id) && <button onClick={(e) => { handleDelete(e, r.id) }}>Delete</button>}
          {currentUser && Number(currentUser.id) === Number(r.user_id) && <button onClick={(e) => {
            setUpdate((prev) => !prev);
            console.log(update)
            setPostValue(r.id)
          }}>Update</button>}
          {update && Number(postValue)==Number(r.id) && <UpdateForm post={r} postValue={r.id}></UpdateForm>}
          </div>
      })}
    </div>
  )
}
