import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsGraphUp, BsWallet2, 
    BsHourglassSplit, 
    BsFillFileEarmarkTextFill } from 'react-icons/bs';
import './filme.css';   
import FilmeCard from '../../components/FilmeCard';
import {FaStar} from 'react-icons/fa';

const filmesURL = import.meta.env.VITE_API;
const Key_api = import.meta.env.VITE_API_KEY;
const imgURL = import.meta.env.VITE_IMAGE;

function Filme() {

    const {id} = useParams();
    const [filme, setFilme] = useState(null);
    
    async function getFilme(url) {

        const res = await fetch(url);
        const data = await res.json();

        setFilme(data);
        console.log(data)
    }

    useEffect(() => {
        const filmeURL = filmesURL + id + "?" + Key_api;

        getFilme(filmeURL);
    }, []);

    function formatoMoeda(number) {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
    }
   
    return(
        <div className='filme'>
            {filme && (
                <>
                <div className='card'>
                <img src={imgURL+filme.poster_path} alt="Capa do filme" />
                <h2>{filme.title}</h2>
                <p>
                     <FaStar /> {filme.vote_average}
                </p>
                </div>
                
                <p className='tagline'>{filme.tagline}</p>
                
                <div className='info'>
                    <h3><BsWallet2 /> Orçamento</h3>
                    <p>{formatoMoeda(filme.budget)}</p>
                </div>

                <div className='info'>
                    <h3><BsGraphUp /> Faturamento</h3>
                    <p>{formatoMoeda(filme.revenue)}</p>
                </div>

                <div className='info'>
                    <h3><BsHourglassSplit /> Duração</h3>
                    <p>{filme.runtime} minutos</p>
                </div>

                
                <div className='info-description'>
                    <h3><BsFillFileEarmarkTextFill /> Descrição</h3>
                    <p>{filme.overview}</p>
                </div>
                </>
            )}
        </div>
    );
}

export default Filme;