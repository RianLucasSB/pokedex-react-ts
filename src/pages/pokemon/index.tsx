import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TPokemon } from '../../types';



export const Pokemon = () => {
    const location = useLocation();
    const pokemon: TPokemon  = location.state;

    console.log(pokemon);
    
    return (
        <div>
            <img src={pokemon?.sprites?.front_default} alt="" />
        </div>
)
}