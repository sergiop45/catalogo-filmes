import React from 'react';
import {Link} from 'react-router-dom';
import {BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        
        <h1><Link to="/"><BiCameraMovie /> Inicio</Link></h1>
        
        <form action="">
            <input type='text' placeholder='Buscar Filme' />
            <button type='submit'><BiSearchAlt2 /></button>
        </form>

      </nav>
  );
}

export default Navbar;