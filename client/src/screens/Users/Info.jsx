import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getOneUserFriends, getOneUserPosts } from '../../Services/users';

export default function Info(props) {
  const { currentUser } = props;
  const [posts, setPosts] = useState();
  const [toggle, setToggle] = useState(false);
  const [postsToggle, setPostsToggle]=useState(false);
  useEffect(() => {
    const fetchUserPosts = async () => {
      if (currentUser?.id) {
        const res = await getOneUserPosts(currentUser.id);
        // const resp = await getOneUserPosts(currentUser.id);
        const resp = await getOneUserFriends(currentUser.id);
        // console.log("comments:",resp);
        console.log(resp);
        setPosts(res);
        setToggle(true);
      }
    }
    fetchUserPosts();
  }, [currentUser])
  

  return (
    <div>
      {currentUser && toggle && posts &&
        <>
        <h1>Username:{currentUser.username}</h1>
        <h2>Email:{currentUser.email}</h2>
        <button onClick={(e) => {
          e.preventDefault();
          setPostsToggle((prevToggle) => !prevToggle);
        }}>Click to see Posts</button>
        {postsToggle && posts.map((post) => {
          return <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.category}</p>
          </div>
        })}
        </>
      }
    </div>
  )
}
