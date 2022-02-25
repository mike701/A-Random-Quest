import React from 'react'

export default function Info(props) {
  console.log(props)
  const { currentUser } = props;

  
  return (
    <div>
      {currentUser && <>
        <h1>Username:{currentUser.username}</h1>
        <h2>Email:{currentUser.email}</h2>
      </>
      }
    </div>
  )
}
