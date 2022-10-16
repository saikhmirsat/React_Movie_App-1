import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
      <img src="https://i.ibb.co/z8jVWb8/Picsart-22-10-16-16-06-47-247.png" alt="Picsart-22-10-16-16-06-47-247" className='logo'></img>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/bollywood">Bollywood</Link>
      <Link to="/hollywood" >Hollywood</Link>
      <Link to="/login" >Login</Link>
      <Link to="/signup" >Signup</Link>
    </div>
  )
}
