import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav>
      <ul>
        <Link to="/personajes">Tabla Personajes</Link>
        <Link to="/">Formulario 1</Link>
      </ul>
    </nav>
  )
}

export default Header
