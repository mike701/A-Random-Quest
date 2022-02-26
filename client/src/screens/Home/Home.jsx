import React from 'react'
import { loginUser } from '../../Services/users';

export default function Home(props) {
  const { currentUser } = props;
  const handleGuest = async(e) => {
    e.preventDefault();
    const guest=await loginUser({
      "username": "Guest",
      "password": "Guesting"
    });
    console.log(guest);
    window.location.reload(false);
  }
  return (
    <div>
      <h1>Home</h1>
      {!currentUser && <><p>Continue as Guest</p>
      <button onClick={(e)=>{handleGuest(e)}}>guest</button></>}
    </div>
  )
}
