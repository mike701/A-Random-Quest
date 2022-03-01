import React from 'react'
import './QuestCard.css'
export default function QuestCard(props) {
  return (
    <div>
      <div id="cards">
      {props.children}
      </div>
    </div>
  )
}
