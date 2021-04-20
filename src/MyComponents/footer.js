import React from 'react'

let myStyle = {
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  color: "white",
  height: "50px"
}

export default function footer() {
    return (
        <footer className = "bg-dark text-light" style = {myStyle}>
           <p className = "text-center my-3">Built By: Tosh Jaiswal</p>
        </footer>
    )
}
