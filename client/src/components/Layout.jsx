import React from 'react'
import Navbar from './Navbar'

export default function Layout(props) {
  console.log(props)
  return (
    <>
      <Navbar {...props}></Navbar>
      {props.children}
    </>
  )
}
