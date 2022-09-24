import React from 'react'
import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa';
import './filmecard.css'


const imgURL = import.meta.env.VITE_IMAGE;

const FilmeCard = ({filme, showLink = true}) => {
   
  return (
    <div className='card'>
        <img src={imgURL+filme.poster_path} alt="Capa do filme" />
        <h2>{filme.title}</h2>
        <p>
            <FaStar /> {filme.vote_average}
        </p>
        {showLink && <Link to={"/filme/"+filme.id}>Detalhes</Link>}
    </div>
  )
}

export default FilmeCard;