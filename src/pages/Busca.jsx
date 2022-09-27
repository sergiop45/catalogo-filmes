import React from 'react';
import {useState, useEffect } from 'react';
import { useSearchParams} from 'react-router-dom';
import FilmeCard from '../components/FilmeCard';
import '../pages/Home/home.css'

const searchURL = import.meta.env.VITE_SEARCH;
const Key_api = import.meta.env.VITE_API_KEY;


function Busca() {

    const [searchParams] = useSearchParams();
    const [filmes, setFilmes] = useState([]);
    const query = searchParams.get("q");

    async function getMovies(url) {
        
        const res = await fetch(url);
        const data = await res.json();

        setFilmes(data.results);
        
    }

    useEffect(() => {
        let url = searchURL+"?"+Key_api+"&&query="+query;

        getMovies(url);

    }, [query]);

    return(
        
            <div className='container'>
            <h3 className='titulo'>Resultados para: <label className='query-text'>{query}</label> </h3>
            <div className='filmes-container'>
                {filmes.length === 0 && <p>Carregando...</p>}
                {filmes.length > 0 && 
                    filmes.map((filme) => {
                       return <FilmeCard key={filme.id} filme={filme} />
                    })
                }
            </div>
            </div>
        
    );
}

export default Busca;