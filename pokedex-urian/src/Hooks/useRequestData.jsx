import axios from "axios";
import { useEffect, useState } from "react";
import {BASE_URL} from "../constants/url"

export const usePokemonAPI = (initialState,path) => {
    const [pokemon, setPokemon] = useState(initialState);

    const getData = ()=>{
        axios.get(`${BASE_URL}${path}`)
        .then((response)=>{
            
            setPokemon(response.data.results||response.data)})
            
        .catch((error)=>{
            console.log(error.response)
        })
        
    };
    useEffect(()=>{
        getData()
    }, [])
    return pokemon
}