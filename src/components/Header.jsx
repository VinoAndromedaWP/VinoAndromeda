import * as React from "react";
import { Link } from "react-router-dom";
import './Header.css'

export default function Header(){
    return (
      <header>
        <Link to='/'>
        <img className='header-logo' src='../78f574d7-54f2-4931-b6db-a2d50db50f6f.jpeg' alt="Vino andromeda Logo"/>
        </Link>
        <nav>
          <ul>

            <li><h1><Link to='/about' >Nosotros</Link ></h1></li>
            <li><Link to={'/'}>Productos</Link></li>
            <li><Link to={'/contact'}>Contactenos</Link></li> 

          </ul>
        </nav>
      </header>
    )
  }