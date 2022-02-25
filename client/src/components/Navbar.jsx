import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const { currentUser,setCurrentUser } = props;

  const handleLogout = () =>{
    window.localStorage.removeItem("authToken");
    setCurrentUser(null);
}

  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
        <p>Welcome {currentUser && currentUser.username}</p>
      <nav style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <Link to={"/Quests"}>Quests</Link>
        <Link to={"/Quests/new"}>New-Quests</Link>
        <Link to={"/login"}>login</Link>
      </nav>
      {currentUser && <div onClick={handleLogout}><p>Logout</p></div>}
    </div>
  )
}
