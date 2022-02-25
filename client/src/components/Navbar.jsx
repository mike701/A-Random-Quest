import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to={"/Quests"}>Quests</Link>
        <Link to={"/Quests/new"}>New-Quests</Link>
        
      </nav>
    </div>
  )
}
