import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
export default function Footer() {
  return (
    <footer style={{ position: "absolute", bottom: "0", height: "4vh", width: "100vw", backgroundColor: "black", color: "white" }}>
      <div style={{ height: "5vh", display: "flex", justifyContent: "space-around" }}><i className="fa fa-brands fa-github"
        onClick={(e) => { e.preventDefault(); window.open("https://github.com/mike701")}}></i>
       <i className="fa fa-brands fa-linkedin"
      onClick={(e) => { e.preventDefault(); window.open("https://www.linkedin.com/in/michaelabebe5/")}}></i></div>
    </footer>
  )
}
