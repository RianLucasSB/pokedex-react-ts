import axios, { AxiosResponse } from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../../components/header"
import { Pokemon } from "../../components/pokemon"
import { PokemonResponse, TGetAllPokemonResponse, TPokemon } from "../../types"

export const Home = () => {

    const [pokemon, setPokemon] = useState<PokemonResponse[]>();

    useEffect(() => {
        const getAllPokemons = async () => {
            axios.get('https://pokeapi.co/api/v2/pokemon?').then((res: AxiosResponse<TGetAllPokemonResponse>) => {
                console.log(res.data);
                
                setPokemon(res.data.results)
            }).catch(e => {
                console.log(e);
            })
        }

        getAllPokemons()
    }, [])

    return (
        <>
            <Header />
            <ul>
                {pokemon?.map((pok) => (
                    <li>
                        <Pokemon 
                            name={pok.name}
                            url={pok.url}
                        />
                    </li>
                )
                )}
            </ul>

        </>
    )
}