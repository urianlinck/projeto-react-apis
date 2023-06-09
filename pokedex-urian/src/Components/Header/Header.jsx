import React from "react";
import { Container, Logo, PokedexButton } from "./headerStyle";
import logo from "../../assets/LogoPokemon.svg"
import { createGlobalStyle } from "styled-components";
import PokedexPage from "../../Pages/PokedexPage/PokedexPage";


export default function Header(){
    return(
        <Container>
            <Logo src={logo} alt="logo"/>
            <PokedexButton>Pokédex</PokedexButton>
        </Container>
    )
}