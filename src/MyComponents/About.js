import React from 'react'

let myStyle = {
    color: "red"
  }

export const About = () => {
    return (
        <div className="text-center my-3">
            <h3>This app is created by using ReactJS</h3>
            <br></br>
            <h4>You can contact me</h4>
            <p><a href={"https://www.linkedin.com/in/tosh-jaiswal-73b031182/"} style={myStyle}>LinkedIn</a></p>
            <p><a href={"https://github.com/Tosh-Jaiswal?tab=repositories"} style={myStyle}>Github</a></p>
            <p><a href={"https://www.facebook.com/profile.php?id=100009117998438"} style={myStyle}>Facebook</a></p>
        </div>
    )
}
