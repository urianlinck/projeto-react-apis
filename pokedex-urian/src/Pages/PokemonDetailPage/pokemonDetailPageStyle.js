import { styled, createGlobalStyle } from "styled-components"

export const PokeDetailPage = styled.body`
background-color:#5E5E5E;
height: 2295px;
width: 100%;
`;

export const Container = styled.div`
width: 95%;
height: 663px;
top: 200px;
background-color: ${(props) => props.color};
border-radius: 37.8857px;
display: grid;
position: relative;
margin: 25px;
color: #ffffff;
justify-content: start;
box-sizing: border-box;
align-content: space-evenly;
`;

export const Pokeball = styled.img`
position: absolute;
width: 665.31px;
height: 665.31px;
left: 700.66px;
top: 100px;
opacity: 0.40;
`;

export const PokemonImage = styled.img`
position: absolute;
width: 270px;
height: 270px;
left: 1109px;
top: 216px;
`;

export const PokeNumber = styled.text`
width: 30px;
height: 19px;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
`;

export const PokeName = styled.text`
height: 58px;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 58px;
/* identical to box height */
text-transform: capitalize;
color: #FFFFFF;
`;

export const PokeType = styled.img`
width: 46px;
height: 21px;
border: 1px dashed #ffffff;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */
color: #FFFFFF;
`;

export const TitleDetails = styled.section`
position: absolute;
height: 19px;
left: 774px;
top: 24px;
display: flex;
flex-direction: column;
`;

export const TypesContainer = styled.div`
margin-bottom: 52px;
`;

export const PokeFace = styled.img`
position: absolute;
width: 282px;
height: 282px;
left: 44px;
top: 26px;
background: #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;
`;

export const PokeBack = styled.img`
position: absolute;
width: 282px;
height: 282px;
left: 44px;
top: 355px;
background: #FFFFFF;
border: 2px solid #FFFFFF;
border-radius: 8px;
`;

export const StatsBox = styled.section`
position: absolute;
width: 343px;
height: 613px;
left: 360px;
top: 24px;
padding: 10px 8px;
background: #FFFFFF;
border-radius: 12px;
`;

export const StatsInfo = styled.section`
width: 307px;
height: 257px;
left: 378px;
top: 43px;
`;

export const MovesBox = styled.section`
position: absolute;
width: 292px;
height: 453px;
left: 771px;
top: 184px;
background: #FFFFFF;
border-radius: 8px;
overflow-y: scroll;
`;

export const TitleMoves = styled.h3`
left: 789px;
top: 202px;
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
/* identical to box height */
color: #000000;
`;

export const Move1 = styled.section`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px;
gap: 10px;
/* position: absolute; */
top: 599px;
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
`;

export const PText = styled.p`
color: #000000;
text-transform: capitalize;
`