import React, { useContext, useEffect, useState } from "react";
import { Container, PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokeball, CatchButton, DeleteButton, Pokemon, PokemonDetails } from "./pokemonCardStyle";
import pokeball from "../../assets/pngwing 2.png";
import { getTypes } from "../../utils/ReturnPokemonType";
import { usePokemonAPI } from "../../Hooks/useRequestData";
import { getColors } from "../../utils/ReturnCardColor";
import { goToDetailsPage } from "../../Router/coordinator";
import { useNavigate, useLocation } from "react-router-dom";
import { PokeContext } from "../../contexts/Contexts";

export default function PokemonCard(props){
    const navigate = useNavigate();
    const location = useLocation();
    const pokemon = usePokemonAPI({},`/${props.pokemon.name}`)
    const {addToPokedex, removeFromPokedex} = useContext(PokeContext)
    const [type, setType] = useState("")

    useEffect(()=>{
        setType(pokemon.types&&pokemon.types[0].type.name)
    }, [pokemon])
    return(
        <>
        <Container color={getColors(type)}>
            <PokemonNumber >{pokemon.id < 10 ? '#0'+pokemon.id : '#'+pokemon.id}</PokemonNumber>
            <PokemonName >{pokemon.name}</PokemonName>
            <TypesContainer>
                {pokemon.types?.map((poke)=>{
                return <PokemonType src={getTypes(poke.type.name)}/>
                })}
            </TypesContainer>
            
            <Pokeball src={pokeball}/>
            <Pokemon src={pokemon.sprites?.other["official-artwork"].front_default}/>
            {(location.pathname === "/")?(<CatchButton onClick={()=>addToPokedex(pokemon)}>Capturar!</CatchButton>) : (undefined)}
            {(location.pathname.includes("/pokedex")) ? (<DeleteButton onClick={()=>removeFromPokedex(pokemon)}>Excluir</DeleteButton>) : (undefined)}
            <PokemonDetails onClick={()=>goToDetailsPage(navigate,pokemon.id)}>Detalhes</PokemonDetails>
        </Container>
        </>
    )
}