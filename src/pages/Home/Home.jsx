import React from 'react';
import {useState, useEffect } from 'react';
import FilmeCard from '../../components/FilmeCard';
import '../filmeGrid.css'

const filmesURL = import.meta.env.VITE_API;
const Key_api = import.meta.env.VITE_API_KEY;

function Home() {
    
    const [TopFilmes, setTopFilmes] = useState([]);

    async function getMovies(url) {
        
        const res = await fetch(url);
        const data = await res.json();

        setTopFilmes(data.results);
        console.log(data)
    }

    useEffect(() => {

        getMovies(filmesURL+"top_rated?"+Key_api);

    }, [])

    return(
        <div className='container'>
            <h1 className='titulo'>Melhores titulos: </h1>
            <div className='filmes-container'>
                {
                    TopFilmes.map((filme) => <FilmeCard key={filme.id} filme={filme}/>
                    )
                }
            </div>
        </div>
    );
}

export default Home;