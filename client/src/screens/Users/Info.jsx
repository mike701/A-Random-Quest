import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllUsers, getOneUserFriends, getOneUserPosts } from '../../Services/users';
import '../../components/Comments/Card.css'
export default function Info(props) {
  const [users,setUsers]=useState();
  useEffect(() => {
    const fetchUsers = async() => {  
      const user = await getAllUsers();
      setUsers(user);
    }
    fetchUsers();
  }, [])

  const { currentUser } = props;
  const [posts, setPosts] = useState();
  const [toggle, setToggle] = useState(false);
  const [postsToggle, setPostsToggle] = useState(false);
  const [following, setFollowing] = useState();
  const set=new Set()


  useEffect(() => {
    const fetchUserPosts = async () => {
      if (currentUser?.id) {
        const res = await getOneUserPosts(currentUser.id);
        const resp = await getOneUserFriends(currentUser.id);
        setPosts(res);
        setToggle(true);
        resp.friends?.map((follow) => {
          set.add(follow.user_id);
          return null;
        })
        setFollowing([...set])
      }
    }
    fetchUserPosts();
  })
  

  return <div>
    {currentUser && toggle && posts &&
      <>
        <h1>Username:{currentUser.username}</h1>
        <h2>Email:{currentUser.email}</h2>
        <button onClick={(e) => {
          e.preventDefault();
          setPostsToggle((prevToggle) => !prevToggle);
        }}>Click to Toggle Posts</button>
        {postsToggle && posts.map((post) => {
          return <div key={post.id} className="commentCard">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.category}</p>
          </div>})}
      {users && <div>
        <h1>Following</h1>
        {following?.map((follow,i) => {
         return <div key={i}>
          <h1>{users[follow-1].username}</h1>
          </div>
        })}</div>
        }
      </>}
    </div>
}
