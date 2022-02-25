import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar(props) {
  const { currentUser,setCurrentUser } = props;

  const handleLogout = () =>{
    window.localStorage.removeItem("authToken");
    setCurrentUser(null);
}

  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-around"}}>
        <p>Welcome {currentUser && currentUser.username}</p>
      <nav style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <NavLink to={"/Quests"} style={{padding:"20px"}}>Quests</NavLink>
        {currentUser && <Link to={"/Quests/new"} style={{padding:"20px"}}>New-Quests</Link>}
        {!currentUser && <NavLink to={"/login"} style={{ padding: "20px" }}>login</NavLink>}
      </nav>
      {currentUser && <div onClick={handleLogout}><p>Logout</p></div>}
    </div>
  )
}
