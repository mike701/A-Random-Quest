import React from 'react'
import { Routes,Route } from 'react-router-dom'
import QuestCreate from './QuestCreate'
import QuestDetails from './QuestDetails'
import Quests from './Quests'
import { useState } from 'react'
import { useEffect } from 'react'
// import { Link } from 'react-router-dom';
import { getAllPosts } from '../../Services/posts'
import { getAllUsers } from '../../Services/users';



export default function QuestsContainer(props) {
  const { currentUser} = props;
  const [quests, setQuests] = useState();
  const [users, setUsers] = useState();
  const [added, setAdded] = useState(false);
  
  useEffect(() => {
    const fetchQuests = async() => {
      const res = await getAllPosts();
      const user = await getAllUsers();
      setQuests(res);
      setUsers(user);
    }
    fetchQuests();
  }, [added])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Quests quests={quests} setQuests={setQuests} currentUser={currentUser} users={users}></Quests>}
        />
        <Route path="/:post_id" element={<QuestDetails quests={quests}  users={users}></QuestDetails>} />
        <Route path="/new" element={<QuestCreate quests={quests} users={users} currentUser={currentUser} setAdded={setAdded}></QuestCreate>} />
      </Routes>
    </div>
  )
}
