import React from 'react'
import { Link } from 'react-router-dom'

import '../sass/styles.sass'

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className='navbar-link' to="/"> Home </Link>
      <Link className='navbar-link' to="/about"> Sobre </Link>
      <Link className='navbar-link' to="/books"> Livros </Link>
    </div>
  )
}
