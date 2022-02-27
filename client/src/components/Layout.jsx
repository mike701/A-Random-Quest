import React from 'react'
import Navbar from './Navbar'
import "./Layout.css"
export default function Layout(props) {
  return (
    <div id="layout" >
      <Navbar {...props}></Navbar>
      {props.children}
    </div>
  )
}
