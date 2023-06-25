import { Text } from "../../Components/Titles/Text"
import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import { PokedexPageStyle } from "./pokedexPageStyle"
import { usePokemonAPI } from "../../Hooks/useRequestData"
import { useContext } from "react"
import { PokeContext } from "../../contexts/Contexts"

export default function PokedexPage(){
    const context = useContext(PokeContext);

    const {pokedex} = useContext(PokeContext);
    
    return(
        <PokedexPageStyle>
            <Text>Meus Pokémons</Text>
            {pokedex.map((pokemon)=>{
            return <PokemonCard pokemon={pokemon} key={pokemon.url} />
            })}
        </PokedexPageStyle>
    )
}