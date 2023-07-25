import React from 'react';
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <div className='navbar'>
        <Link to='/' className='text'>Home</Link>
        <Link to='/Student' className='text'>Student</Link>
        <Link to='/Contact' className='text'>Contact US</Link>
    </div>
  )
}