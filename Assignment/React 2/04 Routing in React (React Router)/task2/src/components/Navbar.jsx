import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='container-fluid shadow p-3 nav'>
<h1>Trupti Pansuriya</h1>
<div className='navbar-links'>
    <li><a href='/'>Home</a></li>
    <li><a href="*">About</a></li>
    <li><a href="*">Services</a></li>
    <li><a href='Register-here'>Register</a></li>
    

</div>
<a href='Register-here' className='btn btn-lg bg-primary text-white'>sign in</a>

    </div>
  )
}
