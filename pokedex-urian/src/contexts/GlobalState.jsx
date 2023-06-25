import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/url";
import { PokeContext } from "./Contexts"; 
import { usePokemonAPI } from "../Hooks/useRequestData";

export default function GlobalState(props) {
    const pokeList = usePokemonAPI([],`?limit=151&offset=0`)

    const [pokelist, setPokelist] = useState([]);
    const [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        fetchPokelist();
    }, []);

    const fetchPokelist = async () => {
        try {
            const response = await axios.get(BASE_URL);
            setPokelist(response.data.results);
        } catch (error) {
            console.log("Erro ao buscar lista de pokemons");
            console.log(error.response);
        }
    };

    const addToPokedex = (pokemonToAdd) => {
        console.log(pokemonToAdd)
        const isAlreadyOnPokedex = pokedex.find(
            (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
        );

        if (!isAlreadyOnPokedex) {
            const newPokedex = [...pokedex, pokemonToAdd];
            setPokedex(newPokedex);
        }
       
    };

    const removeFromPokedex = (pokemonToRemove) => {
        const newPokedex = pokedex.filter(
            (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
        );

        setPokedex(newPokedex);
        if(pokedex.length === 1){
            localStorage.removeItem("pokeKey")
        }
    };

    const context = {
        pokelist,
        pokedex,
        addToPokedex,
        removeFromPokedex
    };

    useEffect(()=>{
        setTimeout(()=>{
        localStorage.setItem("pokeKey", JSON.stringify(pokedex))
        }, 2000)
    },[pokedex])

    useEffect(()=>{
        const restoredPokedex = localStorage.getItem("pokeKey");
        if(restoredPokedex){
            setPokedex(JSON.parse(restoredPokedex))
        }
    }, [])

    return (
        <PokeContext.Provider value={context}>
            {props.children}
        </PokeContext.Provider>
    );
}