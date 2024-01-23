import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

function Navbar() {
  return (
   <>

   <div className="Navbar">
   <nav>
    <Link to="/" >Dashboard</Link>
   <ul>
    <li>
      <Link to="/Home">Home</Link>
      </li>
    <li>
      <Link to="/About">About</Link>
      </li>
    <li>
      <Link to="/News">News</Link>
      </li>
    <li>
      <Link to="/Contact">Contact</Link>
      </li>
   
  </ul>
  </nav>
  </div>

   </>
  )
}

export default Navbar