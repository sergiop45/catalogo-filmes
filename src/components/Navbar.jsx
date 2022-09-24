import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi';
import './navbar.css';
import { useState } from 'react';

const Navbar = () => {

  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(!search) return

    navigate("/busca?q="+search);
    setSearch("");
  }

  return (
    <nav className='navbar'>
        
        <h1><Link to="/"><BiCameraMovie /> Inicio</Link></h1>
        
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Buscar Filme' onChange={(e) => setSearch(e.target.value)} value={search} />
            <button type='submit'><BiSearchAlt2 /></button>
        </form>

      </nav>
  );
}

export default Navbar;