import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import {PokeListPage} from "./pokemonsListPageStyle"
import { Text } from "../../Components/Titles/Text"
import { usePokemonAPI } from "../../Hooks/useRequestData"
import { GlobalStyled } from "../../GlobalStyled"
import GlobalState from "../../contexts/GlobalState"
import { useContext } from "react"
import { PokeContext } from "../../contexts/Contexts"

export default function PokemonsListPage(){
    
    const {pokelist, addToPokedex, pokedex} = useContext(PokeContext)

    const filteredPokelist = () =>
    pokelist.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
        )
    );

    return(
    <GlobalStyled>
        <PokeListPage>
        <Text>Todos Pokémons</Text>
        {filteredPokelist().map((pokemon)=>{
            return <PokemonCard pokemon={pokemon} key={pokemon.url} addToPokedex={addToPokedex}/>
        })}
        </PokeListPage>
    </GlobalStyled>
    )
}