import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div
      style={{
        paddingTop : "100px",
        textAlign : "center",

      }}
    >
      <h4 style={{
        fontSize : "2rem"
      }}>You seem to be lost</h4>
      <Link to="/">
      <p>Go back to home page</p></Link>
    </div>
  )
}

export default ErrorPage