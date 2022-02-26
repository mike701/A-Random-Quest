import React from 'react'

export default function Home() {
  const handleGuest = (e) => {
    e.preventDefault();
    
  }
  return (
    <div>
      <h1>Home</h1>
      <p>Continue as Guest</p>
      <button onClick={(e)=>{handleGuest(e)}}>guest</button>
    </div>
  )
}
