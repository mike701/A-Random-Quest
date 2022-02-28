import React, { useState } from 'react'
import { Link, NavLink, useNavigate} from 'react-router-dom'
import './nav.css'

export default function Navbar(props) {
  const { currentUser, setCurrentUser } = props;
  let onSide = false;
  const [hamburger, setHamburger] = useState(false);
  let nav = useNavigate();
  
  if(window.location.href.includes("three"))  onSide=!onSide
  const handleLogout = () =>{
    window.localStorage.removeItem("authToken");
    setCurrentUser(null);
    nav("/");
}
  const handleHamburger = (e) => {
    e.preventDefault();
    setHamburger((prev)=>!prev)
}
  return (
    <div id={onSide ? "transposed" : "transposable"} >
      <button onClick={(e)=>handleHamburger(e)}>Menu</button>
        <p >Welcome {currentUser && currentUser.username}</p>
      <nav className='navbarNav' id={hamburger ? "open" : "close"}>
        <NavLink to={"/Quests"} style={{ padding: "20px" }}>Quests</NavLink>
        <NavLink to={"/"} style={{padding:"20px"}}>Home</NavLink>
        {currentUser && <Link to={"/Quests/new"} style={{ padding: "20px" }}>New-Quests</Link>}
        {currentUser && <Link to={"/userInfo"} style={{padding:"20px"}}>UserInformation</Link>}
        {!currentUser && <NavLink to={"/login"} style={{ padding: "20px" }}>login</NavLink>}
        {!currentUser && <NavLink to={"/signup"} style={{ padding: "20px" }}>Sign-Up</NavLink>}
        {/*  Source for a User Controlled view from https://codesandbox.io/s/vkgi6?file=/src/Player.js for below route */}
        <NavLink to={"/three"} style={{ padding: "20px" }}>Three</NavLink>
      </nav>
      {currentUser && <div onClick={handleLogout}><p>Logout</p></div>}
    </div>
  )
}
