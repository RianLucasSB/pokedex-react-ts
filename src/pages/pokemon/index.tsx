import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

type TPokemon = {
    sprites: {
        back_default: ''
    }
}

export const Pokemon = () => {
    const {pokemonName} = useParams();
    const [pokemon, setPokemon] = useState<TPokemon>();

    useEffect(()=> {
        const getPokemon = async () => {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((res) => {
                setPokemon(res.data)
            })
        }

        getPokemon();
        console.log('useEffect');
        

    }, [])
    

    return(
        <div>
           <img src={pokemon?.sprites.back_default} alt="" /> 
        </div>
    )
}