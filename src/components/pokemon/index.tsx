import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PokemonResponse, TGetAllPokemonResponse, TPokemon } from "../../types"

export const Pokemon = (props: PokemonResponse) => {
    console.log(props);
    
    const [pokemon, setPokemon] = useState<TPokemon>();

    useEffect(() => {
        const getPokemon = async () => {
            axios.get(props.url).then((res: AxiosResponse<TPokemon>) => {
                console.log(res.data);
                
                setPokemon(res.data)
            }).catch(e => {
                console.log(e);
            })
        }

        getPokemon()
    }, [])

    return (    
        <Link to={`/${pokemon?.name}`} state={pokemon}>
            {props.name}
            <img src={pokemon?.sprites?.front_default} alt="" />
        </Link>
    )

}