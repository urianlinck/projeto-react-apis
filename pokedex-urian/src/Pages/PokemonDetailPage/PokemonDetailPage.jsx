import { Text } from "../../Components/Titles/Text"
import pokeball from "../../assets/pngwing 2.png";
import { usePokemonAPI } from "../../Hooks/useRequestData"
import { Container, PText, Move1, Move2, Move3, Move4, MovesBox, PokeBack, PokeDetailPage, PokeFace, PokeName, PokeNumber, PokeType, Pokeball, PokemonImage, StatsBox, StatsInfo, TitleDetails, TitleMoves, TypesContainer } from "./pokemonDetailPageStyle"
import { useNavigate, useParams } from "react-router-dom";
import { getTypes } from "../../utils/ReturnPokemonType";
import { useEffect, useState } from "react";
import { getColors } from "../../utils/ReturnCardColor";
import { Progress } from '@chakra-ui/react'


export default function PokemonsDetailPage(){
    const navigate = useNavigate();
    const params = useParams()  
    const details = usePokemonAPI({},`/${params.id}`)

    const [poke, setPoke] = useState("")
    useEffect(()=>{
        setPoke(details)
    }, [])

    return(
    <PokeDetailPage>
        <Text>Detalhes</Text>
        <Container color={getColors(poke)}>
            <TitleDetails>
                <PokeNumber>{details.id < 10 ? '#0'+details.id : '#'+details.id}</PokeNumber>
                <PokeName>{details.name}</PokeName>
                <TypesContainer>
                {details.types?.map((pokemon)=>{
                return <PokeType src={getTypes(pokemon.type.name)}/>
                })}
                </TypesContainer>
            </TitleDetails>
            <Pokeball src={pokeball}/>
            <PokemonImage src={details.sprites?.other["official-artwork"].front_default}/>
            <PokeFace src={details.sprites?.front_default}></PokeFace>
            <PokeBack src={details.sprites?.back_default}></PokeBack>
            <StatsBox>
                <TitleMoves>Base Stats</TitleMoves>
                <StatsInfo>
                {details.stats?.map((stat)=>{
                return (
                <>
                 <PText>{stat.stat.name}</PText> <Progress value={stat.base_stat} />
                </>)
                })}
                 
                </StatsInfo>
            </StatsBox>
            <MovesBox>
                <TitleMoves></TitleMoves>
                    {details.moves?.map((move)=>{
                        return( <Move1>
                        <PText>{move.move.name}</PText>
                       </Move1> )
                    })}
            </MovesBox>
        </Container>
        
    </PokeDetailPage>
    )
}