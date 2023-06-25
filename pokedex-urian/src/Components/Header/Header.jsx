import React, { useContext, useState } from "react";
import { BackToList, Container, DeletePokemon, Logo, PokedexButton } from "./headerStyle";
import logo from "../../assets/LogoPokemon.svg"
import { createGlobalStyle } from "styled-components";
import { goToPokedexPage, goToPokemonListPage, goToDetailsPage } from "../../Router/coordinator";
import { useNavigate, useLocation } from "react-router-dom";
import { PokeContext } from "../../contexts/Contexts";
import { usePokemonAPI } from "../../Hooks/useRequestData";

export default function Header(){
    const navigate = useNavigate();
    const location = useLocation();
    const {addToPokedex, removeFromPokedex} = useContext(PokeContext)
    const pokemon = usePokemonAPI({},`/${location.pathname.split("/")[2]}`)

    return(
        
        <Container>
            {(location.pathname === "/pokedex" || location.pathname.includes("/details")) ? (<BackToList onClick={()=>goToPokemonListPage(navigate)}>{"< "}Todos Pokémons</BackToList>) : (undefined)}
            <Logo src={logo} alt="logo"/>
            {(location.pathname === "/") ? (<PokedexButton onClick={()=>goToPokedexPage(navigate)}>Pokédex</PokedexButton>) : (undefined)}
            {(location.pathname.includes("/details")) ? (<DeletePokemon onClick={()=>removeFromPokedex(pokemon)}>Excluir da Pokédex</DeletePokemon>) : (undefined)}
        </Container>
    )
}