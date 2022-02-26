import React from 'react'
import Navbar from './Navbar'

export default function Layout(props) {
  return (
    <div style={{overflowY:"scroll", height:"80vh"}}>
      <Navbar {...props}></Navbar>
      {props.children}
    </div>
  )
}
